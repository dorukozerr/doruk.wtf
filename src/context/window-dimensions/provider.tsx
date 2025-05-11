import { useState, useEffect, type ReactNode } from 'react';

import { WindowDimensionsContext } from '~/context/window-dimensions';

export const WindowDimensionsProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const onResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};
