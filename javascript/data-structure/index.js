const sentence = "the quick brown fox jumped over the lazy dog";
const words = sentence.split(" ");

console.log(words);

words.forEach((word) => console.log(word));

const names = ["David", "Raymond", "Mike"];
console.log(names.indexOf("Mike"));

// creating array from existing arrays

const cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
const dmpDept = ["Raymond", "Cynthia", "Bryan"];

dmpDept.reverse();
console.log("reverse: ", dmpDept);

const itDiv = cisDept.concat(dmpDept);

console.log(cisDept);
console.table(itDiv);

const subDiv = cisDept.splice(2, 2, "Michael", "Esmaeil");

console.log(cisDept);
console.log(subDiv);

const nums = [1, 2, 3, 7, 8, 9];
const newNums = [4, 5, 6];
nums.splice(3, 0, ...newNums);
console.log(nums);

// arrays in objects
function WeekTemp() {
  this.dataStore = [];

  this.add = function (temp) {
    this.dataStore.push(temp);
  };

  this.average = function () {
    console.log(this.dataStore);
    let total = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  };
}

const week = new WeekTemp();
week.add(52);
week.add(51);
week.add(65);
week.add(61);
console.log(week.average());

function Letter() {
  this.letters = [];

  this.addLetter = function (letter) {
    this.letters.push(letter);
  };

  this.word = function () {
    let result = "";
    this.letters.forEach((letter) => {
      result += letter;
    });
    return result;
  };

  this.word2 = function () {
    return this.letters.join("");
  };
}

const lett = new Letter();
lett.addLetter("m");
lett.addLetter("i");
lett.addLetter("k");
lett.addLetter("e");

console.log(lett.word());
console.log(lett.word2());
