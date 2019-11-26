// service worker
/** FIXME: service worker 缓存刷新 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/web/sw.js", { scope: "/web/" });
}

const value = 41;

let resultJs = null;
let resultAsWasm = null;

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

const runFibonacci = () => {
  // worker
  if (window.Worker) {
    // 创建线程
    let jsWorker = new Worker("worker/js-fibonacci.js");
    let asWasmWorker = new Worker("worker/as-wasm-fibonacci.js");

    //  全部线程
    let workers = [jsWorker, asWasmWorker];

    /** 杀死全部线程 */
    let killAllWorkers = () => {
      workers.forEach(worker => worker.terminate());
    };

    // 开始计算
    jsWorker.postMessage(value);
    asWasmWorker.postMessage(value);

    // 处理结果
    jsWorker.onmessage = res => {
      resultJs = res.data;
      console.log(`js ${new Date()}`, resultJs);
      killAllWorkers();
    };

    asWasmWorker.onmessage = res => {
      resultAsWasm = res.data;
      console.log(`asWasm ${new Date()}`, resultAsWasm);
      killAllWorkers();
    };
  } else {
    console.time("runsMainJs");
    resultJs = Fibonacci(value);
    console.timeEnd("runsMainJs");
    console.log(`main.js ${new Date()}`, resultJs);
  }
};

runFibonacci();

console.log(`主线程执行完毕 ${new Date()}`, resultJs, resultAsWasm);
