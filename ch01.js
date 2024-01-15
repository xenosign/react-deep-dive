function is(x, y) {
    return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

// 일반
var objectIs = typeof Object.is === 'function' ? Object.is : is;

var obj1 = {};
var obj2 = {};
var objCopy = obj1;

console.log(is(obj1, obj2));
console.log(is(obj1, objCopy));

console.log(objectIs(obj1, obj2));
console.log(objectIs(obj1, objCopy));
