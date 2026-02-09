"use client";

import { motion, useSpring } from "framer-motion";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function CursorShield() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.2 });
  const y = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.2 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mouseover", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mouseover", onEnter);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ left: x, top: y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: pressed ? 0.92 : 1,
      }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      className="pointer-events-none fixed z-[70] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full border border-primary/40 bg-white/85 shadow-[0_0_0_2px_rgba(30,58,138,0.1)] backdrop-blur-[1px]">
        <Shield className="h-[11px] w-[11px] text-primary" strokeWidth={2} />
      </div>
    </motion.div>
  );
}
