// service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/web/sw.js", { scope: "/web/" });
}

/**
 * 斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……
 * 在数学上，斐波纳契数列以如下被以递归的方法定义：F（0）=0，F（1）=1，F（n）=F(n-1)+F(n-2)（n≥2，n∈N*）
 * 递归实现时间复杂度为 O(n^2)
 */

import { wasmBrowserInstantiate } from "./tool.js";

const runWasm = async () => {
  const path = "../build/fibonacci.wasm";
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate(path);

  const value = 24;
  // wasm version
  console.time("runsWasm");
  const result = wasmModule.instance.exports.fibonacci(value);
  console.timeEnd("runsWasm");

  // js version
  console.time("runsJs");
  const resultJs = Fibonacci(value);
  console.timeEnd("runsJs");

  console.log(`result:`, value, result, resultJs);

  // window.location.reload();
};

runWasm();

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
