import { useState } from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';

import { useWindowDimensionsContext } from '~/context/window-dimensions';
import { useSceneStateContext } from '~/context/scene-state';
import { linearMap } from '~/utils/linear-map';

const circleSizes = [
  2584, 1597, 987, 610, 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1
];

const rgbValues = Array.from({ length: circleSizes.length }).map((_, index) =>
  linearMap(index + 1, 1, circleSizes.length, 0, 255 / 6)
);

const alphaValues = Array.from({ length: circleSizes.length }).map((_, index) =>
  linearMap(index + 1, 1, circleSizes.length, 255, 0)
);

export const P5Scene = () => {
  const [yOff, setYOff] = useState(0);
  const { height, width } = useWindowDimensionsContext();
  const { isHovered, proximity } = useSceneStateContext();

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    let xoff1 = 0;
    let xoff2 = 0;
    let xoff3 = 0;

    // First wawe
    p5.background(0);
    p5.fill(255);
    p5.beginShape();
    for (let x = 0; x <= innerWidth; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 5, 0.5);
      const y = p5.map(
        p5.noise(xoff1, yOff),
        0,
        magnifierValue,
        height / 6,
        height / 3
      );
      p5.vertex(x, y);
      xoff1 += 0.05;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, height);
    p5.endShape(p5.CLOSE);

    // Mid wawe
    p5.fill(122.5);
    p5.beginShape();
    for (let x = 0; x <= width; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 5, 2.5);
      const y = p5.map(
        p5.noise(xoff2, yOff),
        0,
        magnifierValue,
        height / 4,
        height
      );
      p5.vertex(x, y);
      xoff2 += 0.5;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, height);
    p5.endShape(p5.CLOSE);

    // Circles
    p5.noStroke();
    circleSizes.forEach((size, index) => {
      const rgbValue = rgbValues[index];
      // const alphaValue = ;
      const alphaValue = isHovered
        ? p5.map(p5.noise(xoff2, yOff), 0, 1, 0, 255 / 4)
        : alphaValues[index];
      p5.fill(rgbValue, rgbValue, rgbValue, alphaValue);
      p5.circle(width / 2, height / 2, size);
    });

    // Bottom Wawe
    p5.fill(0);
    p5.beginShape();
    for (let x = 0; x <= width; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 0.8, 0.4);
      const y = p5.map(
        p5.noise(xoff3, yOff),
        0,
        magnifierValue,
        height / 6,
        height
      );
      p5.vertex(x, y);
      xoff3 += 0.1;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, height);
    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} draw={draw} />;
};
