import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Portfolio = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='center'
    exit='exit'
    className='flex w-full flex-col items-center justify-center gap-24 bg-orange-300'
  >
    <h1 className='text-5xl font-extrabold text-white'>Portfolio Page</h1>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
  </motion.div>
);
