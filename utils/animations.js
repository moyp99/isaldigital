export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: { opacity: 0, transition: { duration: 0.75 } },
  },
};

export const popUp = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: { opacity: 0, transition: { duration: 0.75 } },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1, staggerChildren: 0.25 },
  },
};

export const slideToRight = {
  hidden: { x: "-100vw", scale: 0, rotate: 360 },
  show: {
    x: "0",
    scale: 1,
    rotate: 0,
    transition: { ease: "easeInOut", duration: 1, staggerChildren: 0.25 },
  },
};

export const appearFromRight = {
  hidden: { x: "-100vw", opacity: 0 },
  show: {
    x: "0",
    opacity: 1,

    transition: { ease: "easeInOut", duration: 0.75, staggerChildren: 0.25 },
  },
};

export const scaleUpContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1.5, staggerChildren: 0.5 },
  },
};
export const scaleUp = {
  hidden: { scale: 0.25 },
  show: {
    scale: 1,
    transition: { ease: "easeOut", duration: 1.5,  },
  },
};

export const servicesContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1, staggerChildren: 0.5 },
  },
};

export const methodContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1, staggerChildren: 0.8 },
  },
};

export const circleToRectangle = {
  hidden: { borderRadius: "100%", scale: 0.5, rotate: 360 },
  show: {
    borderRadius: "0%",
    scale: 1,
    rotate: 0,
    transition: { ease: "anticipate", duration: 1, staggerChildren: 0.25 },
  },
};

export const ACFormAnim = {
  hidden: {
    // borderRadius: "100%",
    scale: 0,
    
  },
  show: {
    // borderRadius: "0%",
    scale: [0,1],
    rotate: [360, 0,],
    transition: { ease: "backIn", duration: 1.5, staggerChildren: 0.25 },
  },
};

export const scaleUpSpin = {
  hidden: { scale: 0, rotate: 360 },
  show: {
    scale: [0, 1.5, 1],
    rotate: 0,
    transition: { ease: "anticipate", duration: 1, staggerChildren: 0.25 },
  },
};

export const methodSteps = {
  hidden: { x: "-100vw", scale: 0.5, rotate: 360 },
  show: {
    x: "0",
    scale: [0.5, 1.5, 0.85, 1],
    rotate: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,

    transition: { duration: 0.5 },
    //delay:0.5
  },
};

export const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};
