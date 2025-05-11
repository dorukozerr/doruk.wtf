import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { Header } from '~/layout/header';
import { Footer } from '~/layout/footer';

export const Layout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className='flex h-full w-full flex-col items-start justify-start overflow-hidden bg-black'>
      <Header />
      <AnimatePresence initial={false} mode='wait'>
        {cloneElement(currentOutlet ?? <div />, { key: location.pathname })}
      </AnimatePresence>
      <Footer />
    </div>
  );
};
