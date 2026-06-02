"use client"

import type { ReactNode } from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltedCardProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  maxRotate?: number // maximum rotation degrees
  scale?: number // scale on hover
}

export function TiltedCard({
  children,
  className = "",
  innerClassName = "",
  maxRotate = 10,
  scale = 1.02,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Motion values for tracking cursor relative coordinates (-0.5 to 0.5)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  // Smooth springs to avoid jerky mouse moves
  const rotateX = useSpring(useTransform(y, [0, 1], [maxRotate, -maxRotate]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxRotate, maxRotate]), {
    stiffness: 150,
    damping: 20,
  })
  const cardScale = useSpring(isHovered ? scale : 1, {
    stiffness: 200,
    damping: 25,
  })

  // Detect mobile touch interface to disable tilt completely (accessibility & performance)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0
      )
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Relative coordinates between 0 and 1
    const mouseX = (e.clientX - rect.left) / width
    const mouseY = (e.clientY - rect.top) / height

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseEnter = () => {
    if (isMobile) return
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Reset spring to center position
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <div
      ref={cardRef}
      className={cn("perspective-[1000px] h-full", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn("size-full rounded-lg preserve-3d transition-shadow duration-300", innerClassName)}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: cardScale,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
