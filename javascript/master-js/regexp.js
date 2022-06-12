const log = console.log;
// Two ways of creating regular expression pattern
const pattern1 = /test/;
const pattern2 = new RegExp("test");

// Using flags
const pattern3 = /test/gi;
const pattern4 = new RegExp("test", "gi");

const pattern5 = /orange/;
log(pattern5.test("orange juice"));

const patternIgnoreCase = /orange/i;
log(patternIgnoreCase.test("oRange"));
log(patternIgnoreCase.test("ORANGE"));

// Exact match or simple match
if ("orange" === "orange") {
  log("tru");
}

// Class of characters
const pattern6 = /[abc]/;
log(pattern6.test("a"));
log(pattern6.test("b"));
log(pattern6.test("c"));
log(pattern6.test("d"));

// Anything but the pattern
const pattern7 = /[^abc]/;
log(pattern7.test("a"));
log(pattern7.test("d"));

// Range
const pattern8 = /[0-5]/;
log(pattern8.test(3));
log(pattern8.test(12345));
log(pattern8.test(9));
log(pattern8.test(6789));
log(pattern8.test(6729));

// exec() method
const stringToMatch = "A Toyota! Race fast, safe car! A Toyota!";
let regExAt = /toy/gi;
let matches = regExAt.exec(stringToMatch);
log(matches);

// String.match() method is same as RegExp.exec()
matches = stringToMatch.match(regExAt);
log(matches);

// String.replcae()
regExAt = /blue/gi;
const stringToReplce = "Blue is your favorite color ? blue right?";
log(stringToReplce.replace(regExAt, "Red"));

log(
  stringToReplce.replace(regExAt, function (matchingText) {
    return "- Red -";
  })
);

const htmlString = "<div><span>item1</span><span>item2</span>";
const regExAtSpan = /span/gi;
const newHtmlString = htmlString.replace(regExAtSpan, function (matchingText) {
  return "p";
});
log(newHtmlString);

// String.split()
const strColor = "sun,moon,stars";
const reComma = /\,/;
log(strColor.split(reComma));
log(strColor.split(","));

const strToMatch = "wooden bat, smelly Cat,a fat cat";
const reMatch = /[bcf]at/gi;
const matchedStrs = strToMatch.match(reMatch);
log(matchedStrs);

const strToMatch2 = "i1,i2,i3,i4,i5,i6,i7,i8,i9";
const reMatch2 = /i[0-5]/gi;
let matchedStrs2 = strToMatch2.match(reMatch2);
log(matchedStrs2);

const reMatch3 = /i[^0-5]/gi;
matchedStrs2 = strToMatch2.match(reMatch3);
log(matchedStrs2);

// \d Any digit character
// \w An alphanumeric character (word character)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A non-alphanumeric character
// \S A non-whitespace character
// . Any character except for newline

// Repeating patters

// ?: Either 0 or 1 occurrence (marks the occurrence as optional)
// *: 0 or more occurrences
// +: 1 or more occurrences
// {n}: Exactly n occurrences
// {n,m}: Occurrences between n and m
// {n,}: At least an n occurrence
// {,n}: 0 to n occurrences

log(/\bcat\b/.test("a cat tomcat"));

let matchObj = /\d+/.exec("There are 100 ways to do this");
log(matchObj);
log(matchObj.index);

// Backreference
const reBack = /^([XYZ])a\1/;
const strBack = "YaY";
log(reBack.test(strBack));

const original = "1234 5678";
const reReverse = /(\d{4}) (\d{4})/;
console.log(original.replace(reReverse, "$2 $1"));

// Trim
function trim(str) {
  return (str || "").replace(/^\s+|\s+$/g, "");
}
log("--" + trim("    test     ") + "--");

function removeExtraSpace(str) {
  return (str || "").replace(/\s+/g, " ");
}
log(removeExtraSpace("There are      a    lot    of spaces."));

// Arrays

const arr1 = new Array(1, 2, 3);
const arr2 = Array(1, 2, 3);
const arr3 = [1, 2, 3];
log(arr3);
// One argument is length of array
const arrLenght = Array(10);

const colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  log(color);
});

const newColors = colors.concat("yello", "brown");
log(newColors);
log(newColors.reverse());

function print(item) {
  log(item);
}
newColors.forEach(print);

// Maps
let founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
log(founders.size);
log(founders.get("tweeter"));
log(founders.has("yahoo"));

for (let [key, value] of founders) {
  log(`${key} founded by ${value}`);
}

const a = [];
a[5] = 5;

for (let i = 0; i < a.length; i++) {
  log(a[i]);
}

for (let x in a) {
  log(x);
}
