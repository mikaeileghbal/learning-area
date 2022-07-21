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

const onceAndAfter = (f, g = () => {}) => {
  let done = false;
  return (...args) => {
    if (!done) {
      f(...args);
    } else {
      g(...args);
    }
  };
};
