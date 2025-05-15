// transform a number from its own range to desired range
//
// example
// 2 in range of 0, 4 = 15 in range of 10, 20
//
// parameters
// from, from-, from+, to-, to+

export const linearMap = (
  f: number,
  fm: number,
  fp: number,
  tm: number,
  tp: number
) => (f * (tm - tp)) / (fp - fm) + (-fm * (tm - tp)) / (fp - fm) + tp;
