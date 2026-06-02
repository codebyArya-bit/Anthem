"use client"

import React from "react"
import { ArrowAccent } from "./ArrowAccent"
import { Button } from "@/components/ui/button"

interface BrandCTAProps {
  title: string
  description: string
  buttonText: string
  onClick?: () => void
  href?: string
  className?: string
}

export function BrandCTA({ title, description, buttonText, onClick, href, className = "" }: BrandCTAProps) {
  const handleAction = () => {
    if (onClick) onClick()
    else if (href) window.location.href = href
  }

  return (
    <div className={`relative max-w-5xl mx-auto rounded-2xl border border-[#00FFE4]/20 bg-[#00232A] p-8 md:p-10 shadow-lg overflow-hidden group ${className}`}>
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,228,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,228,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Decorative ambient cyan orb glow in corner (extremely low opacity) */}
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 rounded-full bg-[#00FFE4]/5 blur-[80px] pointer-events-none" />

      <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center relative z-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-[#F4FBFC] tracking-tight md:text-3xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#A9C1C7] max-w-2xl font-medium">
            {description}
          </p>
        </div>
        
        <div className="shrink-0">
          <Button
            onClick={handleAction}
            className="rounded-xl flex items-center justify-center gap-2 bg-[#FDCD03] text-[#00232A] hover:bg-[#FDCD03]/90 font-bold px-6 py-5 shadow-md border-0 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{buttonText}</span>
            <ArrowAccent size={13} direction="right" className="text-[#00232A] group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}
