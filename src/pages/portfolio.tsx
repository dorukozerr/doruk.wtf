import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Portfolio = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='active'
    exit='exit'
    className='relative z-10 flex h-full w-full flex-col items-start justify-start overflow-y-auto'
  >
    <h1 className='text-5xl font-extrabold text-white'>Portfolio Page</h1>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
  </motion.div>
);
