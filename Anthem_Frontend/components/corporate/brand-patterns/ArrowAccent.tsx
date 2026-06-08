"use client"

import React from "react"

interface ArrowAccentProps {
  className?: string
  size?: number
  direction?: "up" | "up-right" | "right" | "down"
  stroke?: string
}

export function ArrowAccent({
  className = "",
  size = 20,
  direction = "up-right",
  stroke = "#FDCD02",
}: ArrowAccentProps) {
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
      <path
        d="M6 18L18 6M18 6H9M18 6V15"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
