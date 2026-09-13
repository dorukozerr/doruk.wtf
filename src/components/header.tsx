import { useLocation, useNavigate } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffectEvent, useEffect, useRef, useState } from 'react'

import { AudioPlayer } from '#/components/audio-player'
import { useWindowCTX } from '#/contexts/window'
import { links } from '#/static/links'

export const Header = () => {
  const [whoCares, setWhoCares] = useState('no-one')
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonInfo, setButtonInfo] = useState({ left: 9999, width: 46 })
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const {
    triggerRef,
    isHovered,
    dimensions: { width }
  } = useWindowCTX()

  const syncButtonUnderline = useEffectEvent(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getClientRects()[0]

      setButtonInfo({
        left: rect ? rect.right - rect.width - 16 : 9999,
        width: buttonRef.current.clientWidth
      })
    }
  })

  useEffect(() => {
    syncButtonUnderline()
  }, [pathname, width, whoCares])

  useEffect(() => {
    const timeout = setTimeout(() => setWhoCares('me'), 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-20 hidden w-full items-center justify-center p-4 transition-colors duration-500 md:flex ${
        isHovered ? 'text-black' : 'text-white'
      }`}
    >
      <div
        className={`flex h-full w-full items-center justify-between rounded-md px-8 py-4 backdrop-blur-2xl transition-colors duration-500 ${
          isHovered ? 'bg-black/20' : 'bg-white/10'
        }`}
      >
        <button ref={triggerRef} className='flex cursor-not-allowed items-center justify-center'>
          <h1 className='text-4xl font-thin'>doruk</h1>
        </button>
        <div className='flex items-center justify-center gap-6'>
          {links.map(({ to, label }, index) => (
            <button
              key={`desktopNavLink-${index}`}
              ref={pathname === to ? buttonRef : null}
              className={`transion-all cursor-pointer text-lg duration-500 ${
                location.pathname === to
                  ? isHovered
                    ? 'text-black'
                    : 'text-white'
                  : isHovered
                    ? 'text-black/60'
                    : 'text-white/60'
              }`}
              onClick={() => navigate({ to })}
            >
              {label}
            </button>
          ))}
          <motion.div
            key='headerActiveLinkLine'
            className={`absolute bottom-4 h-px transition-colors duration-500 ${
              isHovered ? 'bg-black' : 'bg-white'
            }`}
            animate={{ left: buttonInfo.left, width: buttonInfo.width }}
            transition={{ bounce: 1, damping: 12.5, stiffness: 150, type: 'spring' }}
          />
        </div>
      </div>
      <AudioPlayer />
    </header>
  )
}
