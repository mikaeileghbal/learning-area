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
