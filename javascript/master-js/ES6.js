// Shims or Polyfills
// Are patterns to define behavior from a new version
// In a compatible form supported by an older version of the environment

let numberIsFinite =
  Number.isFinite ||
  function isFinite(value) {
    return typeof value === "number" && globalIsFinite(value);
  };

console.log(numberIsFinite("sdd"));
console.log(numberIsFinite(25));

// Block Scoping
// 1-Before ES6
var a = 1;
(function () {
  var a = 2;
  console.log(a);
})();
console.log(a);

// 2-ES6 Block Scope
var a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);

// Defaulting parameters
function sum(a = 0, b = 0) {
  return a + b;
}

// Rest and Spread
function print(a, b) {
  console.log(a, b);
}
print(...[1, 2, 3]);

const a1 = [1, 2];
const b = [0, ...a1, 3];
console.log(b);

function total(a, ...rest) {
  console.log(a, rest);
  console.log(a, ...rest);
  console.log([a, ...rest]);
}
total(1, 2, 3, 4, 5);

// Destructuring
// Allows to bind values to variables using pattern matching
let [start, end] = [0, 5];
console.log(start, end);

function fn() {
  return [1, 2, 3];
}
const [a2, b2, c2] = fn();
console.log(a2, b2, c2);

function returnObject() {
  return {
    a3: 1,
    b3: 2,
    c3: 3,
  };
}
const { a3: x, b3: y, c3: z } = returnObject();
console.log(x, y, z);
