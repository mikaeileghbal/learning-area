let environment = "Production";

const startupParams = {
  cacheTimeout: 30,
  locale: "fa-IR",
};

export const init = () =>
  function () {
    console.log("Initialize server module ES6");
  };

export const updateConfig = (params) => {
  startupParams = params;
  console.log(startupParams.cacheTimeout);
  console.log(startupParams.locale);
};

//

export function Employee() {
  let name = "Mikaeil";

  function setAge(age) {
    this.age = age;
  }

  this.introduce = function () {
    return `My name is ${name}`;
  };

  this.salay = 12000;
}

Employee.prototype.profile = function () {
  return this.introduce();
};

const emp = new Employee();
console.log(emp.profile());
