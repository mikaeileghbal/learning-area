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
