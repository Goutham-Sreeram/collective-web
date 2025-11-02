"use client"

import React from "react"
import { motion, useSpring, animate } from "framer-motion"

interface NumberTickerProps {
  value: number
  className?: string
  style?: React.CSSProperties
}

export function NumberTicker({ value, className, style }: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const motionValue = useSpring(0, { stiffness: 80, damping: 20 })
  const clampedValue = Math.min(100, value) // Clamp value to 100

  React.useEffect(() => {
    const controls = animate(motionValue, clampedValue, {
      duration: 0.8,
      ease: "easeOut",
    })

    motionValue.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.min(100, Math.round(latest))}` // Ensure displayed value never exceeds 100
      }
    })

    return controls.stop
  }, [clampedValue, motionValue])

  return <span ref={ref} className={className} style={style}>0</span>
}
