export const fibonacci = (n: number): number =>
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
