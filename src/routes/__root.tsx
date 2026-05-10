import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Layout } from "#/components/layout";
import { WindowCTXProvider } from "#/contexts/window";

import css from "#/styles/index.css?url";

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
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
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Welcome to my Abyss" },
      { name: "description", content: "Fibonacci is beautiful isn't it?" },
      { name: "author", content: "Doruk Özer <dorukozer@protonmail.com>" },
      {
        name: "keywords",
        content: "doruk, developer, portfolio, personal website, abyss, fibonacci",
      },
      { name: "theme-color", content: "#000000" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://doruk.wtf/" },
      { property: "og:title", content: "Welcome to my Abyss" },
      { property: "og:description", content: "Fibonacci is beautiful isn't it?" },
      { property: "og:image", content: "https://doruk.wtf/og-image.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://doruk.wtf/" },
      { property: "twitter:title", content: "Welcome to my Abyss" },
      { property: "twitter:description", content: "Fibonacci is beautiful isn't it?" },
      { property: "twitter:image", content: "https://doruk.wtf/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: css },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "canonical", href: "https://doruk.wtf/" },
    ],
  }),
  shellComponent: RootDocument,
});
