import { useState, useEffect, type ReactNode } from 'react';

import { WindowDimensionsContext } from '~/context/window-dimensions';

export const WindowDimensionsProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  useEffect(() => {
    const onResize = () =>
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};
