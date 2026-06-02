"use client"

import React from "react"

interface ArrowAccentProps {
  className?: string
  size?: number
  direction?: "up" | "up-right" | "right" | "down"
}

export function ArrowAccent({ className = "", size = 20, direction = "up-right" }: ArrowAccentProps) {
  const rotationMap = {
    up: "-rotate-45",
    "up-right": "rotate-0",
    right: "rotate-45",
    down: "rotate-135",
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transform transition-transform duration-300 ${rotationMap[direction]} ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      {/* Sleek, sharp vector line inspired by the Anthem logo's yellow arrow */}
      <path
        d="M6 18L18 6M18 6H9M18 6V15"
        stroke="#FDCD03"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
