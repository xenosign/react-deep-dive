// polyfill
function is(x, y) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

// 일반
const objectIs = typeof Object.is === 'function' ? Object.is : is;

const obj1 = {};
const obj2 = {};

const objCopy = obj1;

console.log(is(obj1, obj2)); // false
console.log(is(obj1, objCopy)); // true

console.log(objectIs(obj1, obj2)); // false
console.log(objectIs(obj1, objCopy)); // true



