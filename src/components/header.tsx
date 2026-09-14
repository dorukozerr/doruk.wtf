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
    endHovered,
    hasInteracted,
    volume,
    setVolume,
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
      className='fixed top-0 left-0 z-20 hidden w-full items-center justify-center p-4 transition-colors duration-500 md:flex'
      style={{ color: isHovered ? '#000' : '#fff' }}
    >
      <div
        className='flex h-full w-full items-center justify-between rounded-md px-8 py-4 backdrop-blur-2xl transition-colors duration-500'
        style={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)' }}
      >
        <button
          ref={triggerRef}
          className='flex cursor-pointer items-center justify-center'
          onClick={endHovered}
        >
          <h1 className='text-4xl font-thin'>
            {isHovered ? (hasInteracted ? 'doruk WTF stop it' : 'I need a mouse click') : 'doruk'}
          </h1>
        </button>
        {isHovered ? (
          <div className='flex items-center gap-4'>
            <span className='text-lg'>
              {hasInteracted ? 'now playing: bad apple' : 'click anywhere to unleash the audio'}
            </span>
            <span className='h-4 w-px bg-black/20' />
            <div className='flex items-center gap-2'>
              <span className='text-xs text-black/60'>vol</span>
              <input
                type='range'
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className='h-1 w-28 cursor-pointer appearance-none rounded-full bg-black/20 outline-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black'
              />
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-6'>
            {links.map(({ to, label }, index) => (
              <button
                key={`desktopNavLink-${index}`}
                ref={pathname === to ? buttonRef : null}
                className='transion-all cursor-pointer text-lg duration-500'
                style={{ color: location.pathname === to ? '#fff' : 'rgba(255,255,255,0.6)' }}
                onClick={() => navigate({ to })}
              >
                {label}
              </button>
            ))}
            <motion.div
              key='headerActiveLinkLine'
              className='absolute bottom-4 h-px bg-white'
              animate={{ left: buttonInfo.left, width: buttonInfo.width }}
              transition={{ bounce: 1, damping: 12.5, stiffness: 150, type: 'spring' }}
            />
          </div>
        )}
      </div>
      <AudioPlayer />
    </header>
  )
}
