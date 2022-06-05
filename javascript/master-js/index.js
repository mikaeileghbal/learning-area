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

// inline function

function setActiveTab(activeTabHandler, tab) {
  // set active tab
  // call handler
  activeTabHandler();
}

setActiveTab(function () {
  console.log("Setting active tab");
}, 1);

setActiveTab(function handler() {
  console.log("Setting active tab named function");
}, 2);

// Invocation as a function
// If a function is not invoked as a method, constructor, or via apply() or call(),
// it's simply invoked as a function
// When a function is invoked with this pattern, this is bound to the global object.

// for methods this is bound to the object on invocation
const person = {
  name: "Albert Einstein",
  age: 66,
  greet: function () {
    console.log(this.name);
  },
};
person.greet();

// for constructor this is bound to newly created object

const Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function () {
  return this.name;
};

let albert = new Person("Albert Einstein");
console.log(albert.greet());

// Anonymous functions
// Usage :

// 1- while creating an object
const santa = {
  // anonymous function as method
  say: function () {
    console.log("santa ius here");
  },
};
santa.say();

// 2- while creating a list
const things = [
  // an array of anonymous functions
  function () {
    console.log("thing 1");
  },
  function () {
    console.log("thing 2");
  },
];
for (let i = 0; i < things.length; i++) {
  things[i]();
}

// 3- anonymous functions as a parameter to another function
function eventHandler(event) {
  event();
}
eventHandler(function () {
  console.log("event 1 fired");
});
eventHandler(function () {
  console.log("event 2 fierd");
});

// 4- anonymous functions in conditional logic
function draw(shape_name) {
  let shape;
  if (shape_name === "square") {
    shape = function () {
      console.log("Drawing square");
    };
  } else if (shape_name === "circle") {
    shape = function () {
      console.log("Drawing circle");
    };
  }
  shape();
}
draw("square");
draw("circle");

// CLOSURES
// closure is the scope created when a function is declared
// allows the funciton to access variables that are external to this function

let outer = "I am outer";
function outerFunction() {
  console.log(outer);
}
outerFunction();

let copy;

function outerFunction2() {
  let inner = "I am inner";

  function innerFunction() {
    console.log(outer);
    console.log(inner);
  }

  copy = innerFunction;
}
outerFunction2();
copy();

console.log(magic);
var magic = "magic";
console.log(magic);

// timers and callbacks
function delay(message) {
  setTimeout(function timerFunction() {
    console.log(message);
  }, 1000);
}
delay("Hello World!");

// private variables
function PrivateTest() {
  let points = 0;
  this.getPoints = function () {
    return points;
  };
  this.score = function () {
    points++;
  };
}
const private = new PrivateTest();
private.score();
console.log(private.points);
console.log(private.getPoints());

// Loops and closures
for (var i = 0; i < 6; i++) {
  setTimeout(function delay() {
    console.log(i);
  }, i * 100);
}

// Modules
const moduleName = function () {
  // private state
  // private functions
  return {
    // public state
    // public variables
  };
};

const superModule = (function () {
  const secret = "supersecretkey";
  const passcode = "nuke";

  function getSecret() {
    console.log(secret);
  }

  function getPassCode() {
    console.log(passcode);
  }

  return {
    getSecret,
    getPassCode,
  };
})();

superModule.getSecret();
superModule.getPassCode();
