

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

const desc1 = { name: "net", path: "https://raw.githubusercontent.com" };
const status1 = await Deno.permissions.request(desc1);

const splitedUrl = import.meta.url.split("/")
splitedUrl.pop()
const dir = splitedUrl.join("/")
const response = await fetch(`${dir}/wasm_test_bg.wasm`);
const buffer = await response.arrayBuffer();
const wasmInstance = await WebAssembly.instantiate(buffer, imports);
const wasm = wasmInstance.instance.exports;
