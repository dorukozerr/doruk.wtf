import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Portfolio = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='center'
    exit='exit'
    className='w-full bg-orange-300 gap-24 flex-col flex justify-center items-center'
  >
    <h1 className='text-white text-5xl font-extrabold'>Portfolio Page</h1>
    <div className='w-60 h-[900px] bg-black'></div>
    <div className='w-60 h-[900px] bg-black'></div>
    <div className='w-60 h-[900px] bg-black'></div>
    <div className='w-60 h-[900px] bg-black'></div>
    <div className='w-60 h-[900px] bg-black'></div>
    <div className='w-60 h-[900px] bg-black'></div>
  </motion.div>
);
