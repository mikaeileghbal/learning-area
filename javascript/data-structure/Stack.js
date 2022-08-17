function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[timeStamp.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

// Use case of stack
// Base conversion

function numberToBase(num, base) {
  console.log(base);
  let s = new Stack();
  console.log(s);
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";

  console.log(s.dataStore);
  while (s.length() > 0) {
    converted += s.pop();
  }
  console.log(converted);
  return converted;
}

console.log("Stack");
console.log(numberToBase(4, 2));

// Palindrom

function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word === rword) return true;
  return false;
}

console.log(isPalindrome("dad"));

// Factorial

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

function fact(n) {
  let s = new Stack();
  while (n > 1) s.push(n--);
  let product = 1;
  while (s.length() > 0) product *= s.pop();
  return product;
}

console.log(fact(5));
