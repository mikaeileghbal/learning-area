const http = require("http");
const parse = require("url").parse;
const join = require("path").join;
const fs = require("fs");

let root = __dirname;

const server = http.createServer((req, res) => {
  let url = parse(req.url);
  let path = join(__dirname, url.pathname);
  console.log(path);

  const stream = fs.createReadStream(path);
  // stream.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // stream.on("end", () => {
  //   res.end();
  // });
  // replace above code with pipe

  stream.pipe(res);
  stream.on("error", (error) => {
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
});

server.listen(3000);
