"use client"

import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/preload.json";

export default function Preloader() {
  const [isHidden, setIsHidden] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const handleReady = () => {
      // Ensure the preloader shows at least briefly, then fade out
      const MIN_VISIBLE_MS = 800;
      const startedAt = performance.now();

      const hide = () => {
        const elapsed = performance.now() - startedAt;
        const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
        const timer = setTimeout(() => setIsHidden(true), remaining);
        return () => clearTimeout(timer);
      };

      // If the animation is configured to not loop, hide on complete
      if (lottieRef.current) {
        lottieRef.current.setSpeed(1);
      }

      // Fallback: hide after window load event
      return hide();
    };

    if (document.readyState === "complete") {
      const cleanup = handleReady();
      return () => {
        if (cleanup) cleanup();
      };
    }

    window.addEventListener("load", handleReady);
    return () => {
      window.removeEventListener("load", handleReady);
    };
  }, []);

  return (
    <div className={`preloader ${isHidden ? "preloader-hide" : ""}`} aria-hidden={isHidden}>
      <div className="preloader-inner">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData as unknown as object}
          loop={false}
          autoplay
          style={{ width: 220, height: 220 }}
        />
      </div>
    </div>
  );
}


