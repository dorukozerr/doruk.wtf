import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const TOKEN = /\[([^\]|]+)\|([^\]]+)\]/g;

export const renderRichText = (input: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = TOKEN.exec(input)) !== null) {
    const [full, label, target] = match;

    if (match.index > lastIndex) {
      nodes.push(input.slice(lastIndex, match.index));
    }

    const isExternal = /^https?:\/\//.test(target);

    nodes.push(
      isExternal ? (
        <a
          key={`rt-${key++}`}
          href={target}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-4 transition-colors hover:text-white/70"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`rt-${key++}`}
          to={target}
          className="text-white underline underline-offset-4 transition-colors hover:text-white/70"
        >
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + full.length;
  }

  if (lastIndex < input.length) {
    nodes.push(input.slice(lastIndex));
  }

  return nodes;
};
