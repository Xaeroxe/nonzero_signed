# nonzero_signed [![Crates.io](https://img.shields.io/crates/v/nonzero_signed.svg)](https://crates.io/crates/nonzero_signed)

## DEPRECATED

Rust's std lib stabilized their own signed NonZero types in Rust 1.34, please use
those instead if you're using Rust 1.34 or greater. You can find them in `std::num`
or `core::num`.

## Description

This rust crate provides a small set of types for signed nonzero integers.

This is implemented by wrapping nonzero unsigned types and casting as needed,
these wrappers are guaranteed to be zero cost because the casts are zero cost.

Provided with a dual license of the MIT and Apache 2.0 licenses.
