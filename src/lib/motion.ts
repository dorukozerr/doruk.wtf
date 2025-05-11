import type { Variants, Transition } from 'motion/react';

export const variants: Variants = {
  enter: {
    scale: 0,
    opacity: 0,
    filter: 'blur(99px)',
    rotate: 360,
    overflow: 'visible'
  },
  active: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    rotate: 0,
    overflow: 'auto'
  },
  exit: {
    scale: 0,
    opacity: 0,
    filter: 'blur(99px)',
    rotate: -360,
    overflow: 'visible'
  }
};

export const transition: Transition = {
  type: 'tween',
  duration: 1,
  ease: 'anticipate'
};
