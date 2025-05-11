export const fib = (n: number): number =>
  n <= 1 ? n : fib(n - 1) + fib(n - 2);
