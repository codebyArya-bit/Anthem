"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useEffect, useState } from "react"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  staggerDuration?: number
  duration?: number
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDuration = 0.03,
  duration = 0.5,
}: SplitTextProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(" ")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDuration,
      },
    },
  }

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap" aria-hidden="true">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              className="inline-block"
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}
