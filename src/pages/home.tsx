import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Home = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='center'
    exit='exit'
    className='flex h-full w-full flex-col items-start justify-start gap-24 overflow-auto'
  >
    <h1 className='text-5xl font-extrabold text-white'>Home Page</h1>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
    <div className='min-h-[900px] w-60 bg-black'></div>
  </motion.div>
);
