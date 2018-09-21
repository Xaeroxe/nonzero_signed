var N = null;var searchIndex = {};
searchIndex["nonzero_signed"]={"doc":"","items":[[3,"NonZeroI8","nonzero_signed","An integer that is known not to equal zero.",N,N],[3,"NonZeroI16","","An integer that is known not to equal zero.",N,N],[3,"NonZeroI32","","An integer that is known not to equal zero.",N,N],[3,"NonZeroI64","","An integer that is known not to equal zero.",N,N],[3,"NonZeroI128","","An integer that is known not to equal zero.",N,N],[3,"NonZeroIsize","","An integer that is known not to equal zero.",N,N],[11,"clone","","",0,[[["self"]],["nonzeroi8"]]],[11,"eq","","",0,[[["self"],["nonzeroi8"]],["bool"]]],[11,"ne","","",0,[[["self"],["nonzeroi8"]],["bool"]]],[11,"hash","","",0,N],[11,"new_unchecked","","Create a non-zero without checking the value.",0,[[["i8"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",0,[[["i8"]],["option"]]],[11,"get","","Returns the value as a primitive type.",0,[[["self"]],["i8"]]],[11,"cmp","","",0,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",0,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"clone","","",1,[[["self"]],["nonzeroi16"]]],[11,"eq","","",1,[[["self"],["nonzeroi16"]],["bool"]]],[11,"ne","","",1,[[["self"],["nonzeroi16"]],["bool"]]],[11,"hash","","",1,N],[11,"new_unchecked","","Create a non-zero without checking the value.",1,[[["i16"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",1,[[["i16"]],["option"]]],[11,"get","","Returns the value as a primitive type.",1,[[["self"]],["i16"]]],[11,"cmp","","",1,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",1,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"clone","","",2,[[["self"]],["nonzeroi32"]]],[11,"eq","","",2,[[["self"],["nonzeroi32"]],["bool"]]],[11,"ne","","",2,[[["self"],["nonzeroi32"]],["bool"]]],[11,"hash","","",2,N],[11,"new_unchecked","","Create a non-zero without checking the value.",2,[[["i32"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",2,[[["i32"]],["option"]]],[11,"get","","Returns the value as a primitive type.",2,[[["self"]],["i32"]]],[11,"cmp","","",2,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",2,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"clone","","",3,[[["self"]],["nonzeroi64"]]],[11,"eq","","",3,[[["self"],["nonzeroi64"]],["bool"]]],[11,"ne","","",3,[[["self"],["nonzeroi64"]],["bool"]]],[11,"hash","","",3,N],[11,"new_unchecked","","Create a non-zero without checking the value.",3,[[["i64"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",3,[[["i64"]],["option"]]],[11,"get","","Returns the value as a primitive type.",3,[[["self"]],["i64"]]],[11,"cmp","","",3,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",3,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"clone","","",4,[[["self"]],["nonzeroi128"]]],[11,"eq","","",4,[[["self"],["nonzeroi128"]],["bool"]]],[11,"ne","","",4,[[["self"],["nonzeroi128"]],["bool"]]],[11,"hash","","",4,N],[11,"new_unchecked","","Create a non-zero without checking the value.",4,[[["i128"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",4,[[["i128"]],["option"]]],[11,"get","","Returns the value as a primitive type.",4,[[["self"]],["i128"]]],[11,"cmp","","",4,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",4,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"clone","","",5,[[["self"]],["nonzeroisize"]]],[11,"eq","","",5,[[["self"],["nonzeroisize"]],["bool"]]],[11,"ne","","",5,[[["self"],["nonzeroisize"]],["bool"]]],[11,"hash","","",5,N],[11,"new_unchecked","","Create a non-zero without checking the value.",5,[[["isize"]],["self"]]],[11,"new","","Create a non-zero if the given value is not zero.",5,[[["isize"]],["option"]]],[11,"get","","Returns the value as a primitive type.",5,[[["self"]],["isize"]]],[11,"cmp","","",5,[[["self"],["self"]],["ordering"]]],[11,"partial_cmp","","",5,[[["self"],["self"]],["option",["ordering"]]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]]],"paths":[[3,"NonZeroI8"],[3,"NonZeroI16"],[3,"NonZeroI32"],[3,"NonZeroI64"],[3,"NonZeroI128"],[3,"NonZeroIsize"]]};
initSearch(searchIndex);
