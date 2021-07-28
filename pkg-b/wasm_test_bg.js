import * as wasm from './wasm_test_bg.wasm';

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function myAdd(a, b) {
    var ret = wasm.myAdd(a, b);
    return ret;
}

