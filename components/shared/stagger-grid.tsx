"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { staggerContainer } from "@/lib/motion";

export function StaggerGrid({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return <motion.div variants={{ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } }}>{children}</motion.div>;
}

