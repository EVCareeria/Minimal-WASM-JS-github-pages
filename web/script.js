import init, * as wasm from "./dist/wasm_testing.js";
await init();

async function run() {
    let counter = 0;

    document.getElementById("wasmButton").onclick = (event) => {
        counter += 1;
    
        document.getElementById("testCounter").textContent = `Testing ${counter}`
    }
    
    wasm.greet();
}


run()