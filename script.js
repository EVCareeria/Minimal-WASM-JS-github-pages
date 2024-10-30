import init, * as wasm from "./web/dist/wasm_testing.js";
await init();

async function run() {
    let counter = 0;

    document.getElementById("wasmButton").onclick = () => {
        const value = parseInt(document.getElementById("testCounter").textContent);
        const new_val = wasm.add_one(value);

        document.getElementById("testCounter").textContent = `${new_val}`;
    }
    
    wasm.greet();
}


run()