class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }

  first() {}
  second() {}
  static third() {}
}

new Example();

// Derived class shoud either do not have constructor
// Or return an Object

class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class AnotherGood extends Base {
  constructor() {
    super();
  }
}
// Reference Error
class Bad extends Base {
  constructor() {}
}

// 'this' in the function
// depends on how the function is called

const obj = { a: 3 };

var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent of
  // how the function is called
}

whatsThis(); // 'Global' as this in the funciton is not set,
// so it defaults to the global/window object in non-strict mode
// and 'undefined' in strict mode

whatsThis.call(obj); // 'Custom' as this in the function is set to 'obj'

whatsThis.apply(obj); // 'Custom' as this in the funcion is set to 'obj'

function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

console.log(add.call(o, 5, 7));

console.log(add.apply(o, [10, 20]));

// passing non object value
// to call and apply in non - strict mode
function bar() {
  console.log(Object.prototype.toString(this));
}

bar.call(7);
bar.apply("foo");
bar.call(undefined);
bar.call(null);

const prop = "global";
const objectWithMethod = {
  prop: 3,
  bar() {
    const x = () => this.prop;
    return x;
  },
};

console.log(objectWithMethod.bar()());

const fn = objectWithMethod.bar;

console.log(fn()());

const o2 = {
  f() {
    return this.a + this.b;
  },
};

const p = Object.create(o2);

(p.a = 1), (p.b = 4);

console.log(p.f());

const objMath = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return this.a + this.b + this.c / 3;
  },
};

function sum() {
  return this.a + this.b + this.c;
}

Object.defineProperty(objMath, "sum", {
  configurable: true,
  enumerable: true,
  get: sum,
});

console.log(objMath.sum);

// this in class methods depends on
// how the method is called
class Car {
  constructor() {
    this.sayBye = this.sayBye.bind(this);
  }

  sayHi() {
    console.log(`Hello from ${this.name}`);
  }

  sayBye() {
    console.log(`Bye from ${this.name}`);
  }

  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();

bird.sayBye = car.sayBye;
bird.sayBye();
