import { useRef, useState, useEffect, type ReactNode } from 'react';

import { SceneStateContext } from '~/context/scene-state';
import { useWindowDimensionsContext } from '~/context/window-dimensions';
import { useMousePositionContext } from '~/context/mouse-position';
import { linearMap } from '~/lib/linear-map';

export const SceneStateProvider = ({ children }: { children: ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [proximity, setProximity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { width, height } = useWindowDimensionsContext();

  const mousePosition = useMousePositionContext();

  useEffect(() => {
    const element = triggerRef.current;

    if (!element) return;

    const checkHover = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();

      const isDirectlyOver =
        mousePosition.x >= rect.left &&
        mousePosition.x <= rect.right &&
        mousePosition.y >= rect.top &&
        mousePosition.y <= rect.bottom;

      setIsHovered(isDirectlyOver);

      if (isDirectlyOver) {
        setProximity(1);

        return;
      }

      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const currentDistance = Math.sqrt(
        Math.pow(mousePosition.x - elementCenterX, 2) +
          Math.pow(mousePosition.y - elementCenterY, 2)
      );

      const distanceToTopLeft = Math.sqrt(
        Math.pow(elementCenterX, 2) + Math.pow(elementCenterY, 2)
      );

      const distanceToTopRight = Math.sqrt(
        Math.pow(width - elementCenterX, 2) + Math.pow(elementCenterY, 2)
      );

      const distanceToBottomLeft = Math.sqrt(
        Math.pow(elementCenterX, 2) + Math.pow(height - elementCenterY, 2)
      );

      const distanceToBottomRight = Math.sqrt(
        Math.pow(width - elementCenterX, 2) +
          Math.pow(height - elementCenterY, 2)
      );

      const maxDistance = Math.max(
        distanceToTopLeft,
        distanceToTopRight,
        distanceToBottomLeft,
        distanceToBottomRight
      );

      const proximityValue = linearMap(currentDistance, 0, maxDistance, 0, 1);

      setProximity(Math.max(0, Math.min(1, proximityValue)));
    };

    checkHover();
  }, [mousePosition, triggerRef, width, height]);

  return (
    <SceneStateContext.Provider value={{ triggerRef, proximity, isHovered }}>
      {children}
    </SceneStateContext.Provider>
  );
};
