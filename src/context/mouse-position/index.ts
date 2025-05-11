import { createContext, useContext } from 'react';

export const MousePositionContext = createContext({ x: 999, y: 999 });

export const useMousePositionContext = () => {
  const context = useContext(MousePositionContext);

  if (context === undefined)
    throw new Error(
      'useMousePositionContext must be used within an MousePositionProvider'
    );

  return context;
};
