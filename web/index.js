import { wasmBrowserInstantiate } from "./tool.js";

const runWasm = async () => {
  const path = "../build/optimized.wasm";
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate(path);

  // Call the Add function export from wasm, save the result
  const addResult = wasmModule.instance.exports.add(24, 24);

  // Set the result onto the body
  // document.body.textContent = `Hello World! addResult: ${addResult}`;
  console.log(`result:`, addResult);
};

runWasm();
