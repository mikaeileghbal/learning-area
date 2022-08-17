function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  let priority = this.dataStore[0].code;
  let index = 0;
  for (let i = 1; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < priority) {
      priority = this.dataStore[i].code;
      index = i;
    }
  }

  return this.dataStore.splice(index, 1)[0];
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  let str = "";
  for (let i = 0; i < this.dataStore.length; i++) {
    str += this.dataStore[i].name + " - " + this.dataStore[i].code + "\n";
  }
  return str;
}

function empty() {
  return this.dataStore.length === 0;
}

function count() {
  return this.dataStore.length;
}

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());

let seen = ed.dequeue();

console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
