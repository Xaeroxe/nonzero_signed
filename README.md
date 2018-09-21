# nonzero_signed [![Crates.io](https://img.shields.io/crates/v/nonzero_signed.svg)](crates.io/crates/nonzero_signed)

This rust crate provides a small set of types for signed nonzero integers.

This is implemented by wrapping nonzero unsigned types and casting as needed,
these wrappers are guaranteed to be zero cost because the casts are zero cost.

Provided with a dual license of the MIT and Apache 2.0 licenses.
