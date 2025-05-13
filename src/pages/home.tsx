import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Home = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='active'
    exit='exit'
    className='flex h-full w-full flex-col items-start justify-start overflow-x-hidden overflow-y-auto'
  >
    <section className='flex min-h-dvh w-full items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h2 className='text-center text-xl text-white'>Oh, Hello There</h2>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <h5 className='text-center text-xs font-light text-white/50'>
            Welcome to my digital playground.
            <br /> Scroll down if curiosity gets the better of you.
          </h5>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>About This Place</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            I built this site as a small window into my coding universe. No
            fluff, no buzzwords, just honest work. Check out the projects
            section to see what I've been tinkering with lately - that's where
            the interesting stuff lives anyway.
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
  </motion.div>
);
