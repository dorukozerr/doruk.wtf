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
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h2 className='text-center text-5xl text-white'>Wall of Shame</h2>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <h5 className='text-center text-xl font-light text-white/50'>
          I'm quite surprised you want to inspect my projects Don't let me stop
          you, here you go.
        </h5>
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>doruk.wtf</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center font-light text-white/50'>
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
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>kisuke.vim</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center font-light text-white/50'>
          I'm really proud of this one, I somehow managed to develop a AI Vim
          plugin. You can select any provider or model you want (I mean
          anthropic, openai, google) then you can chat with it in a Vim buffer.
          Features added are marking code blocks or files for your next prompt,
          persisten multi session history and like I said multi model support.
          AI and session history stuff is handled by TypeScript server process,
          through stdin and stdout communication stringified json payloads
          getting passed to Vim buffer and TypeScript server. Each side has some
          handler methods for receiving and using the incoming paylods. This
          stuff is called standard streams. I learned that along the way. For
          the chat buffer and simple plugin menu Vim Script is used. It's not
          much but I like using it anyway here is the{' '}
          <a
            href='https://github.com/dorukozerr/kisuke.vim'
            target='_blank'
            className='text-white underline'
          >
            link
          </a>
          .
        </p>
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>Video Diary App</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center font-light text-white/50'>
          A case study I did for a place I applied. Basic video saving and
          editing application made with react native. Created a custom scrubber
          and connected it to video player play, pause, seek events so it acted
          like custom video player. Used ffmpeg for the video processing, the
          other stuff is being used was tanstack query, zustand, zod, react hook
          form, expo-sqlite, and native wind. UI and functionalities are kind of
          simple but it was fun to hookup this pipeline. Here is the{' '}
          <a
            href='https://github.com/dorukozerr/video-diary/'
            target='_blank'
            className='text-white underline'
          >
            link
          </a>
          .
        </p>
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>uWuallet</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center font-light text-white/50'>
          An expense tracker app built just for practicing nextjs app router and
          server actions. UI is super simple. There authentication and app pages
          only. Every user can create transactions as both expense or income and
          they get saved to database. Some analytics stuff gets calculated with
          total user transactions. Connected mongodb to nextjs then initialized
          basic cookie and jwt based authentication setup using hashed passwords
          saved in db and implemented basic CRUD operation features. Here is the
          repo{' '}
          <a
            href='https://github.com/dorukozerr/uwuallet'
            target='_blank'
            className='text-white underline'
          >
            link
          </a>
          .
        </p>
      </div>
    </section>
    <section className='flex min-h-dvh w-full flex-col items-center justify-center'>
      <div className='flex h-max w-[min(90vw,500px)] flex-col items-center justify-center gap-4 rounded-md bg-black/30 p-8'>
        <h3 className='text-3xl text-white'>Real Estate App</h3>
        <div className='h-0.5 w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0' />
        <p className='text-center font-light text-white/50'>
          Another CRUD app with nextjs. Practiced pre-rendering on build time
          for SEO with this. Implemented admin panel that has advanced form
          handling with zod and react hook form. CRUD operations on entries can
          be done within the admin panel. Also every single entry in the
          database gets pre-rendered during the build so SEO is optimized. Like
          I said another CRUD app with nextjs, nothing to talk much about it.
          Here is the{' '}
          <a
            href='https://github.com/dorukozerr/real-estate-app/'
            target='_blank'
            className='text-white underline'
          >
            link
          </a>
          .
        </p>
      </div>
    </section>
  </motion.div>
);
