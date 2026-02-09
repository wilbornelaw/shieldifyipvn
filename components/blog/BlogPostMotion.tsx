"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { motionDurations, motionEase } from "@/lib/motion";

export function BlogPostMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDurations.base, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
