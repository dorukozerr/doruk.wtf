import { useState } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

export const P5Scene = () => {
  const [yOff, setYOff] = useState(0);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.fill(255);
    p5.beginShape();
    let xoff3 = 0;
    for (let x = 0; x <= innerWidth; x += 10) {
      const y = p5.map(p5.noise(xoff3, yOff), 0, 0.5, 150, height / 3);
      p5.vertex(x, y);
      xoff3 += 0.05;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, window.innerHeight);
    p5.endShape(p5.CLOSE);
    p5.fill(122.5);
    p5.beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
      const y = p5.map(p5.noise(xoff, yOff), 0, 0.5, 150, height / 2);
      p5.vertex(x, y);
      xoff += 0.5;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, height);
    p5.endShape(p5.CLOSE);
    p5.noStroke();
    p5.fill(233, 233, 233, 255);
    p5.circle(width / 2, height / 2, 233);
    p5.fill(144, 144, 144);
    p5.circle(width / 2, height / 2, 144);
    p5.fill(89, 89, 89);
    p5.circle(width / 2, height / 2, 89);
    p5.fill(55, 55, 55);
    p5.circle(width / 2, height / 2, 55);
    p5.fill(34, 34, 34);
    p5.circle(width / 2, height / 2, 34);
    p5.fill(21, 21, 21);
    p5.circle(width / 2, height / 2, 21);
    p5.fill(13, 13, 13);
    p5.circle(width / 2, height / 2, 13);
    p5.fill(8, 8, 8);
    p5.circle(width / 2, height / 2, 8);
    p5.fill(5, 5, 5);
    p5.circle(width / 2, height / 2, 5);
    p5.fill(3, 3, 3);
    p5.circle(width / 2, height / 2, 3);
    p5.fill(2, 2, 2);
    p5.circle(width / 2, height / 2, 2);
    p5.fill(1, 1, 1);
    p5.circle(width / 2, height / 2, 1);
    p5.fill(30);
    p5.beginShape();
    let xoff2 = 0;
    for (let x = 0; x <= width; x += 10) {
      const y = p5.map(p5.noise(xoff2, yOff), 0, 0.5, 150, height);
      p5.vertex(x, y);
      xoff2 += 0.1;
    }
    setYOff((prev) => prev + 0.01);
    p5.vertex(width, height);
    p5.vertex(0, height);
    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} draw={draw} />;
};
