import type { Variants, Transition } from 'motion/react';

export const variants: Variants = {
  enter: {
    scale: 0,
    opacity: 0,
    rotate: 360,
    filter: 'blur(420px)'
  },
  active: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    filter: 'blur(0px)'
  },
  exit: {
    scale: 0,
    opacity: 0,
    rotate: -360,
    filter: 'blur(420px)'
  }
};

export const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 41px 38px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

export const navVariants: Variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

export const navItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } }
  }
};

export const transition: Transition = {
  type: 'tween',
  duration: 1,
  ease: 'anticipate'
};
