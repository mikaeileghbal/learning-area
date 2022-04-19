const http = require("http");
const url = require("url");

let items = ["test", "test2"];

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
  // req.setEncoding("utf8");

  // 4:
  // req.on("data", (chunk) => {
  //   console.log("Parsed", chunk);
  // });
  // req.on("end", () => {
  //   console.log("Done parsing ");
  //   res.end();
  // });

  // 5:

  switch (req.method) {
    case "POST":
      let item = "";
      req.setEncoding("utf8");
      req.on("data", (chunk) => {
        item += chunk;
      });

      req.on("end", () => {
        console.log(item);
        items.push(item);
        console.log(items);
        res.end("Ok\n");
      });
      break;
    case "GET":
      // items.forEach((item, i) => {
      //   res.write(`${i}) ${item}\n`);
      // });
      // res.end();
      let body = items
        .map((item, i) => {
          return `${i}) ${item}`;
        })
        .join("\n");
      res.setHeader("Content-Length", Buffer.byteLength(body));
      res.setHeader("Content-Type", "text/plain; charset='utf8'");
      res.end(body);
      break;
    case "DELETE":
      let path = url.parse(req.url).pathname;
      let itemIndex = parseInt(path.slice(1), 10);
      if (NaN(itemIndex)) {
        res.statusCode = 400;
        res.end("Invalid item id");
      } else if (!items[itemIndex]) {
        res.statusCode = 404;
        res.end("Item not found");
      } else {
        items.splice(itemIndex, 1);
        res.end("Ok\n");
      }
      break;
  }
});

server.listen(3000);
