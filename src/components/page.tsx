import { motion } from "motion/react";

import { Section } from "#/components/section.tsx";
import { content } from "#/static/content";

export const Page = ({ path }: { path: string }) => (
  <motion.div
    variants={{
      enter: { filter: "blur(25px)", backgroundColor: "rgba(0,0,0,0.60)" },
      active: { filter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" },
      exit: { filter: "blur(25px)", backgroundColor: "rgba(0,0,0,0.60)" },
    }}
    transition={{ type: "tween", duration: 1, ease: "anticipate" }}
    initial="enter"
    animate="active"
    exit="exit"
    className="flex h-full w-full flex-col items-start justify-start"
  >
    {content[path as keyof typeof content].map((section, i) => (
      <Section key={`page-section-${i}`} {...section} />
    ))}
  </motion.div>
);
