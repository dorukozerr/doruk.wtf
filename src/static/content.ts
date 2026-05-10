import { type PS } from "#/types";

export const content = {
  "/": [
    {
      title: "Hello, Friend",
      content: "Welcome to my digital playground. Scroll down if curiosity gets the better of you.",
    },
    {
      title: "About This Place",
      content:
        "A small window into things I build. No fluff, no buzzwords, mostly experimental stuff. The [projects section|/projects] is where the interesting bits live.",
    },
  ],
  "/projects": [
    {
      title: "Wall of Shame",
      content:
        "Things I've built when I should have probably been sleeping. Some are useful, some are just experiments. Judge them gently.",
    },
    {
      title: "doruk.wtf",
      content:
        "Starting with the obvious — this site. [Source on GitHub|https://github.com/dorukozerr/doruk.wtf].",
    },
    {
      title: "kisuke.vim",
      content:
        "A [Vim plugin|https://github.com/dorukozerr/kisuke.vim] for chatting with AI models inside the editor. TypeScript server talks to a VimScript client over stdin/stdout with JSON payloads. Handles multi-session history, file context marking, and multiple providers (Anthropic, OpenAI, Google, Grok). Taught me a lot about IPC and standard streams.",
    },
    {
      title: "coc-zshell",
      content:
        "[Coc.nvim extension|https://github.com/dorukozerr/coc-zshell] that brings zsh autocompletions into Vim by intercepting completions from a pseudo zsh shell. The trick was getting zsh's completion system to talk to something that wasn't a real terminal. Sources and prior art credited in the README.",
    },
    {
      title: "fzf-clipboard",
      content:
        "[fzf wrapper|https://github.com/dorukozerr/fzf-clipboard] for searching clipboard history. Background process collects entries, fzf surfaces them. Lives in my dotfiles and earns its keep.",
    },
    {
      title: "Video Diary App",
      content:
        "A [React Native app|https://github.com/dorukozerr/video-diary/] for trimming videos and saving them as diary entries. Custom scrubber wired into the video player for tighter playback control, ffmpeg handling the processing, TanStack Query + Zustand + Zod + React Hook Form for the data layer. Small UI, interesting pipeline underneath.",
    },
    {
      title: "birefnet-sandbox",
      content:
        'A [Python sandbox|https://github.com/dorukozerr/birefnet-sandbox] for background removal. Wraps BiRefNet for the auto path and GroundingDINO + SAM for text-prompted segmentation ("remove everything except the hardware"). Same script works as a CLI, a uv-runnable file, a Python module, and a Gradio server. Fully AI-generated code — I directed the work and tested the outputs but didn\'t write it by hand. Listing it because it ships and it works, and pretending I wrote Python ML glue from scratch would be a lie.',
    },
    {
      title: "And Then There's the Rest",
      content:
        'Somewhere out there are too many CRUD apps to count. Frontend, backend, fullstack, server actions, JWT auth, MongoDB, the whole performance. Built like my rent depended on it (sometimes it did). They served their purpose — usually "learn this framework" or "finally understand how X works" — and now they live quietly in my GitHub like books on a shelf I\'ll never reread. Not linking them. They know what they did.',
    },
  ],
  "/contact": [
    {
      title: "Socials",
      content: "socials",
    },
  ],
} satisfies Record<string, PS[]>;
