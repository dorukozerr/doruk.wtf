import { useSceneStateContext } from '~/context/scene-state';
import { VimIcon } from '~/components/svgs';

export const Footer = () => {
  const { isHovered } = useSceneStateContext();

  return (
    <header className='fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-white/10 to-black/50 px-8 py-4 backdrop-blur-2xl'>
      <span className='text-white'>
        Made with {isHovered ? '🔥' : '❤️'} and
      </span>
      <VimIcon width={22} height={22} color='#fff' />
    </header>
  );
};
