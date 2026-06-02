"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LogoLoopProps {
  children: ReactNode[]
  className?: string
  speed?: number // speed multiplier (e.g. 20, 30, 40 seconds)
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export function LogoLoop({
  children,
  className = "",
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: LogoLoopProps) {
  // We double the children to create a seamless infinite loop scrolling track
  const items = [...children, ...children, ...children]

  return (
    <div className={cn("relative w-full overflow-hidden py-4 mask-horizontal", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-8",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
        .mask-horizontal {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </div>
  )
}
