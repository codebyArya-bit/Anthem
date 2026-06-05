"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
  color?: string;
};

export function AnthemThreeCanvas({ className = "", color = "#2563eb" }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.z = 5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      if (!renderer.getContext()) {
        throw new Error("Context is null");
      }
    } catch (err) {
      console.warn("AnthemThreeCanvas: WebGL with antialiasing failed, retrying without antialiasing...", err);
      try {
        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        if (!renderer.getContext()) {
          throw new Error("Fallback context is null");
        }
      } catch (err2) {
        console.error("AnthemThreeCanvas: WebGL initialization failed completely:", err2);
        host.innerHTML = `
          <div class="absolute inset-0 overflow-hidden bg-slate-950 rounded-2xl">
            <div style="position:absolute;inset:-12%;background:
              radial-gradient(circle at 18% 20%, rgba(34,211,238,.22), transparent 34%),
              radial-gradient(circle at 82% 26%, rgba(1,122,202,.20), transparent 32%),
              radial-gradient(circle at 50% 86%, rgba(253,205,3,.08), transparent 28%);
              filter: blur(2px);"></div>
            <div style="position:absolute;inset:14% 16% 18% 16%;border:1px solid rgba(255,255,255,.10);border-radius:28px;background:rgba(2,35,42,.70);backdrop-filter: blur(16px);box-shadow:0 20px 60px rgba(0,0,0,.35);"></div>
            <div style="position:absolute;left:18%;top:28%;width:26%;height:24%;border-radius:24px;border:1px solid rgba(34,211,238,.22);background:linear-gradient(145deg, rgba(34,211,238,.16), rgba(2,35,42,.72));box-shadow:0 12px 40px rgba(0,0,0,.22);"></div>
            <div style="position:absolute;right:16%;top:24%;width:22%;height:18%;border-radius:22px;border:1px solid rgba(253,205,3,.18);background:linear-gradient(145deg, rgba(253,205,3,.12), rgba(2,35,42,.78));box-shadow:0 12px 36px rgba(0,0,0,.2);"></div>
            <div style="position:absolute;right:18%;bottom:22%;width:28%;height:20%;border-radius:24px;border:1px solid rgba(255,255,255,.08);background:linear-gradient(145deg, rgba(255,255,255,.08), rgba(2,35,42,.80));box-shadow:0 12px 36px rgba(0,0,0,.2);"></div>
            <div style="position:absolute;inset:0;display:flex;align-items:end;justify-content:space-between;padding:18px;">
              <div style="max-width:72%;">
                <div style="display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(34,211,238,.22);background:rgba(2,35,42,.82);padding:6px 12px;font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#7ff9ff;">
                  Static fallback
                </div>
                <div style="margin-top:10px;font-size:12px;line-height:1.5;color:rgba(226,232,240,.72);max-width:360px;">
                  A live WebGL renderer could not start in this browser context, so this panel stays visually present without breaking the page.
                </div>
              </div>
              <div style="border-radius:999px;border:1px solid rgba(253,205,3,.20);background:rgba(253,205,3,.14);padding:8px 12px;font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#f8e16b;">
                3D preview
              </div>
            </div>
          </div>`;
        return () => {
          host.innerHTML = "";
        };
      }
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.dataset.engine = "three.js r157";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.cursor = "grab";
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.45, 2);
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.32,
      metalness: 0.18,
      transparent: true,
      opacity: 0.88,
      wireframe: true,
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#22d3ee",
      transparent: true,
      opacity: 0.38,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.015, 12, 96), ringMaterial);
    ring.rotation.x = Math.PI / 2.6;
    group.add(ring);

    const particles = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.1 + Math.random() * 1.25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointCloud = new THREE.Points(
      particles,
      new THREE.PointsMaterial({ color: "#e0f2fe", size: 0.025, transparent: true, opacity: 0.72 }),
    );
    group.add(pointCloud);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const light = new THREE.DirectionalLight(0xffffff, 1.4);
    light.position.set(3, 2, 5);
    scene.add(light);

    let pointerX = 0;
    let pointerY = 0;
    const handlePointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.7;
    };
    renderer.domElement.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.006 + pointerX * 0.002;
      group.rotation.x += 0.003 + pointerY * 0.002;
      ring.rotation.z -= 0.008;
      pointCloud.rotation.y -= 0.0018;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      geometry.dispose();
      material.dispose();
      ring.geometry.dispose();
      ringMaterial.dispose();
      particles.dispose();
      renderer.forceContextLoss();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [color]);

  return (
    <div
      ref={hostRef}
      className={`relative aspect-square min-h-[280px] w-full overflow-hidden rounded-2xl bg-slate-950/90 ${className}`}
      aria-label="Interactive Three.js technology visual"
    />
  );
}
