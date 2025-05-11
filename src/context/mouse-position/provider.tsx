import { useState, useEffect, type ReactNode } from 'react';

import { MousePositionContext } from '~/context/mouse-position';

export const MousePositionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 999, y: 999 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setPosition({ x: event.clientX, y: event.clientY });

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MousePositionContext.Provider value={position}>
      {children}
    </MousePositionContext.Provider>
  );
};
