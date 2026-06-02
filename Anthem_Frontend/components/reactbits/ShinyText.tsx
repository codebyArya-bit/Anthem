"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps {
  children: ReactNode
  className?: string
  speed?: string // duration like '2s', '3s', '4s'
  disabled?: boolean
}

export function ShinyText({
  children,
  className = "",
  speed = "3s",
  disabled = false,
}: ShinyTextProps) {
  if (disabled) {
    return <span className={className}>{children}</span>
  }

  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_100%] animate-shine",
        className
      )}
      style={{
        animation: `shine 5s linear infinite`,
      }}
    >
      {children}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shine {
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </span>
  )
}
