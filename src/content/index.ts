import { type SECTION } from '~/types'

export const content = {
  homePage: [
    {
      title: 'Hello, Friend',
      description:
        'Welcome to my digital playground. Scroll down if curiosity gets the better of you.'
    },
    {
      title: 'About This Place',
      description:
        "I built this site as a small window into my coding universe. No fluff, no buzzwords, just experimental stuff. Check out the [projects section|/projects] to see what I've been tinkering with lately - that's where the interesting stuff lives anyway."
    }
  ],
  projects: [
    {
      title: 'Wall of Shame',
      description:
        "Here's a collection of things I've built when I should have probably been sleeping. Judge them gently."
    },
    {
      title: 'doruk.wtf',
      description:
        'The first project to list here of course is this site, here is the github [link|https://github.com/dorukozerr/doruk.wtf].'
    },
    {
      title: 'kisuke.vim',
      description:
        'My [Vim plugin|https://github.com/dorukozerr/kisuke.vim] that lets you chat with AI models right in your editor. Built with TypeScript for the server process, it handles multi-session history and supports various AI providers. Communication happens through stdin/stdout with JSON payloads shuttling between Vim and the TS server. Learned about standard streams while building this one. Simple but useful.'
    },
    {
      title: 'coc-zshell',
      description:
        'Coc extension that enables autocompletion support for zsh in Vim/Neovim. Glued bunch of stuff I stole from public, did almost nothing special. I mentioned sources in the [project README|https://github.com/dorukozerr/coc-zshell?tab=readme-ov-file#credits] tho.'
    },
    {
      title: 'fzf-clipboard',
      description:
        'fzf wrapper + background process script for clipboard history search like any other fzf extension - [link|https://github.com/dorukozerr/fzf-clipboard]'
    },
    {
      title: 'Video Diary App',
      description:
        'A [React Native app|https://github.com/dorukozerr/video-diary/] for editing videos and saving them to your diary. Built a custom scrubber connected to video controls for a tailored playback experience. Used ffmpeg for video processing, with tanstack query, zustand, zod, and react hook form handling the data flow. Simple UI, interesting pipeline.'
    },
    {
      title: 'uWuallet',
      description:
        'An [expense tracker|https://github.com/dorukozerr/uwuallet] I built to play with Next.js app router and server actions. Features JWT auth with hashed passwords and MongoDB integration. Users can track expenses/income and view basic analytics on their spending. Nothing fancy, just practical CRUD functionality with modern patterns.'
    },
    {
      title: 'Real Estate App',
      description:
        '[Next.js app|https://github.com/dorukozerr/real-estate-app/] focusing on SEO through build-time pre-rendering. Includes an admin panel with form validation via zod and react hook form. Each database entry gets pre-rendered during build for optimal search engine visibility. Clean implementation of CRUD operations with performance in mind.'
    }
  ]
} satisfies Record<string, SECTION[]>
