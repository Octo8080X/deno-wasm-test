use wasm_bindgen::prelude::*;

#[wasm_bindgen (js_name = myAdd)]
pub fn my_add(a:i32, b:i32) -> i32{
    a+b
}