import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { Header } from '~/layout/header';
import { Footer } from '~/layout/footer';

export const Layout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className='flex h-full w-full flex-col items-start justify-start bg-black'>
      <Header />
      <main className='relative z-10 h-max w-full'>
        <AnimatePresence initial={false} mode='wait'>
          {cloneElement(currentOutlet ?? <div />, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
