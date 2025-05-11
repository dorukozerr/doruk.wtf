import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useElementProximity } from '~/hooks/use-element-proximity';

export const Header = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { proximity, isHovered } = useElementProximity(titleRef);

  console.log({ proximity, isHovered });

  return (
    <header className='fixed top-0 left-0 z-20 flex min-h-32 w-full items-center justify-center gap-4 text-white'>
      <div ref={titleRef}>
        <h1>Doruk</h1>
      </div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/portfolio')}>Portfolio</button>
    </header>
  );
};
