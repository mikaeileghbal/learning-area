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
