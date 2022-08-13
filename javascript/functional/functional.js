const pay = document.getElementById("pay");

// const billTheUsers = (function (clicked) {
//   return () => {
//     if (!clicked) {
//       clicked = true;
//       console.log("Billing the users...");
//     } else {
//       console.log("Wait for billing process to finish...");
//     }
//   };
// })(false);

// pay.addEventListener("click", billTheUsers);

const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

let billOnce = once(billTheUSerOnce);

pay.addEventListener("click", (e) => billOnce("Mikaeil"));

function billTheUSerOnce(name) {
  console.log("billing the users...", name);
  setTimeout(() => {
    billOnce = once(billTheUSerOnce);
  }, 4000);
}

// Once and After
const onceAndAfter = (f, g = () => {}) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
      g(...args);
    }
  };
};

function doFirst() {
  console.log("First call this");
}

function doSecond() {
  console.log("Then call this");
}

const firstAndThen = onceAndAfter(doFirst, doSecond);

pay.addEventListener("click", firstAndThen);

// =========
// functions
//==========

function ShowItself(identity) {
  this.identity = identity;

  // 1
  that = this;
  setTimeout(function () {
    console.log(that.identity);
  }, 1000);

  // 2
  setTimeout(
    function () {
      console.log(this.identity);
    }.bind(this),
    1000
  );

  // 3
  setTimeout(() => {
    console.log(this.identity);
  }, 1000);
}

const x = new ShowItself("functionlal");

function getAjax() {
  let ajax = null;
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    ajax = new ActiveXObject();
  } else {
    throw new Error("No ajax supported!");
  }
  return ajax;
}

// Everytime that the getAjax is called
// All the checks will be run again
const ajax = getAjax();
const ajacs2 = getAjax();

(function initializeGetAjax() {
  let myAjax = null;
  if (window.XMLHttpRequest) {
    myAjax = function () {
      return new XMLHttpRequest();
    };
  } else if (window.ActiveXObject) {
    myAjax = function () {
      return new ActiveXObject();
    };
  } else {
    myAjax = function () {
      throw new Error("No ajax supported!");
    };
  }
  window.getAjax = myAjax;
})();

const newAjax = getAjax();

console.log(newAjax);

const DEVELOPMENT = true;

const myLog = DEVELOPMENT
  ? (sometext) => console.log(sometext)
  : (sometext) => {};

const myCounter = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

const arr = [1, 2, 3];

const loging = (...arr) => (console.log(...arr), console.log("ok"));

loging(1, 2, 3);

const person = {
  name: "mike",
};

function printName() {
  console.log(this.name);
}

const fn = printName.bind(person);
fn();

Function.prototype.myBind = function (obj) {
  let func = this;
  return function () {
    func.apply(obj);
  };
};

const fn2 = printName.myBind(person);
console.log("name: ", fn2());

// Pure functions

const cache = [];

function fibonacci(n) {
  if (cache[n] === undefined) {
    if (n <= 1) {
      cache[n] = n;
    } else {
      cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
    }
  }
  return cache[n];
}

// injecting impure functions

function randowmLetterFunc() {}

const getRandomFileName = (fileExtention = "", randomLetterFunc) => {
  const NAME_LENGTH = 12;
  let namePart = new Array(NAME_LENGTH);
  for (let i = 0; i < NAME_LENGTH; i++) {
    namePart[i] = randomLetterFunc();
  }
  return namePart.join("") + fileExtention;
};
