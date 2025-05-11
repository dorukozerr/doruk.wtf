import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { WindowDimensionsProvider } from './context/window-dimensions/provider';
import { MousePositionProvider } from '~/context/mouse-position/provider';
import { SceneStateProvider } from './context/scene-state/provider';
import { router } from '~/router';

import '~/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WindowDimensionsProvider>
      <MousePositionProvider>
        <SceneStateProvider>
          <RouterProvider router={router} />
        </SceneStateProvider>
      </MousePositionProvider>
    </WindowDimensionsProvider>
  </StrictMode>
);
