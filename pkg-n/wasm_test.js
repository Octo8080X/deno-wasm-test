

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

const splitedUrl = import.meta.url.split("/")
splitedUrl.pop()
const dir = splitedUrl.join("/")

//const wasmFile = file.substring(0, file.lastIndexOf(Deno.build.os === 'windows' ? '\\' : '/') + 1) + 'wasm_test_bg.wasm';
//console.log(wasmFile)
//const wasmModule = new WebAssembly.Module(Deno.readFileSync(wasmFile));
//const wasmInstance = new WebAssembly.Instance(wasmModule, imports);

const response = await fetch(`${dir}/wasm_test_bg.wasm`);
const buffer = await response.arrayBuffer();
const wasmInstance = await WebAssembly.instantiate(buffer);

const wasm = wasmInstance.exports;

//const response = await fetch("add.wasm");
//const buffer = await response.arrayBuffer();
//const obj = await WebAssembly.instantiate(buffer);
//obj.instance.exports.exported_func();