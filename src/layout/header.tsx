import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='w-full h-32 bg-pink-500 gap-4 flex justify-center items-center'>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/portfolio')}>Portfolio</button>
    </header>
  );
};
