import {
  createContext,
  useContext,
  type RefObject,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { linearMap } from "#/helpers/linear-map";

export const WindowCTX = createContext<
  | {
      triggerRef: RefObject<HTMLButtonElement | null>;
      proximity: number;
      isHovered: boolean;
      mousePosition: { x: number; y: number };
      dimensions: { width: number; height: number };
    }
  | undefined
>(undefined);

export const WindowCTXProvider = ({ children }: { children: ReactNode }) => {
  if (!window) return;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState({
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight,
  });
  const [mousePosition, setPosition] = useState({ x: 999, y: 999 });
  const [proximity, setProximity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onResize = () =>
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setPosition({ x: event.clientX, y: event.clientY });

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      const { width, height } = dimensions;

      const currentDistance = Math.sqrt(
        Math.pow(mousePosition.x - elementCenterX, 2) +
          Math.pow(mousePosition.y - elementCenterY, 2),
      );

      const distanceToTopLeft = Math.sqrt(
        Math.pow(elementCenterX, 2) + Math.pow(elementCenterY, 2),
      );

      const distanceToTopRight = Math.sqrt(
        Math.pow(width - elementCenterX, 2) + Math.pow(elementCenterY, 2),
      );

      const distanceToBottomLeft = Math.sqrt(
        Math.pow(elementCenterX, 2) + Math.pow(height - elementCenterY, 2),
      );

      const distanceToBottomRight = Math.sqrt(
        Math.pow(width - elementCenterX, 2) + Math.pow(height - elementCenterY, 2),
      );

      const maxDistance = Math.max(
        distanceToTopLeft,
        distanceToTopRight,
        distanceToBottomLeft,
        distanceToBottomRight,
      );

      const proximityValue = linearMap(currentDistance, 0, maxDistance, 0, 1);

      setProximity(Math.max(0, Math.min(1, proximityValue)));
    };

    checkHover();
  }, [mousePosition, triggerRef, dimensions]);

  return (
    <WindowCTX.Provider value={{ triggerRef, proximity, isHovered, mousePosition, dimensions }}>
      {children}
    </WindowCTX.Provider>
  );
};

export const useWindowCTX = () => {
  const context = useContext(WindowCTX);

  if (context === undefined)
    throw new Error("useWindowCTX must be used within an WindowCTXProvider");

  return context;
};
