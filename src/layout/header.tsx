import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='fixed top-0 left-0 z-20 flex min-h-32 w-full items-center justify-center gap-4 text-white'>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/portfolio')}>Portfolio</button>
    </header>
  );
};
