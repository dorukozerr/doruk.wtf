import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useElementProximity } from '~/hooks/use-element-proximity';

export const Header = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { proximity, isHovered } = useElementProximity(titleRef);

  console.log({ proximity, isHovered });

  return (
    <header className='fixed top-0 left-0 z-20 flex w-full items-center justify-center p-4 text-white'>
      <div className='flex h-full w-full items-center justify-between rounded-md bg-white/10 px-8 py-4 backdrop-blur-2xl'>
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl'>Doruk</h1>
        </div>
        <div className='hidden items-center justify-center gap-6 md:flex'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/portfolio')}>Portfolio</button>
        </div>
      </div>
    </header>
  );
};
