import type { PS } from '#/types'

export const content = {
  '/': [
    {
      content: 'Welcome to my digital playground. Scroll down if curiosity gets the better of you.',
      title: 'Hello, Friend'
    },
    {
      content:
        'A small window into things I build. No fluff, no buzzwords, mostly experimental stuff. The [projects section|/projects] is where the interesting bits live.',
      title: 'About This Place'
    }
  ],
  '/contact': [
    {
      content: 'socials',
      title: 'Socials'
    }
  ],
  '/projects': [
    {
      content:
        "Things I've built when I should have probably been sleeping. Some are useful, some are just experiments. Judge them gently.",
      title: 'Wall of Shame'
    },
    {
      content:
        'Starting with the obvious — this site. [Source on GitHub|https://github.com/dorukozerr/doruk.wtf].',
      title: 'doruk.wtf'
    },
    {
      content:
        'A [Vim plugin|https://github.com/dorukozerr/kisuke.vim] for chatting with AI models inside the editor. A small TypeScript server and a VimScript client passing JSON over stdin/stdout. Supports session history, marking files as context, and a few providers (Anthropic, OpenAI, Google, Grok). Nothing fancy, but I learned a bit about IPC building it.',
      title: 'kisuke.vim'
    },
    {
      content:
        "[Coc.nvim extension|https://github.com/dorukozerr/coc-zshell] that shows zsh autocompletions in Vim. It just runs zsh in a pseudo terminal and reads the completions from there. Mostly built on top of other people's work, sources and prior art are credited in the README.",
      title: 'coc-zshell'
    },
    {
      content:
        '[fzf wrapper|https://github.com/dorukozerr/fzf-clipboard] for searching clipboard history. A simple script, a background process saves entries and fzf lists them. Lives in my dotfiles and I use it daily.',
      title: 'fzf-clipboard'
    },
    {
      content:
        'A [React Native app|https://github.com/dorukozerr/video-diary/] for trimming videos and saving them as diary entries. ffmpeg does the actual processing, on top of that there is a custom scrubber and the usual data layer (TanStack Query, Zustand, Zod, React Hook Form). An okeyish app with a decent stack and structure.',
      title: 'Video Diary App'
    },
    {
      content:
        "A [Python sandbox|https://github.com/dorukozerr/birefnet-sandbox] for background removal. It just wraps existing models, BiRefNet for the automatic path and GroundingDINO + SAM for text-prompted segmentation. Can be used as a CLI, a Python module, or a Gradio server. Full disclosure: the code is AI-generated. I directed and tested it, I didn't write it by hand, and the real work belongs to the model authors.",
      title: 'birefnet-sandbox'
    },
    {
      content:
        'Beyond these there is a pile of experimental, half-finished stuff. Apps built with tRPC, Next.js with a decent server actions setup, Tamagui on React Native and web, TanStack Start, Redux Toolkit Query, TanStack Query with Zustand, some three.js experiments, and so on. Most of them were built to learn the stack in question, and honestly in the end it is all the same thing. Most are not public, but some of it is on my GitHub if you go digging.',
      title: "And Then There's the Rest"
    }
  ]
} satisfies Record<string, PS[]>
