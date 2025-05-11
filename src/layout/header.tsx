import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='sticky top-0 left-0 z-20 flex min-h-32 w-full items-center justify-center gap-4 bg-pink-500'>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/portfolio')}>Portfolio</button>
    </header>
  );
};
