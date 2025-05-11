import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Home = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='center'
    exit='exit'
    className='flex w-full flex-col items-center justify-center gap-24 bg-green-500'
  >
    <h1 className='text-5xl font-extrabold text-white'>Home Page</h1>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
    <div className='h-[900px] w-60 bg-black'></div>
  </motion.div>
);
