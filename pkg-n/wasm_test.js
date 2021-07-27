

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

const url = new URL(import.meta.url)

const persit = { name: "net", host: url.host };
await Deno.permissions.request(persit);

const splitedUrl = url.href.split("/")
splitedUrl.pop()
const dir = splitedUrl.join("/")
const response = await fetch(`${dir}/wasm_test_bg.wasm`);
const buffer = await response.arrayBuffer();
const wasmInstance = await WebAssembly.instantiate(buffer, imports);
const wasm = wasmInstance.instance.exports;
