let fileHandle;

async function checkFile() {
  [fileHandle] = await window.showOpenFilePicker();
  console.log(fileHandle);
}

checkFile().then(console.log("Done"));
