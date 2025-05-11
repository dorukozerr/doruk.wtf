import { type RefObject, createContext, useContext } from 'react';

interface SceneStateProps {
  triggerRef: RefObject<HTMLButtonElement | null>;
  proximity: number;
  isHovered: boolean;
}

type SceneState = SceneStateProps | undefined;

export const SceneStateContext = createContext<SceneState>(undefined);

export const useSceneStateContext = () => {
  const context = useContext(SceneStateContext);

  if (context === undefined)
    throw new Error(
      'useSceneStateContext must be used within an SceneStateProvider'
    );

  return context;
};
