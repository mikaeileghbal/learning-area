function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, after) {
  let newNode = new Node(newElement);
  let current = this.find(after);
  newNode.next = current.next;
  current.next = newNode;
}

function findPrevious(item) {
  let current = this.head;
  while (current.next !== null && current.next.element !== item) {
    current = current.next;
  }
  return current;
}

function remove(item) {
  let previous = this.findPrevious(item);
  if (previous.next !== null) {
    previous.next = previous.next.next;
  }
}

function display() {
  let current = this.head.next;
  if (current === null) {
    console.log("List is Empty!");
    return;
  }
  while (current !== null) {
    console.log(current.element);
    current = current.next;
  }
}

let cities = new LinkedList();

cities.insert("Conway", "head");
cities.insert("Russville", "Conway");
cities.insert("Alma", "Russville");
cities.display();

cities.remove("Russville");
cities.display();
cities.remove("Alma");
cities.display();
cities.remove("Conway");
cities.display();
