export const fadeIn = (direction = "up") => {
  return {
    initial: {
      y: direction === "up" ? 40 : -78,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
};
