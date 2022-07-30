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
        callBack(reader.result, file);
      });
      reader.readAsDataURL(file);
    } else {
      console.log("Please provide image files...");
    }
  }

  function appendImage(image, file) {
    console.log(image);
    const img = document.createElement("img");
    img.src = image;
    img.file = file;
    img.classList.add("file");
    preview.appendChild(img);
  }
}

// Upload file

document.getElementById("upload").addEventListener("click", sendFiles);

function sendFiles() {
  console.log("clicked");
  const imgs = document.querySelectorAll(".file");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}

function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener(
    "progress",
    function (e) {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false
  );

  xhr.upload.addEventListener(
    "load",
    function (e) {
      self.ctrl.update(100);
      const canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false
  );
  xhr.open(
    "POST",
    "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php"
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = function (evt) {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}

function createThrobber(img) {
  const throbberWidth = 64;
  const throbberHeight = 6;
  const throbber = document.createElement("canvas");
  throbber.classList.add("upload-progress");
  throbber.setAttribute("width", throbberWidth);
  throbber.setAttribute("height", throbberHeight);
  img.parentNode.appendChild(throbber);
  throbber.ctx = throbber.getContext("2d");
  throbber.ctx.fillStyle = "orange";
  throbber.update = function (percent) {
    throbber.ctx.fillRect(
      0,
      0,
      (throbberWidth * percent) / 100,
      throbberHeight
    );
    if (percent === 100) {
      throbber.ctx.fillStyle = "green";
    }
  };
  throbber.update(0);
  return throbber;
}
