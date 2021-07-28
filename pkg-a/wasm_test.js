

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function myAdd(a, b) {
    var ret = wasm.myAdd(a, b);
    return ret;
}

const imports = {
    __wbindgen_placeholder__: {
    },

};

//const file = new URL(import.meta.url).pathname;
//const wasmFile = file.substring(0, file.lastIndexOf(Deno.build.os === 'windows' ? '\\' : '/') + 1) + 'wasm_test_bg.wasm';
//const wasmModule = new WebAssembly.Module(Deno.readFileSync(wasmFile));
//const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
//const wasm = wasmInstance.exports;

//const file = new URL(import.meta.url).pathname;

const url = new URL(import.meta.url)

const splitedUrl = url.href.split("/")
splitedUrl.pop()
const dir = splitedUrl.join("/")

const { instance, module } = await WebAssembly.instantiateStreaming(
    fetch(`${dir}/wasm_test_bg.wasm`),
);
const wasm = instance.exports;
