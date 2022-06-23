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

const firstname = "Albert";
const lastname = "Einstein";
const person = {
  firstname: firstname,
  lastname: lastname,
  getName: function () {
    return this.firstname;
  },
};
const personES6 = {
  firstname,
  lastname,
  getName() {
    return this.firstname;
  },
};

console.log(person.getName());
console.log(personES6.getName());

// Tagged Template String

function emmy(key, ...values) {
  console.log(key);
  console.log(values);
}

let category = "Best Movie";
let movie = "Es6";
emmy`And the award for ${category} goes to ${movie}`;

function priceFilter(s, ...v) {
  return s[0] + (v[0] + 5);
}
let default_discount = 20;
let greeting = priceFilter`Your purchase has a discount of ${default_discount} percent`;
console.log(greeting);

// map
let m = new Map([
  [1, "Albert"],
  [2, "Douglas"],
  [3, "Cliver"],
]);

for (let a of m.entries()) {
  console.log(a);
}

for (let a of m.keys()) {
  console.log(a);
}

for (let a of m.values()) {
  console.log(a);
}

// Iterator
const myArray = [1, 2, 3];
const iterator = myArray[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const days = ["Sunday", "Monday", "Tuesday"];

// Keys
for (let day in days) {
  console.log(day);
}
// Values
for (let day of days) {
  console.log(day);
}

function CustomStr(str) {
  this.str = str;
}
CustomStr.prototype.add = function (s) {
  return s.map((a) => {
    return this.str + a;
  });
};
