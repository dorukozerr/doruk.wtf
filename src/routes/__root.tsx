import { ClientOnly, HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { Layout } from '#/components/layout'
import { WindowCTXProvider } from '#/contexts/window'

import css from '#/styles/index.css?url'

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <head>
      <HeadContent />
    </head>
    <body>
      <ClientOnly fallback={children}>
        <WindowCTXProvider>
          <Layout />
        </WindowCTXProvider>
      </ClientOnly>
      <Scripts />
    </body>
  </html>
)

export const Route = createRootRoute({
  head: () => ({
    links: [
      { href: css, rel: 'stylesheet' },
      { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
      { href: '/manifest.json', rel: 'manifest' },
      { href: 'https://doruk.wtf/', rel: 'canonical' }
    ],
    meta: [
      { charSet: 'utf8' },
      { content: 'width=device-width, initial-scale=1.0', name: 'viewport' },
      { title: 'Welcome to my Abyss' },
      { content: "Fibonacci is beautiful isn't it?", name: 'description' },
      { content: 'Doruk Özer <dorukozer@protonmail.com>', name: 'author' },
      {
        content: 'doruk, doruk özer, developer, portfolio, personal website, abyss, fibonacci',
        name: 'keywords'
      },
      { content: '#000000', name: 'theme-color' },
      { content: 'website', property: 'og:type' },
      { content: 'https://doruk.wtf/', property: 'og:url' },
      { content: 'Welcome to my Abyss', property: 'og:title' },
      { content: "Fibonacci is beautiful isn't it?", property: 'og:description' },
      { content: 'https://doruk.wtf/og-image.png', property: 'og:image' },
      { content: 'summary_large_image', property: 'twitter:card' },
      { content: 'https://doruk.wtf/', property: 'twitter:url' },
      { content: 'Welcome to my Abyss', property: 'twitter:title' },
      { content: "Fibonacci is beautiful isn't it?", property: 'twitter:description' },
      { content: 'https://doruk.wtf/og-image.png', property: 'twitter:image' }
    ]
  }),
  shellComponent: RootDocument
})
