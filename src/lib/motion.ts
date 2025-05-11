export const motionVariants = {
  enter: { y: -20, opacity: 0, filter: 'blur(2px)' },
  center: { y: 0, opacity: 1, filter: 'blur(0px)' },
  exit: { y: 20, opacity: 0, filter: 'blur(2px)' }
};

export const transitionConfig = {
  type: 'tween',
  duration: 0.5,
  ease: 'easeOut'
};
