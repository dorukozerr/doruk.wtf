import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { useSceneStateContext } from '~/context/scene-state';
import { Header } from '~/layout/header';
import { MobileSidebar } from '~/layout/mobile-sidebar';
import { Footer } from '~/layout/footer';
import { P5Scene } from '~/components/p5';

export const Layout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { isHovered } = useSceneStateContext();

  return (
    <div className='flex h-full w-full flex-col items-start justify-start overflow-hidden'>
      <div className='absolute h-full w-full'>
        <P5Scene />
      </div>
      <Header />
      <MobileSidebar />
      {isHovered ? null : (
        <AnimatePresence initial={false} mode='wait'>
          {cloneElement(currentOutlet ?? <div />, { key: location.pathname })}
        </AnimatePresence>
      )}
      <Footer />
    </div>
  );
};
