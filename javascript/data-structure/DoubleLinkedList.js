function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DoubleLinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.displayReverse = displayReverse;
  this.findLast = findLast;
  this.find = find;
  this.remove = remove;
}

function find(item) {
  let current = this.head;
  while (current.element !== item) {
    current = current.next;
  }
  return current;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item) {
  let current = this.find(item);
  if (current.next !== null) {
    current.previous.next = current.next;
    current.next.previous = current.previous;
    current.next = null;
    current.previous = null;
  }
}

function findLast() {
  let current = this.head;
  while (current.next !== null) {
    current = current.netx;
  }
  return current;
}

function displayReverse() {
  let current = this.findLast();
  while (current.previous !== null) {
    console.log(current.element);
    current = current.previous;
  }
}

function display() {
  let current = this.head.next;
  while (current !== null) {
    console.log(current.element);
    current = current.next;
  }
}

// test application
var cities = new DoubleLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
