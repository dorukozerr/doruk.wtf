import { VimIcon } from '#/components/svgs'
import { useWindowCTX } from '#/contexts/window'

export const Footer = () => {
  const { isHovered } = useWindowCTX()

  return (
    <footer
      className={`fixed bottom-4 left-1/2 z-20 flex w-max -translate-x-1/2 items-center justify-center gap-2 rounded-md px-8 py-4 backdrop-blur-2xl transition-colors duration-500 ${
        isHovered ? 'bg-black/30' : 'bg-linear-to-r from-white/10 to-black/50'
      }`}
    >
      <span className={`text-lg transition-colors duration-500 ${isHovered ? 'text-black' : 'text-white'}`}>
        Made with {isHovered ? '🔥' : '❤️'} and
      </span>
      <VimIcon width={22} height={22} color={isHovered ? '#000' : '#fff'} />
    </footer>
  )
}
