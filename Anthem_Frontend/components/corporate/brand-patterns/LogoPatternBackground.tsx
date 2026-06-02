"use client"

import React from "react"

interface LogoPatternBackgroundProps {
  className?: string
  darkTheme?: boolean
}

export function LogoPatternBackground({ className = "", darkTheme = false }: LogoPatternBackgroundProps) {
  if (darkTheme) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none bg-[#00232A] ${className}`}>
        {/* Abstract premium mesh gradient from Deep Enterprise Tech palette */}
        <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[80%] rounded-full bg-gradient-to-br from-[#00FFE4]/8 via-[#017ACA]/12 to-transparent blur-[120px] animate-blob opacity-80" />
        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[70%] rounded-full bg-gradient-to-bl from-[#FDCD03]/6 via-[#017ACA]/10 to-transparent blur-[130px] animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute bottom-[-30%] left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#00FFE4]/5 via-[#017ACA]/6 to-transparent blur-[140px] animate-blob animation-delay-4000 opacity-60" />
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
