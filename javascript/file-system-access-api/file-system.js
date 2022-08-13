let fileHandle;

const btnOpen = document.querySelector(".open");

btnOpen.addEventListener("click", checkFile);
textcontent = document.getElementById("content");

async function checkFile() {
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    console.log("file opened");
  } else if (fileHandle.kind === "directory") {
    console.log("directory opened");
  }

  const file = await fileHandle.getFile();
  const content = await file.text();

  textcontent.value = content;
}

async function getNewFileHandle() {
  const options = {
    types: [
      {
        description: "Text Files",
        accept: {
          "text/plain": [".text"],
        },
      },
    ],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}

async function writeFile(fileHandle, content) {
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
}

const btnSave = document.getElementById("save");
btnSave.addEventListener("click", async () => {
  const handle = await getNewFileHandle();
  await writeFile(handle, textcontent.value);
});
