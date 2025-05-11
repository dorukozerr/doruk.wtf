import { useNavigate } from 'react-router-dom';

import { useSceneStateContext } from '~/context/scene-state';

export const Header = () => {
  const navigate = useNavigate();
  const { triggerRef } = useSceneStateContext();

  return (
    <header className='fixed top-0 left-0 z-20 flex w-full items-center justify-center p-4 text-white'>
      <div className='flex h-full w-full items-center justify-between rounded-md bg-white/10 px-8 py-4 backdrop-blur-2xl'>
        <button ref={triggerRef} className='flex items-center justify-center'>
          <h1 className='text-4xl'>Doruk</h1>
        </button>
        <div className='hidden items-center justify-center gap-6 md:flex'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
          <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
      </div>
    </header>
  );
};
