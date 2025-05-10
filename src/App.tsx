import { useTempStore } from './store/temp.store';

export const App = () => {
  const { thinkingAboutChoicesIMake } = useTempStore();

  return (
    <div className='w-full h-full bg-black flex-col gap-4 flex justify-center items-center'>
      <h1 className='text-5xl text-white'>Hello again world</h1>
      <p className='text-white'>{thinkingAboutChoicesIMake}</p>
    </div>
  );
};
