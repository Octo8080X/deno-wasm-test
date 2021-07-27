#!/bin/sh

cargo install wasm-bindgen-cli
rustup target add wasm32-unknown-unknown
cargo build --lib --target wasm32-unknown-unknown
wasm-bindgen --target deno target/wasm32-unknown-unknown/debug/wasm_test.wasm --out-dir ./pkg