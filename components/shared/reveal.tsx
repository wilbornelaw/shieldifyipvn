"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

import { motionDurations, motionEase } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  revealKey,
}: {
  children: ReactNode;
  delay?: number;
  revealKey?: string;
}) {
  const storageKey = revealKey ? `shieldify-reveal-${revealKey}` : undefined;
  const [hasRevealed, setHasRevealed] = useState(() => {
    if (typeof window === "undefined" || !storageKey) return false;
    return sessionStorage.getItem(storageKey) === "1";
  });

  return (
    <motion.div
      initial={hasRevealed ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: motionDurations.base, ease: motionEase, delay }}
      onAnimationComplete={() => {
        if (storageKey) {
          sessionStorage.setItem(storageKey, "1");
          setHasRevealed(true);
        }
      }}
    >
      {children}
    </motion.div>
  );
}
