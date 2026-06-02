"use client"

import React from "react"

interface DataLineDividerProps {
  className?: string
  accent?: "cyan" | "yellow" | "blue" | "all"
}

export function DataLineDivider({ className = "", accent = "all" }: DataLineDividerProps) {
  const getGradient = () => {
    switch (accent) {
      case "cyan":
        return "from-transparent via-[#00FFE4]/40 to-transparent"
      case "yellow":
        return "from-transparent via-[#FDCD03]/40 to-transparent"
      case "blue":
        return "from-transparent via-[#017ACA]/40 to-transparent"
      case "all":
      default:
        return "from-transparent via-[#00FFE4]/20 via-[#017ACA]/30 via-[#FDCD03]/30 to-transparent"
    }
  }

  return (
    <div className={`relative w-full h-[1.5px] overflow-hidden select-none pointer-events-none ${className}`}>
      {/* 1. Base decorative line with elegant gradient color band structure */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getGradient()} opacity-80`} />

      {/* 2. A subtle, slow micro-pulse animation traversing the divider */}
      <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[pulse_3s_infinite_linear]" 
           style={{
             animation: "dataScan 4.5s infinite linear"
           }}
      />

      <style jsx global>{`
        @keyframes dataScan {
          0% {
            left: -10%;
          }
          100% {
            left: 110%;
          }
        }
      `}</style>
    </div>
  )
}
