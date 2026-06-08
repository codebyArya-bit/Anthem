"use client"

import React from "react"

interface LogoOrbitPatternProps {
  className?: string
  opacity?: number
}

export function LogoOrbitPattern({ className = "", opacity = 0.15 }: LogoOrbitPatternProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full pointer-events-none -z-10 select-none ${className}`}
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      {/* Dynamic cyan/blue orbit lines mimicking the logo's ribbon curve */}
      <path
        d="M -100 450 C 300 200, 700 500, 1300 150"
        stroke="url(#cyanOrbitGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M -50 480 C 350 230, 750 530, 1350 180"
        stroke="url(#blueOrbitGrad)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />
      <path
        d="M -150 420 C 250 170, 650 470, 1250 120"
        stroke="url(#yellowOrbitGrad)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Decorative concentric digital orbit nodes */}
      <circle cx="950" cy="200" r="160" stroke="#017ACA" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="950" cy="200" r="100" stroke="#017ACA" strokeWidth="1.5" opacity="0.3" />
      <circle cx="150" cy="400" r="220" stroke="#017ACA" strokeWidth="1" opacity="0.25" />
      
      {/* Precision yellow arrow nodes */}
      <circle cx="550" cy="335" r="4" fill="#FDCD02" />
      <circle cx="850" cy="235" r="3" fill="#017ACA" />
      <circle cx="280" cy="275" r="3" fill="#017ACA" />

      <defs>
        <linearGradient id="cyanOrbitGrad" x1="0" y1="300" x2="1200" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#017ACA" />
          <stop offset="0.5" stopColor="#017ACA" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="blueOrbitGrad" x1="0" y1="300" x2="1200" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#017ACA" />
          <stop offset="0.7" stopColor="#017ACA" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="yellowOrbitGrad" x1="0" y1="300" x2="1200" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDCD02" />
          <stop offset="0.4" stopColor="#017ACA" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  )
}
