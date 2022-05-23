function asyncAdd(values) {
  return new Promise((callback) => {
    setTimeout(() => {
      let total = addValues(values);
      console.log(`Async total: ${total}`);
      callback(total);
    }, 500);
  });
}

function addValues(values) {
  return values.reduce((total, val) => total + val);
}

const values = [10, 20, 30, 40, 50];

let total = asyncAdd(values);

asyncAdd(values).then((total) => console.log(`Main total: ${total}`));

async function doTask() {
  let total = await asyncAdd(values);
  console.log(total);
}
doTask();
