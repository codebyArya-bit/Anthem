"use client"

import React from "react"

interface LogoPatternBackgroundProps {
  className?: string
  darkTheme?: boolean
}

export function LogoPatternBackground({ className = "", darkTheme = false }: LogoPatternBackgroundProps) {
  if (darkTheme) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none ${className}`}>
        {/* Lighter grid and premium mesh gradient from the Anthem palette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(1,122,202,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,122,202,0.045)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute left-[-12%] top-[-25%] h-[420px] w-[420px] rounded-full bg-[#017ACA]/10 blur-[100px] animate-blob opacity-80" />
        <div className="absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#FDCD02]/12 blur-[110px] animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute bottom-[-20%] left-[20%] h-[380px] w-[380px] rounded-full bg-[#017ACA]/7 blur-[120px] animate-blob animation-delay-4000 opacity-60" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none ${className}`}>
      {/* Abstract premium mesh gradient from Anthem Logo colors */}
      <div className="absolute top-[-25%] left-[-15%] w-[60%] h-[70%] rounded-full bg-gradient-to-br from-[#017ACA]/12 to-[#68B1DE]/5 blur-[100px] animate-blob opacity-80" />
      <div className="absolute top-[-15%] right-[-15%] w-[55%] h-[60%] rounded-full bg-gradient-to-bl from-[#FDCD03]/10 to-[#FADF72]/4 blur-[110px] animate-blob animation-delay-2000 opacity-70" />
      <div className="absolute bottom-[-20%] left-[15%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#017ACA]/6 to-[#68B1DE]/2 blur-[120px] animate-blob animation-delay-4000 opacity-60" />
    </div>
  )
}
