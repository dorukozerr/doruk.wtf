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
      <div className='flex h-max w-[min(90vw,600px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h2 className='text-center text-5xl text-white'>Oh, Hello There</h2>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <h5 className='text-center text-xl font-light text-white/50'>
          Welcome to my weird corner of the internet. Scroll down if you have
          nothing better to do.
        </h5>
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,600px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>The Promised Content</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center text-lg font-light text-white/50'>
          Sorry to say this, but I suck at writing, even if I try 24 hours
          straight I can't come up with something meaningful to write here.
          Also, I don't want to use some AI-generated content. Maybe look into
          projects section and inspect my source codes then contact me, that
          would be nice.
        </p>
      </div>
    </section>
  </motion.div>
);
