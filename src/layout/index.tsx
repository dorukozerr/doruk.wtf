import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { Header } from '~/layout/header';
import { Footer } from '~/layout/footer';

export const Layout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className='w-full h-full bg-black flex-col flex justify-start items-start'>
      <Header />
      <main className='relative h-max z-10 w-full'>
        <AnimatePresence initial={false} mode='wait'>
          {cloneElement(currentOutlet ?? <div />, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
