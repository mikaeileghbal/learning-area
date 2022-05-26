const undetermindValue = "Elephant";

if (isNaN(parseInt(undetermindValue, 2))) {
  console.log("handle not a number case");
} else {
  console.log("handle number case");
}

const helloWorld = "Hello world";
console.log("Words: ", helloWorld.split(" "));
console.log("chars: ", helloWorld.split(""));
console.log(helloWorld.includes("X"));

const oBooleanTrue = new Boolean(true);
console.log(oBooleanTrue.valueOf());

const arr = [];
for (let i = 0; i < 3; arr[i++] = 100);
console.log(arr);

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
console.log(NaN == NaN);

let fortyTwo = 42;
console.log(fortyTwo.toString()[1]);
