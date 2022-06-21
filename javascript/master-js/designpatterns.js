// 1: Namespace Pattern
//=====================
// Polluted Global Object
// With two constructer one variable and one object

function Car() {}

function BMW() {}

let engines = 1;

const features = {
  seats: 6,
  airbags: 6,
};

var CRAFTFACTORY = CRAFTFACTORY || {};
CRAFTFACTORY.Car = function () {};
CRAFTFACTORY.BMW = function () {};
CRAFTFACTORY.engines = 1;
CRAFTFACTORY.features = {
  seats: 6,
  airbags: 6,
};

// 2: Module Pattern
//==================

// Function and Object literal revision
const basicServerConfig = {
  environment: "Production",
  startupParams: {
    cacheTimeout: 30,
    locale: "en_US",
  },
  init: function () {
    console.log("Initialize the server");
  },
  updateStartup: function (params) {
    this.startupParams = params;
  },
};

basicServerConfig.init();
basicServerConfig.updateStartup({ cacheTimeout: 60, locale: "en_UK" });
console.log(basicServerConfig.startupParams);

// Module Pattern - step 1 create module
const basicServerConfigModule = (function () {
  let environment = "Production";
  const startupParams = {
    cachedTimeout: 30,
    locale: "en_US",
  };
  return {
    init: function () {
      console.log("Initialoize the Server module");
    },
    updateStartup: function (params) {
      this.startupParams = params;
      console.log(this.startupParams.cachedTimeout);
      console.log(this.startupParams.locale);
    },
  };
})();

basicServerConfigModule.init();
basicServerConfigModule.updateStartup({ cachedTimeout: 70, locale: "fa_IR" });

// Module Pattern - step 2 add namespace to module
var SERVER = SERVER || {};
SERVER.basicServerConfigModule = (function () {
  let environment = "Production";
  const startupParams = {
    cachedTimeout: 30,
    locale: "en_US",
  };
  return {
    init: function () {
      console.log("Initialoize the Server module with namespace");
    },
    updateStartup: function (params) {
      this.startupParams = params;
      console.log(this.startupParams.cachedTimeout);
      console.log(this.startupParams.locale);
    },
  };
})();
SERVER.basicServerConfigModule.init();
SERVER.basicServerConfigModule.updateStartup({
  cachedTimeout: 55,
  locale: "en-UK",
});

// the problem with module pattern
const modulePatternOriginal = (function () {
  let privateOne = 1;
  function privateFn() {
    console.log("Private function is called");
  }

  return {
    publicTwo: 2,
    publicFn: function () {
      // to call another public function
      // You must use module name
      modulePatternOriginal.publicFnTwo();
    },
    publicFnTwo: function () {
      privateFn();
    },
  };
})();
modulePatternOriginal.publicFn();

// Revealing Module Pattern RMP
const revealingExample = (function () {
  let privateOne = 1;

  function privateFn() {
    console.log("RMP Private function is called");
  }

  let publicTwo = 2;

  function publicFn() {
    publicFnTwo();
  }

  function publicFnTwo() {
    privateFn();
  }

  function getCurrentState() {
    return 2;
  }

  return {
    count: publicTwo,
    setup: publicFn,
    increaseCount: publicFnTwo,
    current: getCurrentState,
  };
})();

revealingExample.setup();
console.log(revealingExample.current());

// Modern Module Patterns
// 1- CommonJS Modules
// 2- AMD Asynchronous Module Definition

// |
// |
// V

// ES6 Modules

// Factory Pattern
//================

function CarFactory() {}

CarFactory.prototype.info = function () {
  console.log(
    `This car has ${this.doors} doors and a ${this.engine_capacity} liter engine`
  );
};

CarFactory.make = function (type) {
  let car;
  // Inherit from CarFactory
  // CarFactory[type].prototype = new CarFactory();
  // So All objects can use info method
  CarFactory[type].prototype = Object.create(CarFactory.prototype);
  car = new CarFactory[type]();
  return car;
};

CarFactory.Compact = function () {
  this.doors = 4;
  this.engine_capacity = 2;
};

CarFactory.SUV = function () {
  this.doors = 4;
  this.engine_capacity = 6;
};

CarFactory.Sedan = function () {
  this.doors = 2;
  this.engine_capacity = 2;
};

// Use CarFactory
const golf = CarFactory.make("Compact");
const vento = CarFactory.make("Sedan");
const touareg = CarFactory.make("SUV");

golf.info();
vento.info();
touareg.info();

// Employee Factor

function EmployeeFactory() {}

EmployeeFactory.prototype.profile = function () {
  return `This Employee has ${this.salary} salary and rank: ${this.rank}`;
};

EmployeeFactory.make = function (type) {
  let employee;
  //EmployeeFactory[type].prototype = new EmployeeFactory();
  EmployeeFactory[type].prototype = Object.create(EmployeeFactory.prototype);
  employee = new EmployeeFactory[type]();
  return employee;
};

EmployeeFactory.Manager = function () {
  this.salary = 2000;
  this.rank = 18;
};

EmployeeFactory.TeamLead = function () {
  this.salary = 1500;
  this.rank = 16;
};

EmployeeFactory.Developer = function () {
  this.salary = 1200;
  this.rank = 12;
};

const manager = EmployeeFactory.make("Manager");
const teamlead = EmployeeFactory.make("TeamLead");
const developer = EmployeeFactory.make("Developer");

console.log(manager.profile());
console.log(teamlead.profile());
console.log(developer.profile());

// Observer Pattern
// ================

// Subject
function Subject() {
  this.observer_list = [];
}

Subject.prototype.add_observer = function (obj) {
  console.log("Added observer");
  this.observer_list.push(obj);
};

Subject.prototype.remove_observer = function (obj) {
  for (let i = 0; i < this.observer_list.length; i++) {
    if (this.observer_list[i] === obj) {
      this.observer_list.splice(i, 1);
      console.log("Removed observer");
    }
  }
};

Subject.prototype.notify = function () {
  let arg = Array.prototype.slice.call(arguments, 0);
  for (let i = 0; i < this.observer_list.length; i++) {
    this.observer_list[i].update(arg);
  }
};

// Observers
const TweetUpdater = {
  update: function () {
    console.log(`Update Tweet - `, arguments);
  },
};

const TweetFollower = {
  update: function () {
    console.log(`Following this tweet - `, arguments);
  },
};

// Application
function Tweeter() {
  let subject = new Subject();

  this.addObserver = function (observer) {
    subject.add_observer(observer);
  };

  this.removeObserver = function (observer) {
    subject.remove_observer(observer);
  };

  this.fetchTweet = function () {
    const tweet = {
      tweet: "This is a nice observer",
    };

    subject.notify(tweet);
  };
}

// Using application
const tweetApp = new Tweeter();

tweetApp.addObserver(TweetUpdater);
tweetApp.addObserver(TweetFollower);
tweetApp.fetchTweet();
tweetApp.removeObserver(TweetUpdater);
tweetApp.removeObserver(TweetFollower);


