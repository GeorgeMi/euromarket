"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    setDone(true);
    onComplete();
  }, [onComplete]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime < 1.5 && !fading) {
      setFading(true);
    }
  }, [fading]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (fading) {
              setDone(true);
              onComplete();
            }
          }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain"
          >
            <source src="/videos/splash_video.mp4" type="video/mp4" />
          </video>
                  </motion.div>
      )}
    </AnimatePresence>
  );
}
