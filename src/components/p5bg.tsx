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

const BLACK = 0
const WHITE = 255

export const P5BG = () => {
  const container = useRef<HTMLDivElement>(null)
  const SP = useRef(0)
  const [YOFF, SET_YOFF] = useState(0)

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

  const invert = (value: number) => (isHovered ? 255 - value : value)

  const setup = (p5: P5, canvasParentRef: Element) => p5.createCanvas(W, H).parent(canvasParentRef)

  const draw = (p5: P5) => {
    let XOFF_1 = 0
    let XOFF_2 = 0
    let XOFF_3 = 0

    const XOFF_1_A = isHovered ? 0.08 : 0.05
    const XOFF_2_A = isHovered ? 0.125 : 0.035
    const XOFF_3_A = isHovered ? 0.3 : 0.15

    const P_TARGET = isHovered ? 1 : proximity
    const P_LERP = p5.lerp(SP.current, P_TARGET, 1)
    const P_CUR_POS = p5.map(P_LERP, 0, 1, H / 3, H / 6)
    const CUR_POS_FACTOR = p5.map(P_LERP, 0, 1, 0.65, 1)

    const L1_START_1 = isHovered ? 0 : 0
    const L1_STOP_1 = isHovered ? 0.75 : 1
    const L1_START_2 = isHovered ? H / 3 : H / 3
    const L1_STOP_2 = isHovered ? H / 9 : H / 6 - P_CUR_POS

    const L2_START_1 = isHovered ? 0 : 0
    const L2_STOP_1 = isHovered ? 0.75 : 1
    const L2_START_2 = isHovered ? H / 3 : H / 3
    const L2_STOP_2 = isHovered ? H / 9 : H / 3 - P_CUR_POS

    const L3_START_1 = isHovered ? 0 : 0
    const L3_STOP_1 = isHovered ? 0.75 : 1
    const L3_START_2 = isHovered ? H / 3 : H / 2
    const L3_STOP_2 = isHovered ? H / 4 : H / 9

    SP.current = P_LERP

    p5.background(invert(BLACK))
    //
    p5.fill(invert(WHITE))
    p5.beginShape()
    for (let x = 0; x <= innerWidth; x += 10) {
      const y =
        p5.map(p5.noise(XOFF_1, YOFF), L1_START_1, L1_STOP_1, L1_START_2, L1_STOP_2) *
        CUR_POS_FACTOR
      p5.vertex(x, y)
      XOFF_1 += XOFF_1_A
    }
    // SET_YOFF((prev) => prev + 0.015)
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
    //
    p5.fill(invert(122.5))
    p5.beginShape()
    for (let x = 0; x <= W; x += 10) {
      const y =
        (p5.map(p5.noise(XOFF_2, YOFF), L2_START_1, L2_STOP_1, L2_START_2, L2_STOP_2) *
          CUR_POS_FACTOR) /
        0.5
      p5.vertex(x, y)
      XOFF_2 += XOFF_2_A
    }
    SET_YOFF((prev) => prev + 0.004)
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
    //
    if (!isHovered) {
      p5.noStroke()
      circleSizes
        .filter((s) => s < H)
        .forEach((s, i) => {
          const U8 = rgbValues[i]
          p5.fill(U8, U8, U8, alphaValues[i])
          p5.circle(W / 2, H / 2, s)
        })
    }
    //
    p5.fill(invert(0))
    p5.beginShape()
    for (let x = 0; x <= W; x += 10) {
      const y =
        (p5.map(p5.noise(XOFF_3, YOFF), L3_START_1, L3_STOP_1, L3_START_2, L3_STOP_2) *
          CUR_POS_FACTOR) /
        0.5
      p5.vertex(x, y)
      XOFF_3 += XOFF_3_A
    }
    p5.vertex(W, H)
    p5.vertex(0, H)
    p5.endShape(p5.CLOSE)
    //
    SET_YOFF((prev) => prev + 0.02)
    //
    if (isHovered) {
      p5.noStroke()
      circleSizes
        .filter((s) => s < H)
        .forEach((s, i) => {
          const U8 = rgbValues[i]
          const NOISE = p5.noise(XOFF_2 + i * 10, YOFF + i * 0.7)
          const A = p5.map(NOISE, 0, 1, 0, 255)
          const SIZE = s * p5.map(NOISE, 0, 1, 0.6, 1.4)

          p5.fill(U8, U8, U8, A)
          p5.circle(W / 2, H / 2, SIZE)
        })
    }
  }

  const windowResized = (p5: P5) => p5.resizeCanvas(W, H)

  return (
    <div
      ref={container}
      className='flex h-full w-full items-center justify-center'
      style={{ backgroundColor: isHovered ? '#ffffff' : '#000000' }}
    >
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
