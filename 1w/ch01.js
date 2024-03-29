// function is(x, y) {
//     return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
// }

// // 일반
// var objectIs = typeof Object.is === 'function' ? Object.is : is;

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

// console.log(1 / NaN === 1 / NaN);
// console.log(NaN === Number.NaN);
// console.log(typeof NaN);
// console.log(NaN !== 0)
// console.log(-0 !== 0);

// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   static hello() {
//     console.log("안녕하세요!");
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

// const hyundaiCar = new Car("hyundai");

// Car.hello();
// hyundaiCar.sayName();
// hyundaiCar.hello(); // Err

// var x = 10;

// function foo() {
//   var x = 100;
//   console.log(x); // 100

//   function bar() {
//     var x = 1000;
//     console.log(x); // 1000
//   }
// }

// console.log(x); // 10

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// };

// for (var i = 0; i < 5; i++) {
//   setTimeout((function (sec) {
//     return function () { console.log(sec); }
//   })(i), i * 1000)
// };

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// function foo() {
//   console.log('foo');
// }

// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// setTimeout(foo, 0);

// Promise.resolve().then(bar).then(baz);

// const [a = 1, b = 1, c = 1, d = 1, e = 1] = [undefined, null, 0, ""];

// console.log(a, b, c, d, e);

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     acc.push(cur);
//   }

//   return acc;
// }, []);

// console.log(result);

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a, b) {
  return a + b;
}
