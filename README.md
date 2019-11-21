## WebAssembly

### AssemblyScript

手动构建

```bash
npx asc foo.ts -o foo.wasm
```

```bash
asc foo.ts -b foo.wasm -t foo.wat --sourceMap --validate --optimize
```

### Examples

#### fibonacci

```bash
npx asc assembly/fibonacci.ts -o build/fibonacci.wasm
### 7.1K fibonacci.wasm
npx asc assembly/fibonacci.ts -b build/fibonacci.wasm -t build/fibonacci.wat --sourceMap --validate --optimize
### 4.0K fibonacci.wasm
### 59K fibonacci.wasm.map
### 32K fibonacci.wat
```

```bash
http-server
```

打开浏览器调试工具，Console 设置为 Preserve log ，打开 <http://localhost:8088/web/index.html>，多次刷新，取平均值
