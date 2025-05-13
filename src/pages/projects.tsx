import { motion } from 'motion/react';

import { variants, transition } from '~/lib/motion';

export const Projects = () => (
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
          <h2 className='text-center text-xl text-white'>Wall of Shame</h2>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <h5 className='text-center text-xs font-light text-white/50'>
            Here's a collection of things I've built when I should have probably
            been sleeping. Judge them gently.
          </h5>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>doruk.wtf</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            The first project to list here of course is this site, here is the
            github{' '}
            <a
              href='https://github.com/dorukozerr/doruk.wtf'
              target='_blank'
              className='text-white underline'
            >
              link
            </a>
            .
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>kisuke.vim</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            My{' '}
            <a
              href='https://github.com/dorukozerr/kisuke.vim'
              target='_blank'
              className='text-white underline'
            >
              Vim plugin
            </a>{' '}
            that lets you chat with AI models right in your editor. Built with
            TypeScript for the server process, it handles multi-session history
            and supports various AI providers. Communication happens through
            stdin/stdout with JSON payloads shuttling between Vim and the TS
            server. Learned about standard streams while building this one.
            Simple but useful.
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>Video Diary App</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            A{' '}
            <a
              href='https://github.com/dorukozerr/video-diary/'
              target='_blank'
              className='text-white underline'
            >
              React Native app
            </a>{' '}
            for recording and editing video diaries. Built a custom scrubber
            connected to video controls for a tailored playback experience. Used
            ffmpeg for video processing, with tanstack query, zustand, zod, and
            react hook form handling the data flow. Simple UI, complex pipeline.
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>uwuallet</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            An{' '}
            <a
              href='https://github.com/dorukozerr/uwuallet'
              target='_blank'
              className='text-white underline'
            >
              expense tracker
            </a>{' '}
            I built to play with Next.js app router and server actions. Features
            JWT auth with hashed passwords and MongoDB integration. Users can
            track expenses/income and view basic analytics on their spending.
            Nothing fancy, just practical CRUD functionality with modern
            patterns.
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-[min(90vw,610px)] w-[min(90vw,610px)] flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50'>
        <div className='w-full flex-1' />
        <div className='w-full space-y-4 bg-black/50 p-4 sm:p-8'>
          <h3 className='text-center text-xl text-white'>Real Estate App</h3>
          <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
          <p className='text-center text-xs font-light text-white/50'>
            Next.js{' '}
            <a
              href='https://github.com/dorukozerr/real-estate-app/'
              target='_blank'
              className='text-white underline'
            >
              app
            </a>{' '}
            focusing on SEO through build-time pre-rendering. Includes an admin
            panel with form validation via zod and react hook form. Each
            database entry gets pre-rendered during build for optimal search
            engine visibility. Clean implementation of CRUD operations with
            performance in mind.
          </p>
        </div>
        <div className='w-full flex-1' />
      </div>
    </section>
  </motion.div>
);
