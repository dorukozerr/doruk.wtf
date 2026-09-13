import { Outlet, useLocation } from '@tanstack/react-router'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'
import { useEffectEvent, useLayoutEffect, useRef, useState } from 'react'

import { Footer } from '#/components/footer'
import { Header } from '#/components/header'
import { MobileSidebar } from '#/components/mobile-sidebar'
import { P5BG } from '#/components/p5bg'
import { useWindowCTX } from '#/contexts/window'

export const Layout = () => {
  const container = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  const {
    dimensions: { height, width },
    isHovered
  } = useWindowCTX()

  const [ch, setCH] = useState(height)
  const { scrollY } = useScroll({ container })
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    mass: 10,
    stiffness: 500,
    velocity: 200
  })

  const top = useTransform(smoothVelocity, [-1500, 1500], [height, -height], { clamp: false })

  const syncScrollContainer = useEffectEvent(() => {
    if (container.current) {
      const containerHeight = container.current.getBoundingClientRect().height
      if (height !== ch) setCH(containerHeight)
    }
  })

  useLayoutEffect(() => {
    syncScrollContainer()
    // Intentionally triggering rerender just to be safe, P5 bg layer and
    // Circle page sections aligns perfectly if there is no mismatch, on window
    // Resizes it was kinda breaking before. Also contact page is not
    // Scrollable, triggering rerender on path change fixes that too
  }, [ch, height, width, pathname])

  useLayoutEffect(() => {
    setTimeout(() => container.current?.scrollTo({ behavior: 'smooth', top: 0 }), 100)
  }, [pathname])

  return (
    <div
      ref={container}
      className='relative h-full w-full scrollbar-thumb-black scrollbar-track-red-500 scrollbar-gutter-stable overflow-x-hidden overflow-y-auto'
    >
      {/* Scrollbar must be hidden, because it breaks the aesthetics, it can be
          customized on chrome but firefox/safari and on Mac/Windows/Linux idk
          its not looking like what I want so its better to hide it */}
      <div className='fixed left-1/2 h-full w-[150%] -translate-x-1/2 bg-black' />
      <div className='fixed h-full w-full overflow-hidden'>
        <motion.div className='absolute inset-0 bg-red-500' style={{ top }}>
          <P5BG />
        </motion.div>
      </div>
      {isHovered ? null : <Outlet />}
      <Header />
      <MobileSidebar />
      <Footer />
    </div>
  )
}
