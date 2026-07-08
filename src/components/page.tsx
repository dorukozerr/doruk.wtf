import { Section } from "#/components/section.tsx";
import { content } from "#/static/content";
export const Page = ({ path }: { path: string }) => (
  <div className="relative flex h-full w-full flex-col items-start justify-start">
    {content[path as keyof typeof content].map((section, i) => (
      <Section key={`page-${i}`} {...section} />
    ))}
  </div>
);
