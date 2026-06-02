"use client"

import React from "react"
import { LogoPatternBackground } from "./LogoPatternBackground"
import { LogoOrbitPattern } from "./LogoOrbitPattern"

interface HeroBrandPatternProps {
  className?: string
  darkTheme?: boolean
}

export function HeroBrandPattern({ className = "", darkTheme = false }: HeroBrandPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden ${className}`}>
      {/* 1. Base logo-derived radial gradients */}
      <LogoPatternBackground darkTheme={darkTheme} />

      {/* 2. Concentric orbit ribbon paths */}
      <LogoOrbitPattern opacity={darkTheme ? 0.28 : 0.15} />

      {/* 3. Subtle digital tech grid network pattern for structural precision */}
      {darkTheme ? (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,228,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,228,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-100" />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(1,122,202,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,122,202,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      )}

      {/* 4. Smooth gradient overlay fading down into light page content */}
      {darkTheme ? (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00232A]/20 to-[#00232A]" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
      )}
    </div>
  )
}
