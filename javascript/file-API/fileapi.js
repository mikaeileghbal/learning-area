const file = document.getElementById("file");
const text = document.getElementById("text");

file.addEventListener("change", displayFile);

function displayFile() {
  const [fileName] = this.files;

  console.log(fileName);
  console.log(this.files.length);

  text.textContent = "";
  if (fileName.type === "text/plain") readTextFile(fileName);
  if (fileName.type.startsWith("image")) readAsImage(fileName);
}

function readAsImage(fileName) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const img = document.createElement("img");
    img.src = reader.result;
    text.appendChild(img);
  });

  reader.addEventListener("progress", (e) => {
    console.log("loading...", e.loaded, e.total);
    const percent = (e.loaded / e.total) * 100;
    console.log(`Progress: ${Math.round(percent)}`);
  });

  reader.readAsDataURL(fileName);
}

function readTextFile(fileName) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    text.textContent = reader.result;
  });
  reader.readAsText(fileName);
}

// Drag and Drop file
text.addEventListener("dragenter", dragenter, false);
text.addEventListener("dragover", dragover, false);
text.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}
function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  console.log(files);
}
