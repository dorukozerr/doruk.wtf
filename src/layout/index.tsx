import { cloneElement, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, useSpring } from 'motion/react'
import { motion, useScroll } from 'motion/react'

import { useSceneStateContext } from '~/context/scene-state'
import { useWindowDimensionsContext } from '~/context/window-dimensions'
import { Footer } from '~/layout/footer'
import { Header } from '~/layout/header'
import { MobileSidebar } from '~/layout/mobile-sidebar'
import { P5Scene } from '~/components/p5'

export const Layout = () => {
  const container = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { height, width } = useWindowDimensionsContext()
  const { isHovered } = useSceneStateContext()
  const [ch, setCH] = useState(height)

  const { scrollY } = useScroll({ container })
  const top = useSpring(scrollY, {
    stiffness: 500,
    damping: 80,
    mass: 5
  })

  useLayoutEffect(() => {
    if (container.current) {
      const containerHeight = container.current.getBoundingClientRect().height
      if (height !== ch) setCH(containerHeight)
    }
  }, [ch, height, width, location.pathname])

  useLayoutEffect(() => {
    container.current?.scrollTo({ top: 0, behavior: 'smooth' })
    top.jump(0)
  }, [location.pathname, top])

  return (
    <div
      ref={container}
      className='relative h-full w-full overflow-x-hidden overflow-y-auto'
    >
      <motion.div
        className='absolute left-0 flex h-full w-full items-center justify-center overflow-visible'
        key={width + width}
        style={{ top }}
      >
        <P5Scene />
      </motion.div>
      {isHovered ? null : (
        <AnimatePresence initial={false} mode='wait'>
          {cloneElement(currentOutlet ?? <div />, { key: location.pathname })}
        </AnimatePresence>
      )}
      <Header />
      <MobileSidebar />
      <Footer />
    </div>
  )
}
