// import { wasmBrowserInstantiate } from "./tool.js";
// ERROR: Uncaught SyntaxError: Cannot use import statement outside a module
importScripts("../tool.js");

onmessage = async req => {
  const value = req.data;
  let result = null;

  const path = "../../build/fibonacci.wasm";
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate(path);
  console.time("runsWasm");
  result = wasmModule.instance.exports.fibonacci(value);
  console.timeEnd("runsWasm");

  postMessage(result);
};
