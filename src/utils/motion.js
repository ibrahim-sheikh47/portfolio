export const textVariant = (delay) => {
  return {
    hidden: {
      y: -10, // Reduced from -20 for minimal movement
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween", // Changed from spring to tween for instant response
        duration: 0.1, // Ultra fast - reduced from 0.3
        delay: delay || 0,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 15 : direction === "right" ? -15 : 0, // Reduced from 30 for minimal movement
      y: direction === "up" ? 15 : direction === "down" ? -15 : 0, // Reduced from 30 for minimal movement
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay || 0,
        duration: duration || 0.1, // Ultra fast - reduced from 0.2
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0.98, // Minimal scale change from 0.95
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay || 0,
        duration: duration || 0.08, // Ultra fast - reduced from 0.15
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-30%" : direction === "right" ? "30%" : 0, // Reduced from 50%
      y: direction === "up" ? "30%" : direction === "down" ? "30%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: delay || 0,
        duration: duration || 0.1, // Ultra fast - reduced from 0.2
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.02, // Ultra fast stagger - reduced from 0.05
        delayChildren: delayChildren || 0,
      },
    },
  };
};
