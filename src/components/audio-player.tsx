import { useEffect, useRef } from 'react'

import { useWindowCTX } from '#/contexts/window'

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const isHoveredRef = useRef(false)
  const { isHovered, hasInteracted, volume } = useWindowCTX()

  useEffect(() => {
    isHoveredRef.current = isHovered
  }, [isHovered])

  useEffect(() => {
    const audio = audioRef.current

    if (audio) audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    const prime = () => {
      void audio
        .play()
        .then(() => {
          if (!isHoveredRef.current) {
            audio.pause()
          }
        })
        .catch(() => {})
    }

    document.addEventListener('pointerdown', prime, { once: true })

    return () => document.removeEventListener('pointerdown', prime)
  }, [])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    if (isHovered) {
      const start = () => {
        audio.muted = true

        void audio
          .play()
          .then(() => {
            audio.muted = false
          })
          .catch(() => {
            audio.muted = false
          })
      }

      if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        start()

        return
      }

      const onCanPlay = () => start()

      audio.addEventListener('canplay', onCanPlay, { once: true })

      return () => audio.removeEventListener('canplay', onCanPlay)
    }

    audio.pause()
  }, [isHovered, hasInteracted])

  return <audio ref={audioRef} src='/api/bad-apple' preload='auto' playsInline loop />
}
