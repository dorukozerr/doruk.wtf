import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { MousePositionProvider } from '~/context/mouse-position/provider'
import { router } from '~/router'

import '~/index.css'
import { SceneStateProvider } from './context/scene-state/provider'
import { WindowDimensionsProvider } from './context/window-dimensions/provider'

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
)
