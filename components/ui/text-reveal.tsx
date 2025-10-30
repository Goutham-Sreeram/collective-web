"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement>(null)

  // ✅ Faster + sooner reveal
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 90%", "end 90%"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 py-32", className)}>
      <span
        className={
          "flex flex-wrap justify-center p-5"
        }
      >
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </span>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [15, 0]) // small upward motion
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity, y }}
        className="text-white dark:text-black"
      >
        {children}
      </motion.span>
    </span>
  )
}
