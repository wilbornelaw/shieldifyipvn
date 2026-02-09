export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const motionDurations = {
  fast: 0.3,
  base: 0.42,
  slow: 0.55,
};

export const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

