function is(x, y) {
    return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

// 일반
var objectIs = typeof Object.is === 'function' ? Object.is : is;

// function test1(x, y) {
//     console.log(1 / x);
//     console.log(1 / y);
// }



// console.log(+0 === -0);
// test1(+0, -0);

// function test2(x, y) {
//     console.log(x !== x);
//     console.log(y !== y);
// }

// console.log(NaN === 0 / 0);
// console.log(0 / 0);
// test2(NaN, 0 / 0);

console.log(1 / NaN === 1 / NaN);
console.log(NaN === Number.NaN);
console.log(typeof NaN);
// console.log(NaN !== 0)
// console.log(-0 !== 0);
