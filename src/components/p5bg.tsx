import type P5 from 'p5'
import { useEffectEvent, useLayoutEffect, useRef, useState } from 'react'
import Sketch from 'react-p5'

import { useWindowCTX } from '#/contexts/window'
import { linearMap } from '#/helpers/linear-map'

const circleSizes = [2584, 1597, 987, 610, 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1]

const rgbValues = Array.from({ length: circleSizes.length }).map((_, index) =>
  linearMap(index + 1, 1, circleSizes.length, 0, 255 / 6)
)

const alphaValues = Array.from({ length: circleSizes.length }).map((_, index) =>
  linearMap(index + 1, 1, circleSizes.length, 255, 0)
)

export const P5BG = () => {
  const container = useRef<HTMLDivElement>(null)
  const [yOff, setYOff] = useState(0)

  const {
    isHovered,
    proximity,
    dimensions: { width, height }
  } = useWindowCTX()

  const [size, setSize] = useState({ H: height, W: width })
  const { W, H } = size

  const syncContainerSize = useEffectEvent(() => {
    if (container.current) {
      const cw = container.current.getBoundingClientRect().width
      const ch = container.current.getBoundingClientRect().height

      if (W !== cw || H !== ch) {
        setSize((prev) => ({
          ...prev,
          ...(prev.W !== cw ? { W: cw } : {}),
          ...(prev.H !== ch ? { H: ch } : {})
        }))
      }
    }
  })

  useLayoutEffect(() => {
    syncContainerSize()
    window.addEventListener('resize', () => syncContainerSize())
    window.visualViewport?.addEventListener('resize', () => syncContainerSize())
    screen.orientation?.addEventListener('change', () => syncContainerSize())
    return () => {
      window.removeEventListener('resize', () => syncContainerSize())
      window.visualViewport?.removeEventListener('resize', () => syncContainerSize())
      screen.orientation?.removeEventListener('change', () => syncContainerSize())
    }
    // We need to trigger rerendering here too, `f12` console toggle does not
    // Trigger redraw and manual resize does not trigger redraw too, I mean idk
    // Its better to trigger some rerenders rather than whole setup breaking
    // Apart
  }, [W, H, width, height])

  const setup = (p5: P5, canvasParentRef: Element) => p5.createCanvas(W, H).parent(canvasParentRef)

  const draw = (p5: P5) => {
    let xoff1 = 0
    let xoff2 = 0
    let xoff3 = 0
    const invert = (value: number) => (isHovered ? 255 - value : value)
    p5.background(invert(0))
    p5.fill(invert(255))
    p5.beginShape()
    for (let x = 0; x <= innerWidth; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 5, 0.5)
      const y = p5.map(p5.noise(xoff1, yOff), 0, magnifierValue, H / 6, H / 3)
      p5.vertex(x, y)
      xoff1 += 0.05
    }
    setYOff((prev) => prev + 0.01)
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
    p5.fill(invert(122.5))
    p5.beginShape()
    for (let x = 0; x <= W; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 20, 2.5)
      const y = p5.map(p5.noise(xoff2, yOff), 0, magnifierValue, H / 4, H)
      p5.vertex(x, y)
      xoff2 += 0.5
    }
    setYOff((prev) => prev + 0.01)
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
    p5.noStroke()
    circleSizes
      .filter((s) => s < H)
      .forEach((size, index) => {
        const n = p5.noise(xoff2 + index * 10, yOff + index * 0.7)
        const rgbValue = rgbValues[index]
        const alphaValue = isHovered ? p5.map(n, 0, 1, 0, 255) : alphaValues[index]
        const circleSize = isHovered ? size * p5.map(n, 0, 1, 0.6, 1.4) : size
        p5.fill(rgbValue, rgbValue, rgbValue, alphaValue)
        p5.circle(W / 2, H / 2, circleSize)
      })
    p5.fill(invert(0))
    p5.beginShape()
    for (let x = 0; x <= W; x += 10) {
      const magnifierValue = p5.map(proximity, 0, 1, 1, isHovered ? 0.7 : 0.85 * proximity)
      const y = p5.map(p5.noise(xoff3, yOff), 0, magnifierValue, H / 24, H)
      p5.vertex(x, y)
      xoff3 += 0.1
    }
    setYOff((prev) => prev + 0.01)
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
  }

  const windowResized = (p5: P5) => p5.resizeCanvas(W, H)

  return (
    <div ref={container} className='flex h-full w-full items-center justify-center bg-black'>
      <Sketch
        key={`P5BG-${W}-${H}`}
        setup={setup}
        draw={draw}
        windowResized={windowResized}
        deviceTurned={windowResized}
        deviceMoved={windowResized}
      />
    </div>
  )
}
