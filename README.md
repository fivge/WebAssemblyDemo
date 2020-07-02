## WebAssembly

### AssemblyScript

<https://github.com/AssemblyScript/assemblyscript>

手动构建

```bash
npx asc foo.ts -o foo.wasm
```

```bash
asc foo.ts -b foo.wasm -t foo.wat --sourceMap --validate --optimize
```

### C/C++

<https://wasmbyexample.dev/examples/hello-world/hello-world.c.en-us.html>

### Examples

#### fibonacci

> AssemblyScript

打包构建

```bash
npx asc assembly/fibonacci.ts -o build/fibonacci.wasm
### 7.1K fibonacci.wasm
npx asc assembly/fibonacci.ts -b build/fibonacci.wasm -t build/fibonacci.wat --sourceMap --validate --optimize
### 4.0K fibonacci.wasm
### 59K fibonacci.wasm.map
### 32K fibonacci.wat
```

运行

```bash
http-server
```

打开浏览器调试工具，Console 设置为 Preserve log ，打开 <http://localhost:8088/web/index.html>，多次刷新，取平均值

> C

每次都需要加载 emcc 到环境变量中

```bash
source ../../c/emsdk/emsdk_env.sh
```

打包构建

`node`

```bash
emcc hello.c -o hello.js
### 108K hello.js
### 22K hello.wasm
```

`brower`

```bash
emcc hello.c -O3 -o hello.html
### 92K hello.html
### 15K hello.js
### 1.8K hello.wasm
```

在 html 中引用 js 即可

---

https://mp.weixin.qq.com/s/4lkgmLIkowoPOwgd1g6i0w
