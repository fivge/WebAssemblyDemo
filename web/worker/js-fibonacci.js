onmessage = req => {
  const value = req.data;
  let result = null;

  console.time("runsJs");
  result = Fibonacci(value);
  console.timeEnd("runsJs");

  postMessage(result);
};

/**
 *  #### js 版斐波那契数列
 *
 * @param {*} value F(n)
 */
const Fibonacci = value => {
  if (value === 1 || value === 2) {
    return 1;
  }
  return Fibonacci(value - 2) + Fibonacci(value - 1);
};
