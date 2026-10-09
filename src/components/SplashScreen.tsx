"use client";

import { useState, useCallback, useRef, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPLASH_SEEN_CLASS as SEEN_CLASS, SPLASH_SEEN_KEY as SEEN_KEY } from "@/lib/splash";

const noSubscribe = () => () => {};

function markSeen() {
  document.documentElement.classList.add(SEEN_CLASS);
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {}
}

/**
 * Intro video shown over the home page once per browser session.
 *
 * The page underneath is always rendered and visible, so crawlers and Core Web
 * Vitals see real content; SPLASH_INIT_SCRIPT (src/lib/splash.ts) decides before
 * first paint whether the overlay is hidden.
 */
export default function SplashScreen() {
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The class only changes before hydration or in finish(), so no subscription.
  const seenEarlier = useSyncExternalStore(
    noSubscribe,
    () => document.documentElement.classList.contains(SEEN_CLASS),
    () => false
  );

  const finish = useCallback(() => {
    markSeen();
    setDone(true);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime < 1.5 && !fading) {
      setFading(true);
    }
  }, [fading]);

  return (
    <AnimatePresence>
      {!done && !seenEarlier && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (fading) finish();
          }}
          className="splash-overlay fixed inset-0 z-[100] overflow-hidden bg-black"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={finish}
            onError={finish}
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
