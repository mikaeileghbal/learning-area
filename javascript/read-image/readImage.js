const images = ["car-1.jpg", "car-2.jpg", "car-3.jpg"];

const change = document.getElementById("change");
const image = document.getElementById("image");

console.log(image);
change.addEventListener("click", changeImage);

function changeImage(e) {
  const url = `../../images/${images[1]}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => showImage(blob, image))
    .catch((err) => console.log(`Fetch Error: ${err.message}`));
}

function showImage(blob, image) {
  const objectURL = URL.createObjectURL(blob);
  console.log(objectURL);
  image.src = objectURL;
  image.alt = "car";
}

const inputFile = document.getElementById("inputFile");

inputFile.addEventListener("change", getImageFile);

function getImageFile() {
  const [imageFile] = inputFile.files;

  if (imageFile) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      image.src = reader.result;
    });
    reader.readAsDataURL(imageFile);
  }
}

// Image preview

const multiFile = document.getElementById("multiFile");

multiFile.addEventListener("change", previewFiles);

function previewFiles() {
  const preview = document.getElementById("preview");
  const files = multiFile.files;

  if (files) {
    [].forEach.call(files, (file) => readAndPreview(file, appendImage));
  }

  function readAndPreview(file, callBack) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        callBack(reader.result);
      });

      reader.readAsDataURL(file);
    } else {
      console.log("Please provide image files...");
    }
  }

  function appendImage(image) {
    console.log(image);
    const img = document.createElement("img");
    img.src = image;
    preview.appendChild(img);
  }
}
