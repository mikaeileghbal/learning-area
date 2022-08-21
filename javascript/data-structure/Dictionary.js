function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showAll2 = showAll2;
  this.showAll3 = showAll3;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  //for (let key in this.dataStore) {
  for (let key of Object.keys(this.dataStore).sort()) {
    console.log(`${key}: ${this.dataStore[key]}`);
  }
}

function showAll2() {
  for (let [index, value] of Object.entries(this.dataStore)) {
    console.log(`${index}: ${value}`);
  }
}

function showAll3() {
  for (let value of Object.values(this.dataStore).sort()) {
    console.log("value: ", value);
  }
}

function count() {
  const keys = Object.keys(this.dataStore);
  return keys.length;
}

function clear() {
  for (let key of Object.keys(this.dataStore)) {
    delete this.dataStore[key];
  }
}

// test programm
let pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
console.log(pbook.count());
pbook.clear();
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
