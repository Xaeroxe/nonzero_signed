use std::num::*;
use std::fmt;

macro_rules! impl_nonzero_fmt {
    ( ( $( $Trait: ident ),+ ) for $Ty: ident ) => {
        $(
            impl fmt::$Trait for $Ty {
                #[inline]
                fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
                    self.get().fmt(f)
                }
            }
        )+
    }
}

macro_rules! def_signed {
    ( $($name:ident($inner:ident, $zeroable_signed:ident, $zeroable:ident),)+) => {
        $(
            /// An integer that is known not to equal zero.
            ///
            /// This enables some memory layout optimization.
            /// For example, `Option<NonZeroI32>` is the same size as `i32`:
            ///
            /// ```rust
            /// use std::mem::size_of;
            /// use nonzero_signed::NonZeroI32;
            /// assert_eq!(size_of::<Option<NonZeroI32>>(), size_of::<i32>());
            /// ```
            #[derive(Copy, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
            #[repr(transparent)]
            pub struct $name($inner);

            impl $name {
                /// Create a non-zero without checking the value.
                ///
                /// # Safety
                ///
                /// The value must not be zero.
                #[inline]
                pub unsafe fn new_unchecked(n: $zeroable_signed) -> Self {
                    $name($inner::new_unchecked(n as $zeroable))
                }

                /// Create a non-zero if the given value is not zero.
                #[inline]
                pub fn new(n: $zeroable_signed) -> Option<Self> {
                    if n != 0 {
                        Some(unsafe {$name::new_unchecked(n)})
                    } else {
                        None
                    }
                }

                /// Returns the value as a primitive type.
                #[inline]
                pub fn get(self) -> $zeroable_signed {
                    self.0.get() as $zeroable_signed
                }
            }

            impl_nonzero_fmt! {
                (Debug, Display, Binary, Octal, LowerHex, UpperHex) for $name
            }
        )+
    }
}

def_signed!(
    NonZeroI8(NonZeroU8, i8, u8),
    NonZeroI16(NonZeroU16, i16, u16),
    NonZeroI32(NonZeroU32, i32, u32),
    NonZeroI64(NonZeroU64, i64, u64),
    NonZeroI128(NonZeroU128, i128, u128),
    NonZeroIsize(NonZeroUsize, isize, usize),
);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn wrapping_test() {
        assert!(NonZeroI8::new(0).is_none());
        assert!(NonZeroI8::new(5).unwrap().get() == 5);
    }
}
