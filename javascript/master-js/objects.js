const log = console.log;

const nothing = {};
const author = {
  firstname: "Douglas",
  lastname: "Crockford",
  book: {
    title: "The good parts",
    pages: "172",
  },
};

log(author["firstname"]);
log(author.lastname);
log(author.book.pages);

log(author.age || "Age not found!");

function Player1() {
  this.isAvailable = function () {
    log("Instance says : is hired");
  };
}

Player1.prototype.isAvailable = function () {
  log("Prototype says: is not hired");
};

Player1.prototype.canUseBeat = function () {
  return true;
};

log(Player1());

const player1 = new Player1();
log(player1.canUseBeat());

player1.isAvailable();

function globalAlias() {
  return this;
}
log(globalAlias());

// ==============================================
// All public and private members of an object
// This the way of javascript of creating classes
// ==============================================

function Player(name, sport, age, country) {
  this.constructor.noOfPlayers++;

  // Private Properties and Functions
  // Can only be viewd by privileged members
  let retirementAge = 40;
  let available = true;
  let playerAge = age ? age : 18;
  let playerName = name ? name : "Unknown";
  let playerSport = sport ? sport : "Unknown";

  function isAvailable() {
    return available && playerAge < retirementAge;
  }

  // Privileged Methods
  // Can be invoked from outside and can access private members
  // Can be replaced with public counterparts
  this.book = function () {
    if (!isAvailable) {
      this.available = false;
    } else {
      console.log("Player is not available");
    }
  };

  this.getSport = function () {
    return playerSport;
  };

  // Public Properties
  // Modifiable from anywhere
  this.batPreference = "Lefty";
  this.hasCelebGirlfriend = false;
  this.endorses = "Super Brand";
}

// Public Methods
// Can be read or written by anyone
// Can only access public and prototype properties
Player.prototype.switchHands = function () {
  this.batPreference = "Righty";
};

Player.prototype.dateCeleb = function () {
  this.hasCelebGirlfriend = true;
};

Player.prototype.fixedEyes = function () {
  this.wearGlasses = false;
};

// Prototype Properties
// Can be read or writter by anyone (or overriden)
Player.prototype.wearGlasses = true;

// Static Properties
// Anyone can read or write
Player.noOfPlayers = 0;

/**
 *
 * Test program
 *
 */

(function playerTest() {
  var cricketer = new Player("Vivian", "Cricket", 23, "England");
  var golfer = new Player("Pete", "Golf", 32, "USA");

  console.log("So far there are " + Player.noOfPlayers + " in the guild");

  // Both these functions share the common
  // 'Player.prototype.wearGlasses' variable
  //cricketer.fixedEyes();
  console.log(cricketer.wearGlasses);
  golfer.fixedEyes();
  console.log(cricketer.wearGlasses);

  // Public property can be updated
  cricketer.endorses = "Other Brand";

  // Both player's public method is now changed
  Player.prototype.fixedEyes = function () {
    this.wearGlasses = true;
  };

  // Only cricketer's function is changed
  cricketer.switchHands = function () {
    this.batPreference = "undecided";
  };
  console.log(cricketer.batPreference);
  cricketer.switchHands();
  console.log(cricketer.batPreference);

  golfer.switchHands();
  console.log(golfer.batPreference);
})();

// Inheritance with Prototype
function Person() {}
Person.prototype.cry = function () {
  console.log("Crying");
};

function Child() {}
Child.prototype = new Person();

const aChild = new Child();
console.log(aChild instanceof Child);
console.log(aChild instanceof Person);
console.log(aChild instanceof Object);

// Create Heirarchy

function EmployeeFactory() {
  this.name = "";
  this.dept = "None";
  this.salary = 0.0;
}

function Manager() {
  EmployeeFactory.call(this);
  this.reports = [];
}
//Manager.prototype = new Employee();
Manager.prototype = Object.create(EmployeeFactory.prototype);

function IndividualContributer() {
  EmployeeFactory.call(this);
  this.active_prokects = [];
}
//IndividualContributer.prototype = new Employee();
IndividualContributer.prototype = Object.create(EmployeeFactory.prototype);

function TeamLead() {
  Manager.call(this);
  this.dept = "Software";
  this.salary = 100000;
}
//TeamLead.prototype = new Manager();
TeamLead.prototype = Object.create(Manager.prototype);

function Engineer() {
  TeamLead.call(this);
  this.dept = "JavaScript";
  thgis.desktop_id = "8822";
  this.salary = 80000;
}
//Engineer.prototype = new TeamLead();
Engineer.prototype = Object.create(TeamLead.prototype);

const genericEmployee = new EmployeeFactory();
console.log(genericEmployee);

const karen = new Manager();
karen.name = "Karen";
karen.reports = [1, 2, 3];
console.log(karen);

const jason = new TeamLead();
jason.name = "Jason";
console.log(jason);

String.prototype.reverse = function () {
  return Array.prototype.reverse.apply(this.split("")).join("");
};

const str = "JavaScript";
console.log(str.reverse());

const worker = {
  firstname: "Michael",
  lastname: "Jordan",
  get fullname() {
    return this.firstname + " " + this.lastname;
  },
  set fullname(name) {
    let words = name.split(" ");
    this.firstname = words[0];
    this.lastname = words[1];
  },
};

worker.fullname = "Issac Newton";
console.log(worker.firstname);
console.log(worker.lastname);
console.log(worker.fullname);

const worker2 = {
  firstname: "Alert",
  lastname: "Einstein",
};
Object.defineProperty(worker2, "fullname", {
  get: function () {
    return this.firstname + " " + this.lastname;
  },
  set: function (name) {
    let words = name.split(" ");
    this.firstname = words[0];
    this.lastname = words[1];
  },
});

worker2.fullname = "Issac Newton";
console.log(worker2.firstname);
console.log(worker2.lastname);
console.log(worker2.fullname);
