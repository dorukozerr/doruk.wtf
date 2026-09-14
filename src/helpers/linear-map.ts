/**
 * Maps a number from one range to another using linear interpolation
 *
 * @example
 *   // Maps 2 from range [0,4] to range [10,20]
 *   console.log(linearMap(2, 0, 4, 10, 20)) // logs 15
 *
 * @param value The input value to be mapped
 * @param inMin Lower bound of the input range
 * @param inMax Upper bound of the input range
 * @param outMin Lower bound of the output range
 * @param outMax Upper bound of the output range
 * @returns The mapped value in the output range
 */
export const linearMap = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) =>
  (value * (outMin - outMax)) / (inMax - inMin) +
  (-inMin * (outMin - outMax)) / (inMin - inMax) +
  outMax
