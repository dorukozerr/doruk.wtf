import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';
import { GitHub, Twitch, Twitter, LinkedIn, Email } from '~/components/svgs';

const iconProps = {
  width: 48,
  height: 48,
  strokeWidth: 0.75,
  className:
    'cursor-pointer text-white/50 transition-all duration-300 hover:text-white'
};

export const Contact = () => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='active'
    exit='exit'
    className='relative z-10 flex h-full w-full flex-col items-start justify-start overflow-y-auto'
  >
    <section className='flex min-h-dvh w-full items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>Socials</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <div className='flex items-center justify-center gap-4'>
            <a href='https://github.com/dorukozerr/' target='_blank'>
              <GitHub {...iconProps} />
            </a>
            <a href='https://www.twitch.tv/d0ruk0z3r' target='_blank'>
              <Twitch {...iconProps} />
            </a>
            <a href='https://x.com/dorukozerrr' target='_blank'>
              <Twitter {...iconProps} />
            </a>
            <a href='https://www.linkedin.com/in/dorukozer/' target='_blank'>
              <LinkedIn {...iconProps} />
            </a>
            <a href='mailto:dorukozer@protonmail.com?subject=Found your email from doruk.wtf'>
              <Email {...iconProps} />
            </a>
          </div>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
  </motion.div>
);
