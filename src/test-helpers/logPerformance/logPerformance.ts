export const logPerformance = (opts: {
  name: string;
  fn: () => void;
  assertion: (actual: number) => void;
}) => {
  const { name, fn, assertion } = opts;

  const start = performance.now();
  fn();
  const end = performance.now();

  const duration = end - start;
  assertion(duration);

  console.table({ [name]: `${duration}ms` });
};
