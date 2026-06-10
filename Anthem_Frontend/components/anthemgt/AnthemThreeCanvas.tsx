"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  color?: string;
};

export function AnthemThreeCanvas({ className = "", color = "#017ACA" }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.touchAction = "none";
    canvas.style.cursor = "grab";
    host.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate wireframe sphere vertices
    const vertices: { x: number; y: number; z: number }[] = [];
    const lines: [number, number][] = [];
    const latCount = 7;
    const lonCount = 10;
    const radius = 1.35;

    for (let i = 0; i <= latCount; i++) {
      const theta = (i * Math.PI) / latCount;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let j = 0; j < lonCount; j++) {
        const phi = (j * Math.PI * 2) / lonCount;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        const x = radius * sinTheta * cosPhi;
        const y = radius * cosTheta;
        const z = radius * sinTheta * sinPhi;
        vertices.push({ x, y, z });
      }
    }

    for (let i = 0; i <= latCount; i++) {
      for (let j = 0; j < lonCount; j++) {
        const current = i * lonCount + j;
        const nextLon = i * lonCount + ((j + 1) % lonCount);
        lines.push([current, nextLon]);

        if (i < latCount) {
          const nextLat = (i + 1) * lonCount + j;
          lines.push([current, nextLat]);
        }
      }
    }

    // Generate orbit ring points
    const ringPoints: { x: number; y: number; z: number }[] = [];
    const ringRadius = 1.85;
    const ringResolution = 60;
    const ringTilt = Math.PI / 6; // 30 degrees tilt

    for (let i = 0; i < ringResolution; i++) {
      const angle = (i * Math.PI * 2) / ringResolution;
      const x = ringRadius * Math.cos(angle);
      const y = 0;
      const z = ringRadius * Math.sin(angle);

      // Rotate X axis to tilt the ring
      const cosT = Math.cos(ringTilt);
      const sinT = Math.sin(ringTilt);
      const yt = y * cosT - z * sinT;
      const zt = y * sinT + z * cosT;
      ringPoints.push({ x, y: yt, z: zt });
    }

    // Generate particles
    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
    }
    const particles: Particle[] = [];
    const particleCount = 70;
    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: 1.2 + Math.random() * 1.5,
        color: Math.random() > 0.45 ? "#22d3ee" : "#FDCD02",
      });
    }

    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.7;
    };
    canvas.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = host.clientWidth;
      const height = host.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    let ry = 0;
    let rx = 0;
    let frame = 0;

    interface ProjectedPoint {
      sx: number;
      sy: number;
      z: number;
    }

    const animate = () => {
      frame = requestAnimationFrame(animate);

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      if (width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radial glow
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.6
      );
      bgGrad.addColorStop(0, "rgba(1, 122, 202, 0.08)");
      bgGrad.addColorStop(0.5, "rgba(244, 250, 255, 0.45)");
      bgGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Increment rotation
      ry += 0.005 + pointerX * 0.002;
      rx += 0.0025 + pointerY * 0.002;

      // Project vertices
      const projVertices: ProjectedPoint[] = [];
      const camDist = 5;
      const fov = Math.min(width, height) * 0.75;

      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);

      const project = (p: { x: number; y: number; z: number }): ProjectedPoint => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective
        const scale = fov / (camDist + z2);
        const sx = width / 2 + x1 * scale;
        const sy = height / 2 - y2 * scale;

        return { sx, sy, z: z2 };
      };

      // Project all elements
      for (const v of vertices) {
        projVertices.push(project(v));
      }

      const projRing: ProjectedPoint[] = [];
      for (const rp of ringPoints) {
        projRing.push(project(rp));
      }

      const projParticles: (Particle & ProjectedPoint)[] = [];
      for (const p of particles) {
        projParticles.push({ ...p, ...project(p) });
      }

      // Collect all draw items
      interface DrawItem {
        z: number;
        draw: (c: CanvasRenderingContext2D) => void;
      }
      const drawList: DrawItem[] = [];

      // Add sphere lines
      for (const [i1, i2] of lines) {
        const p1 = projVertices[i1];
        const p2 = projVertices[i2];
        const avgZ = (p1.z + p2.z) / 2;

        drawList.push({
          z: avgZ,
          draw: (c) => {
            c.beginPath();
            c.moveTo(p1.sx, p1.sy);
            c.lineTo(p2.sx, p2.sy);
            c.strokeStyle = color;
            c.globalAlpha = Math.max(0.04, 0.45 - (avgZ + 1.35) / 2.7);
            c.lineWidth = 1;
            c.stroke();
          },
        });
      }

      // Add ring segments
      for (let i = 0; i < projRing.length; i++) {
        const p1 = projRing[i];
        const p2 = projRing[(i + 1) % projRing.length];
        const avgZ = (p1.z + p2.z) / 2;

        drawList.push({
          z: avgZ,
          draw: (c) => {
            c.beginPath();
            c.moveTo(p1.sx, p1.sy);
            c.lineTo(p2.sx, p2.sy);
            c.strokeStyle = "#22d3ee";
            c.globalAlpha = Math.max(0.08, 0.65 - (avgZ + 1.85) / 3.7);
            c.lineWidth = 1.75;
            c.stroke();
          },
        });
      }

      // Add particles
      for (const p of projParticles) {
        drawList.push({
          z: p.z,
          draw: (c) => {
            c.beginPath();
            const size = p.size * (1.3 - p.z / 5);
            c.arc(p.sx, p.sy, Math.max(0.2, size), 0, Math.PI * 2);
            c.fillStyle = p.color;
            c.globalAlpha = Math.max(0.08, 0.75 - (p.z + 2.5) / 5);
            c.fill();
          },
        });
      }

      // Sort by depth descending (further items drawn first)
      drawList.sort((a, b) => b.z - a.z);

      // Execute drawing
      for (const item of drawList) {
        item.draw(ctx);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.remove();
    };
  }, [color]);

  return (
    <div
      ref={hostRef}
      className={`relative aspect-square min-h-[280px] w-full overflow-hidden rounded-3xl bg-white/20 ${className}`}
      aria-label="Interactive technology visual"
    />
  );
}
