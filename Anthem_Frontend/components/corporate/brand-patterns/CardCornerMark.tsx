"use client"

import React from "react"

interface CardCornerMarkProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  className?: string
}

export function CardCornerMark({ position = "top-right", className = "" }: CardCornerMarkProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  }

  const rotationClasses = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  }

  return (
    <div className={`absolute size-7 pointer-events-none overflow-hidden select-none z-10 ${positionClasses[position]} ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full opacity-[0.35] group-hover:opacity-[0.8] transition-opacity duration-300 ${rotationClasses[position]}`}
      >
        {/* Soft digital blue orbit path on card corner */}
        <path
          d="M0,28 A28,28 0 0,1 28,0"
          stroke="#017ACA"
          strokeWidth="1.25"
          fill="none"
        />
        <path
          d="M0,22 A22,22 0 0,1 22,0"
          stroke="#017ACA"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          fill="none"
        />
        {/* Tiny yellow accent tip at the very corner edge */}
        <path
          d="M22,0 L28,0 L28,6 Z"
          fill="#FDCD02"
        />
      </svg>
    </div>
  )
}
