const undetermindValue = "Elephant";

if (isNaN(parseInt(undetermindValue, 2))) {
  console.log("handle not a number case");
} else {
  console.log("handle number case");
}

const helloWorld = "Hello world";
console.log("Words: ", helloWorld.split(" "));
console.log("chars: ", helloWorld.split(""));
console.log(helloWorld.includes("X"));

const oBooleanTrue = new Boolean(true);
console.log(oBooleanTrue.valueOf());

const arr = [];
for (let i = 0; i < 3; arr[i++] = 100);
console.log(arr);

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
console.log(NaN == NaN);

let fortyTwo = 42;
console.log(fortyTwo.toString()[1]);

let x = null;
if (!x && typeof x === "object") {
  console.log("100% null");
}

console.log(typeof typeof 1);

// function literal
function add(a, b) {
  return a + b;
}

// function expression
const Add = function (a, b) {
  return a + b;
};

// IIF
(function sayHello() {
  console.log("hello");
})();

// pass function to another function
function changeCase(val) {
  return val.toUpperCase();
}

function demFunction(a, passedFunction) {
  console.log(passedFunction(a));
}

demFunction("smallcase", changeCase);

var scope_name = "global";

function showScopeName() {
  var scope_name = "local";
  console.log(scope_name);
}

console.log(scope_name);
showScopeName();
console.log(scope_name);

(function foo(b) {
  let a = 2;
  console.log(a + b);
})(3);

let sayMoo;
const condition = false;
if (condition) {
  sayMoo = function () {
    console.log("TrueMoo");
  };
} else {
  sayMoo = function () {
    console.log("FalseMoo");
  };
}
sayMoo();

// argumnets

function sum() {
  let total = 0;
  let args = Array.prototype.slice.call(arguments);
  console.log(args);
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));
