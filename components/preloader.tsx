"use client"

import React from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import catAnimation from "@/public/preloadcat.json"
import { NumberTicker } from "@/registry/magicui/number-ticker"

type PreloaderProps = {
  isLoading: boolean
  onFinish?: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading, onFinish }) => {
  const [progress, setProgress] = React.useState(0)
  const [animationComplete, setAnimationComplete] = React.useState(false)
  const lottieRef = React.useRef<any>(null)

  React.useEffect(() => {
    // First phase: count to 99
    const countInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(countInterval)
          return 99
        }
        return prev + 1
      })
    }, 40)

    // Second phase: wait then hit 100
    const finalTimer = setTimeout(() => {
      setProgress(100)
      setAnimationComplete(true)
      // Third phase: transition after reaching 100
      setTimeout(() => {
        onFinish && onFinish()
      }, 1000)
    }, 4000)

    return () => {
      clearInterval(countInterval)
      clearTimeout(finalTimer)
    }
  }, [onFinish])

  React.useEffect(() => {
    if (progress === 100 && lottieRef.current) {
      // Stop on the last frame when progress reaches 100
      lottieRef.current.setSpeed(0.6) // Slow down the animation
      lottieRef.current.goToAndStop(lottieRef.current.getDuration(true) * 1000, true)
    }
  }, [progress])

  return (
    <motion.div
      aria-hidden={!isLoading}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} // Smoother transition
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="flex flex-col items-center gap-8">
        <NumberTicker
          value={progress}
          className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black"
          style={{ fontFamily: 'Cal Sans, sans-serif' }}
        />
        <div className="w-[300px] h-[300px] mb-2">
          <Lottie
            lottieRef={lottieRef}
            animationData={catAnimation}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
    </motion.div>
  )
}
