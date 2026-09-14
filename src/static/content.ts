import type { PS } from '#/types'

export const content = {
  '/': [
    {
      content:
        "Welcome to my website but I really don't know what to write in terms of content. I built this website with love and joy but I don't know how to write. But it has some surprises >.<",
      title: 'Hello, Friend'
    },
    {
      content:
        'I mean there is projects section which I slightly feel better in terms of what to write, but maybe if you scrolled down here you can hover my name on header. I had fun while building it.',
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
        '3 50+ hour zero to hero JS bootcamps, countless youtube project code alongs, recreating some of the projects and changing content + styles. The only thing I want to say is that the person I feel closest to is Might Duy from Naruto, father of Might Guy xd',
      title: 'Wall of Shame'
    },
    {
      content:
        'Starting with the obvious — this site. [Source on GitHub|https://github.com/dorukozerr/doruk.wtf].',
      title: 'doruk.wtf'
    },
    {
      content:
        "A [Vim plugin|https://github.com/dorukozerr/kisuke.vim] I did really get ultra excited about this one, tried to build this with claude while knowing completely nothing about vim script. It was a failure but there was data communication. Read the learn vim script the hard way book and gained almost nothing, rawdogged my way with inefficiency and mediocrity. Decided to delete the whole project claude created but I learned how to create IPC communication between Vim and a TypeScript server, I mean idk, it was fun, also wanted to mention that this project evolved into something that supports a premature mcp server and client and updated the system prompt to my goth gf, it's not in main branch tho.",
      title: 'kisuke.vim'
    },
    {
      content:
        "[Coc.nvim extension|https://github.com/dorukozerr/coc-zshell] for zsh completions while being really SUS. I mean only thing about this project is that I did not try to vibe code a questionable product or something. I chose to spend my tokens on something that's more questionable. The zsh script I copied with 5% understanding is pure art. Right now I have 15% understanding.",
      title: 'coc-zshell'
    },
    {
      content:
        '[fzf wrapper|https://github.com/dorukozerr/fzf-clipboard] clipboard explorer in cli. I really needed this one. Even though it was working perfectly, I made AI rewrite it multiple times, I wrote down my observations and assumptions on shell script and brainstormed with AI because I wanted to learn more about shell scripts.',
      title: 'fzf-clipboard'
    },
    {
      content:
        "A [React Native app|https://github.com/dorukozerr/video-diary/] with ffmpeg, there was no AI in this, I fully wrote it manually with my inexplicable linter preferences. Built a video player with fully custom controllers + playback management. This was a case study, they really liked the project but I didn't get the job.",
      title: 'Video Diary App'
    },
    {
      content:
        "A [Python sandbox|https://github.com/dorukozerr/birefnet-sandbox] that was fully personal playground experiment project. I downloaded a model from hugging face for the first time. I hadn't touched python before so I used AI to convert my TS snippets and desired structure into python modules. It ended up in a nice composable way.",
      title: 'birefnet-sandbox'
    },
    {
      content:
        'My friends tell me not to put content like this and that it would affect my professional life in a bad way. I even learned from a friend that some manager at some company reviewed my profile and said it\'s better for him to work on small scale startups :ddddd I think I talked with AI around 15~ hours total on a regular basis about the domain of this website, for example, please email me <dorukozer@protonmail.com> if you think I\'m making a mistake. My favorite book series was A Series of Unfortunate Events, it had identical openings and intros everywhere like "If you are interested in stories with happy endings, you would be better off reading some other book. In this book, not only is there no happy ending, there is no happy beginning, and very few happy things in the middle." I kinda liked that vibe a lot.',
      title: 'Future source of shame material'
    }
  ]
} satisfies Record<string, PS[]>
