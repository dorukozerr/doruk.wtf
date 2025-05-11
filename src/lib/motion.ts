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

export const transition: Transition = {
  type: 'tween',
  duration: 1,
  ease: 'anticipate'
};
