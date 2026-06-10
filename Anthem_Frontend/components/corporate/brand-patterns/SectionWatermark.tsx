"use client"

import React from "react"

export function SectionWatermark({ className = "", size = 380 }: { className?: string; size?: number }) {
  return (
    <div className={`absolute pointer-events-none -z-10 select-none overflow-hidden ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-[0.038] transition-opacity duration-500 text-slate-400"
      >
        {/* Soft orbit crescent ribbon from logo */}
        <path
          d="M 35,100 A 65,65 0 1,1 165,100 A 50,50 0 1,0 50,100"
          fill="#017ACA"
        />
        {/* Arrow/triangle part from logo */}
        <path
          d="M 120,50 L 175,90 L 140,115 Z"
          fill="#FDCD03"
        />
        {/* Concentric digital tech orbit lines for details */}
        <circle cx="100" cy="100" r="82" stroke="#017ACA" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="90" stroke="#017ACA" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
