import { createContext, useContext } from 'react';

export const WindowDimensionsContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight
});

export const useWindowDimensionsContext = () => {
  const context = useContext(WindowDimensionsContext);

  if (context === undefined)
    throw new Error(
      'useWindowDimensionsContext must be used within an WindowDimensionsProvider'
    );

  return context;
};
