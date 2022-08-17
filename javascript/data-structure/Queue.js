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
  return this.dataStore.shift();
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
    str += this.dataStore[i] + "\n";
  }
  return str;
}

function empty() {
  return this.dataStore.length === 0;
}

function count() {
  return this.dataStore.length;
}

let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());

// Dance Application

const persons = [
  "F Allison McMillan",
  "M Frank Opitz",
  "M Mason McMillan",
  "M Clayton Ruff",
  "F Cheryl Ferenback",
];

function Dancer(gender, name) {
  this.gender = gender;
  this.name = name;

  this.isFemale = function () {
    return this.gender === "F";
  };

  this.isMale = function () {
    return this.gender === "M";
  };
}

function getDancers(males, females) {
  for (const person of persons) {
    const name = person.split(" ");
    let dancer = new Dancer(name[0], name[1]);

    if (dancer.isFemale()) females.enqueue(dancer);
    if (dancer.isMale()) males.enqueue(dancer);
  }
}

let males = new Queue();
let females = new Queue();
getDancers(males, females);

function dance(males, females) {
  console.log("The dance partners are: \n");
  while (!males.empty() && !females.empty()) {
    let person = females.dequeue();
    console.log("Female dancer is: ", person.name);
    person = males.dequeue();
    console.log("Male dancer is: ", person.name);
  }
}

dance(males, females);
if (males.count() > 0)
  console.log("There are male dancers waiting: ", males.count());

if (females.count() > 0)
  console.log("There are female dancers waiting: ", females.count());
