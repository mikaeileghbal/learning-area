// Class
class MyClass {
  constructor() {}

  myField = "foo";

  myMethod() {}

  static myStaticField = "bar";

  static myStaticMethod() {}

  static {
    // Static initialization code
  }

  #myPrivateField = "bar";
}

// Function constructor
function MyClassF() {
  this.myField = "foo";
}

MyClassF.prototype.myMethod = function () {};

MyClassF.myStaticField = "bar";

MyClassF.myStaticMethod = function () {};

(function () {
  // Static initialization code
})();

instance1 = new MyClass();
// error
//instance2 = MyClass();
// both correct
instance3 = new MyClassF();
instance4 = MyClassF();
