import type { ReactNode } from 'react';

import { Header } from '~/layout/header';
import { Footer } from '~/layout/footer';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className='w-full h-full bg-black flex-col flex justify-start items-start'>
    <Header />
    <main className='flex-1 w-full bg-white'>{children}</main>
    <Footer />
  </div>
);
