"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

type CountUpStatProps = {
  value: string
  className?: string
}

export function CountUpStat({ value, className }: CountUpStatProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Extract numbers and non-numeric suffixes (e.g. "Cr+", "+", "%")
  const match = value.match(/^([\d.,]+)(.*)$/)
  if (!match) {
    return <span className={className}>{value}</span>
  }

  const numericPart = parseFloat(match[1].replace(/,/g, ""))
  const suffix = match[2]

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={numericPart}
          duration={2}
          separator=","
          decimals={match[1].includes(".") ? match[1].split(".")[1].length : 0}
        />
      ) : (
        "0"
      )}
      {suffix}
    </span>
  )
}
