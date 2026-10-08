import { Outlet, useLocation, useRouterState } from '@tanstack/react-router'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'
import { useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from 'react'

import { Footer } from '#/components/footer'
import { Header } from '#/components/header'
import { MobileSidebar } from '#/components/mobile-sidebar'
import { P5BG } from '#/components/p5bg'
import { useWindowCTX } from '#/contexts/window'

export const Layout = () => {
  const container = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const resolvedPathname = useRouterState({ select: (s) => s.resolvedLocation?.pathname })

  const {
    dimensions: { height, width },
    isHovered
  } = useWindowCTX()

  const [ch, setCH] = useState(height)
  const { scrollY } = useScroll({ container })
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
    mass: 1,
    stiffness: 200,
    velocity: 0
  })

  const top = useTransform(smoothVelocity, [-1500, 1500], [height, -height], { clamp: false })

  const syncScrollContainer = useEffectEvent(() => {
    if (container.current) {
      const containerHeight = container.current.getBoundingClientRect().height
      if (containerHeight !== ch) setCH(containerHeight)
    }
  })

  useLayoutEffect(() => {
    syncScrollContainer()
    // Intentionally triggering rerender just to be safe, P5 bg layer and
    // Circle page sections aligns perfectly if there is no mismatch, on window
    // Resizes it was kinda breaking before. Also contact page is not
    // Scrollable, triggering rerender on path change fixes that too
  }, [ch, height, width, pathname])

  useEffect(() => {
    const c = container.current
    if (!c) return

    const frame = requestAnimationFrame(() => c.scrollTo({ behavior: 'smooth', top: 0 }))

    return () => cancelAnimationFrame(frame)
  }, [resolvedPathname])

  return (
    <div
      ref={container}
      className='relative h-full w-full scrollbar-none overflow-x-hidden overflow-y-auto'
      style={{ overflowY: isHovered ? 'hidden' : 'auto' }}
    >
      <div className='fixed h-full w-full overflow-hidden'>
        <motion.div className='absolute inset-0' style={{ top }}>
          <P5BG />
        </motion.div>
      </div>
      <div className='w-full' style={{ opacity: isHovered ? 0 : 100 }}>
        <Outlet />
      </div>
      <Header />
      <MobileSidebar />
      <Footer />
    </div>
  )
}
