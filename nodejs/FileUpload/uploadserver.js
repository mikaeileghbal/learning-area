const http = require("http");
const formidable = require("formidable");

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      show(req, res);
      break;
    case "POST":
      upload(req, res);
      break;
  }
});

server.listen(3000);

function show(req, res) {
  const html = `
                <form method="post" action="/" enctype="multipart/form-data">
                  <p><input type="text" name="name" /></p>
                  <p><input type="file" name="file" /></p>
                  <p><input type="submit" value="Upload" /></p>
                </form>
              `;

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", Buffer.byteLength(html));
  res.end(html);
}

function upload(req, res) {
  if (!isFormData(req)) {
    res.statusCode = 400;
    res.end("Bad Request : executing multipart/form-data");
  }

  let form = new formidable.IncomingForm();

  // 1:
  // form.on("field", (field, value) => {
  //   console.log(field.value);
  // });

  // form.on("file", (name, file) => {
  //   console.log(name, file);
  // });

  // form.on("end", () => {
  //   console.log("Upload completed");
  // });

  // form.parse(req);

  // 2:
  form.parse(req, (err, fields, files) => {
    console.log(files);
    console.log(fields);
    console.log("upload completed");
  });

  form.on("progress", (bytesRecieved, bytesExpected) => {
    let percent = Math.floor((bytesRecieved / bytesExpected) * 100);
    console.log(percent);
  });
}

function isFormData(req) {
  const type = req.headers["Content_Type"] || "";
  return 0 == type.indexOf("multipart/form-data");
}
