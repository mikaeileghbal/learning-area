const http = require("http");

const server = http.createServer(function (req, res) {
  // res.write("Hello world");
  // res.end();
  // 1:
  //res.end("Hello World");
  // 2:
  // let body = "Hello world 2";
  // res.setHeader("Content-Length", body.length);
  // res.setHeader("Content-Type", "text/plain");
  // res.end(body);
  // 3:
  // let url = "http://google.com";
  // let body = `<p>Redirecting to <a href=${url}>${url}</a></p>`;
  // res.setHeader("Location", url);
  // res.setHeader("Content-Length", body.length);
  // res.setHeader("Contenct-type", "text/html");
  // res.statusCode = 320;
  // res.end(body);

  req.setEncoding("utf8");
  req.on("data", (chunk) => {
    console.log("Parsed", chunk);
  });

  req.on("end", () => {
    console.log("Done parsing ");
    res.end();
  });
});

server.listen(3000);
