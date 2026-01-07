"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Generate realistic, irregular water droplets for screen
function generateScreenDroplets(count: number) {
  const droplets = [];

  for (let i = 0; i < count; i++) {
    // Random position - avoid too much clustering
    const x = 5 + Math.random() * 90;
    const y = 5 + Math.random() * 85;

    // Varied sizes - more small ones, fewer large
    const sizeRand = Math.random();
    const size = sizeRand < 0.5
      ? 8 + Math.random() * 12  // small
      : sizeRand < 0.8
        ? 15 + Math.random() * 20  // medium
        : 30 + Math.random() * 25; // large

    // Droplet shape variations
    const shapeType = Math.random();
    const isRunning = shapeType < 0.2; // dripping down
    const isElongated = shapeType >= 0.2 && shapeType < 0.4;
    const isMerged = shapeType >= 0.4 && shapeType < 0.5; // two droplets merged

    // Random rotation for organic look
    const rotation = (Math.random() - 0.5) * 40;

    // Irregular border radius for non-perfect circles
    const br1 = 40 + Math.random() * 20;
    const br2 = 40 + Math.random() * 20;
    const br3 = 40 + Math.random() * 20;
    const br4 = 40 + Math.random() * 20;

    // Drip tail length for running droplets
    const tailLength = isRunning ? 20 + Math.random() * 60 : 0;

    droplets.push({
      id: i,
      x,
      y,
      size,
      isRunning,
      isElongated,
      isMerged,
      rotation,
      borderRadius: `${br1}% ${br2}% ${br3}% ${br4}%`,
      tailLength,
      // Animation timing
      appearDelay: 0.05 + Math.random() * 0.4,
      dryDelay: 0.3 + Math.random() * 1.2,
      dryDuration: 0.6 + Math.random() * 0.8,
    });
  }

  return droplets;
}

// Crown droplets for splash
function generateCrownDroplets(count: number) {
  const droplets = [];
  const angleStep = 360 / count;

  for (let i = 0; i < count; i++) {
    const baseAngle = i * angleStep + (Math.random() - 0.5) * 20;
    const velocity = 250 + Math.random() * 250;
    const size = 3 + Math.random() * 5;

    droplets.push({
      id: i,
      angle: baseAngle,
      velocity,
      size,
      delay: Math.random() * 0.06,
    });
  }

  return droplets;
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"falling" | "impact" | "splash" | "wet" | "drying" | "done">("falling");

  const screenDroplets = useMemo(() => generateScreenDroplets(30), []);
  const crownDroplets = useMemo(() => generateCrownDroplets(14), []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("impact"), 550),
      setTimeout(() => setPhase("splash"), 600),
      setTimeout(() => setPhase("wet"), 1000),
      setTimeout(() => setPhase("drying"), 1500),
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const waterSurfaceY = 65;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          {/* Background gradient - sky to water */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                #0a1628 0%,
                #0f2847 25%,
                #1a3d75 ${waterSurfaceY - 8}%,
                #26549e ${waterSurfaceY}%,
                #1a4a7a ${waterSurfaceY + 15}%,
                #0f3055 100%)`,
            }}
          />

          {/* Water surface highlight */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${waterSurfaceY}%`,
              background: "linear-gradient(90deg, transparent 10%, rgba(62,199,245,0.5) 50%, transparent 90%)",
            }}
          />

          {/* Falling drop with gravity */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-30"
            initial={{ top: "-12%", scale: 1 }}
            animate={
              phase === "falling"
                ? { top: `${waterSurfaceY - 6}%`, scale: 1 }
                : { top: `${waterSurfaceY}%`, scale: 0, opacity: 0 }
            }
            transition={
              phase === "falling"
                ? { duration: 0.55, ease: [0.35, 0, 0.9, 0.3] }
                : { duration: 0.04 }
            }
          >
            <svg width="55" height="77" viewBox="0 0 50 70">
              <defs>
                <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8faff" />
                  <stop offset="30%" stopColor="#7dd8f7" />
                  <stop offset="65%" stopColor="#3ec7f5" />
                  <stop offset="100%" stopColor="#1a6eb5" />
                </linearGradient>
              </defs>
              <path
                d="M25 0 C25 0 50 35 50 48 C50 62 39 70 25 70 C11 70 0 62 0 48 C0 35 25 0 25 0Z"
                fill="url(#dropGrad)"
              />
              <ellipse cx="14" cy="36" rx="7" ry="11" fill="rgba(255,255,255,0.55)" transform="rotate(-18 14 36)" />
              <ellipse cx="11" cy="30" rx="3" ry="5" fill="rgba(255,255,255,0.75)" transform="rotate(-18 11 30)" />
            </svg>
          </motion.div>

          {/* Impact flash */}
          {phase === "impact" && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${waterSurfaceY}%` }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 2.5, 4], opacity: [1, 0.7, 0] }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="w-24 h-12 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(62,199,245,0.4) 50%, transparent 75%)",
                }}
              />
            </motion.div>
          )}

          {/* Water column jet */}
          {(phase === "splash" || phase === "wet") && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: `${waterSurfaceY - 18}%`, transformOrigin: "bottom center" }}
              initial={{ scaleY: 0, scaleX: 1 }}
              animate={{
                scaleY: [0, 1.3, 1, 0.4, 0],
                scaleX: [1, 0.6, 0.7, 1.1, 1.4],
                opacity: [1, 1, 0.9, 0.6, 0]
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <svg width="36" height="130" viewBox="0 0 36 130">
                <defs>
                  <linearGradient id="jetGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#26549e" />
                    <stop offset="35%" stopColor="#3ec7f5" />
                    <stop offset="75%" stopColor="#7dd8f7" />
                    <stop offset="100%" stopColor="#e8faff" />
                  </linearGradient>
                </defs>
                <path
                  d="M18 130 C6 130 4 105 8 65 C10 40 6 18 18 0 C30 18 26 40 28 65 C32 105 30 130 18 130Z"
                  fill="url(#jetGrad)"
                />
              </svg>
            </motion.div>
          )}

          {/* Crown droplets - parabolic */}
          {(phase === "splash" || phase === "wet") && crownDroplets.map((droplet) => {
            const rad = (droplet.angle * Math.PI) / 180;
            const dist = 70 + droplet.velocity * 0.18;
            const endX = Math.cos(rad) * dist;
            const peakY = -35 - droplet.velocity * 0.12;

            return (
              <motion.div
                key={`crown-${droplet.id}`}
                className="absolute z-20"
                style={{
                  left: "50%",
                  top: `${waterSurfaceY}%`,
                  width: droplet.size,
                  height: droplet.size * 1.4,
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: [0, endX * 0.55, endX],
                  y: [0, peakY, 25],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.2],
                }}
                transition={{
                  duration: 0.55,
                  delay: droplet.delay,
                  ease: [0.15, 0, 0.85, 1],
                  times: [0, 0.42, 1],
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    borderRadius: "45% 55% 50% 50%",
                    background: "radial-gradient(ellipse at 35% 30%, #e8faff, #3ec7f5 50%, #1a6eb5)",
                  }}
                />
              </motion.div>
            );
          })}

          {/* Ripples on water */}
          {(phase === "splash" || phase === "wet" || phase === "drying") && (
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: `${waterSurfaceY}%` }}>
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`ripple-${i}`}
                  className="absolute left-1/2 -translate-x-1/2"
                  initial={{ width: 10, height: 4, opacity: 0.7 }}
                  animate={{
                    width: [10, 280 + i * 120],
                    height: [4, 35 + i * 12],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.3,
                    delay: 0.08 + i * 0.18,
                    ease: "easeOut",
                  }}
                  style={{
                    border: `1.5px solid rgba(62,199,245,${0.6 - i * 0.1})`,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          )}

          {/* REALISTIC WATER DROPLETS ON SCREEN */}
          {(phase === "splash" || phase === "wet" || phase === "drying") && (
            <div className="absolute inset-0 z-50 pointer-events-none">
              {screenDroplets.map((drop) => (
                <motion.div
                  key={`screen-${drop.id}`}
                  className="absolute"
                  style={{
                    left: `${drop.x}%`,
                    top: `${drop.y}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    phase === "drying"
                      ? { scale: [1, 0.6, 0], opacity: [1, 0.5, 0] }
                      : { scale: [0, 1.15, 1], opacity: [0, 1, 1] }
                  }
                  transition={
                    phase === "drying"
                      ? { duration: drop.dryDuration, delay: drop.dryDelay, ease: "easeInOut" }
                      : { duration: 0.25, delay: drop.appearDelay, ease: "easeOut" }
                  }
                >
                  {drop.isRunning ? (
                    // Running/dripping droplet with tail
                    <svg
                      width={drop.size * 0.8}
                      height={drop.size + drop.tailLength}
                      viewBox={`0 0 30 ${50 + drop.tailLength}`}
                      style={{ transform: `rotate(${drop.rotation * 0.3}deg)` }}
                    >
                      <defs>
                        <linearGradient id={`runGrad${drop.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                          <stop offset="30%" stopColor="rgba(200,240,255,0.6)" />
                          <stop offset="70%" stopColor="rgba(62,199,245,0.45)" />
                          <stop offset="100%" stopColor="rgba(26,84,158,0.5)" />
                        </linearGradient>
                      </defs>
                      {/* Tail */}
                      <path
                        d={`M15 25 Q18 ${30 + drop.tailLength * 0.3} 16 ${40 + drop.tailLength * 0.6} Q14 ${45 + drop.tailLength} 15 ${50 + drop.tailLength}`}
                        fill="none"
                        stroke="rgba(62,199,245,0.35)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {/* Main drop body */}
                      <ellipse
                        cx="15"
                        cy="18"
                        rx="12"
                        ry="15"
                        fill={`url(#runGrad${drop.id})`}
                      />
                      {/* Highlight */}
                      <ellipse cx="10" cy="12" rx="4" ry="5" fill="rgba(255,255,255,0.7)" />
                    </svg>
                  ) : drop.isMerged ? (
                    // Merged/double droplet
                    <svg
                      width={drop.size * 1.4}
                      height={drop.size * 1.1}
                      viewBox="0 0 60 45"
                      style={{ transform: `rotate(${drop.rotation}deg)` }}
                    >
                      <defs>
                        <radialGradient id={`mergeGrad${drop.id}`} cx="35%" cy="35%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                          <stop offset="25%" stopColor="rgba(200,240,255,0.55)" />
                          <stop offset="60%" stopColor="rgba(62,199,245,0.4)" />
                          <stop offset="100%" stopColor="rgba(26,84,158,0.45)" />
                        </radialGradient>
                      </defs>
                      {/* Merged blob shape */}
                      <path
                        d="M20 8 Q35 5 45 15 Q55 25 45 35 Q35 42 25 38 Q10 35 8 25 Q5 15 20 8 Z"
                        fill={`url(#mergeGrad${drop.id})`}
                      />
                      {/* Highlights */}
                      <ellipse cx="18" cy="15" rx="5" ry="6" fill="rgba(255,255,255,0.65)" />
                      <ellipse cx="38" cy="20" rx="3" ry="4" fill="rgba(255,255,255,0.5)" />
                    </svg>
                  ) : drop.isElongated ? (
                    // Elongated droplet
                    <div
                      style={{
                        width: drop.size * 0.7,
                        height: drop.size * 1.3,
                        borderRadius: drop.borderRadius,
                        transform: `rotate(${drop.rotation}deg)`,
                        background: `radial-gradient(ellipse at 30% 25%,
                          rgba(255,255,255,0.85) 0%,
                          rgba(200,240,255,0.55) 25%,
                          rgba(62,199,245,0.4) 55%,
                          rgba(26,84,158,0.5) 100%)`,
                        boxShadow: `
                          inset ${drop.size * 0.05}px ${drop.size * 0.05}px ${drop.size * 0.15}px rgba(255,255,255,0.5),
                          0 ${drop.size * 0.03}px ${drop.size * 0.08}px rgba(0,0,0,0.15)
                        `,
                      }}
                    />
                  ) : (
                    // Irregular round droplet
                    <div
                      style={{
                        width: drop.size,
                        height: drop.size * (0.85 + Math.random() * 0.3),
                        borderRadius: drop.borderRadius,
                        transform: `rotate(${drop.rotation}deg)`,
                        background: `radial-gradient(ellipse at 32% 28%,
                          rgba(255,255,255,0.9) 0%,
                          rgba(220,248,255,0.6) 20%,
                          rgba(62,199,245,0.4) 50%,
                          rgba(26,84,158,0.5) 85%,
                          rgba(15,40,72,0.55) 100%)`,
                        boxShadow: `
                          inset ${drop.size * 0.08}px ${drop.size * 0.06}px ${drop.size * 0.2}px rgba(255,255,255,0.6),
                          inset -${drop.size * 0.04}px -${drop.size * 0.04}px ${drop.size * 0.1}px rgba(26,84,158,0.3),
                          0 ${drop.size * 0.04}px ${drop.size * 0.1}px rgba(0,0,0,0.2)
                        `,
                      }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Extra tiny spray droplets */}
              {[...Array(20)].map((_, i) => {
                const x = 8 + (i * 4.3) % 84;
                const y = 12 + (i * 7.1) % 76;
                const size = 2 + (i % 4);

                return (
                  <motion.div
                    key={`spray-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      width: size,
                      height: size,
                      background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(62,199,245,0.5))",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      phase === "drying"
                        ? { scale: 0, opacity: 0 }
                        : { scale: 1, opacity: 0.85 }
                    }
                    transition={{
                      duration: phase === "drying" ? 0.4 : 0.15,
                      delay: phase === "drying" ? 0.1 + i * 0.04 : 0.35 + i * 0.02,
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Logo with white background */}
          <motion.div
            className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={
              phase === "drying"
                ? { scale: 1, opacity: 1 }
                : { scale: 0.85, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* White background behind logo */}
            <div
              className="absolute inset-0 -m-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.95) 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Image
              src="/images/logo.png"
              alt="Euromarket"
              width={280}
              height={85}
              className="relative z-10"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={
              phase === "drying"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 25 }
            }
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute bottom-16 left-0 right-0 text-white/90 text-lg font-medium tracking-widest text-center z-40"
          >
            Water & Wastewater Engineering Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
