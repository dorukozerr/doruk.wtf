import { motion } from 'motion/react'

import { transition, variants } from '~/lib/motion'

import { Section } from './section'
import { content } from '~/content'

export const Page = ({ path }: { path: string }) => (
  <motion.div
    variants={variants}
    transition={transition}
    initial='enter'
    animate='active'
    exit='exit'
    className='flex h-full w-full flex-col items-start justify-start'
  >
    {content[path as keyof typeof content].map((section, i) => (
      <Section key={`page-section-${i}`} {...section} />
    ))}
  </motion.div>
)
