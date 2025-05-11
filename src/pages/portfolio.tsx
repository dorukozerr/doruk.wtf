import { motion } from 'motion/react';

import { motionVariants } from '~/lib/motion';
import { transitionConfig } from '~/lib/motion';

export const Portfolio = () => (
  <motion.div
    variants={motionVariants}
    transition={transitionConfig}
    initial='enter'
    animate='center'
    exit='exit'
    className='w-full bg-orange-300 h-full flex justify-center items-center'
  >
    <h1 className='text-white text-5xl font-extrabold'>Portfolio Page</h1>
  </motion.div>
);
