const { readFile } = require("fs");

function List() {
  this.listSiz = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = find;
  this.toString = toString;
  this.append = append;
  this.length = length;
  this.remove = remove;
  this.insert = insert;
  this.clear = clear;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.contains = contains;
  this.getElement = getElement;
}

function append(element) {
  this.dataStore[this.listSiz++] = element;
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return i;
  }
  return -1;
}

function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    this.listSiz--;
    return true;
  }
  return false;
}

function length() {
  return this.listSiz;
}

function toString() {
  return this.dataStore;
}

function insert(element, after) {
  let insertPos = this.find(element);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSiz = this.pos = 0;
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return true;
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.dataStore.length - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSiz) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

// Test program
let names = new List();
names.append("Cyntia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

names.front();
console.log(names.getElement());

names.next();
console.log(names.getElement());

names.next();
console.log(names.getElement());

console.log(names.currPos());
console.log(names.length());

if (names.currPos() < names.length()) {
  console.log("End of list");
}

for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
