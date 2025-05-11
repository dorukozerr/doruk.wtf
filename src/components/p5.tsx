import { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

export const P5Scene = () => {
  const [mouseParams, setMouseParams] = useState({ x: 0, y: 0 });

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5: p5Types) => {
    p5.background(0);

    const size = mouseParams.x;
    p5.ellipse(p5.width / 2, p5.height / 2, size, size);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseParams({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Sketch setup={setup} draw={draw} />;
};
