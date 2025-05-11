import { motion } from 'motion/react';

import { motionVariants } from '~/lib/motion';
import { transitionConfig } from '~/lib/motion';

export const Home = () => (
  <motion.div
    variants={motionVariants}
    transition={transitionConfig}
    initial='enter'
    animate='center'
    exit='exit'
    className='w-full bg-pink-500 h-full flex justify-center items-center'
  >
    <h1 className='text-white text-5xl font-extrabold'>Home Page</h1>
  </motion.div>
);
