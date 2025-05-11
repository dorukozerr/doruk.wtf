import type { Variants, Transition } from 'motion/react';

export const variants: Variants = {
  enter: { scale: 0, opacity: 0, filter: 'blur(99px)', rotate: 360 },
  center: { scale: 1, opacity: 1, filter: 'blur(0px)', rotate: 0 },
  exit: { scale: 0, opacity: 0, filter: 'blur(99px)', rotate: -360 }
};

export const transition: Transition = {
  type: 'tween',
  duration: 1,
  ease: 'anticipate'
};
