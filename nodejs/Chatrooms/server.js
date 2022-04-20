const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const cache = {};

function send404(response) {
  response.writeHead(404, { Content_Type: "text/plain" });
  response.write("Error 404: request not found");
  response.end();
}

function sendFile(response, filePath, fileContent) {
  response.writeHead(200, {
    "content-type": mime.getType(path.basename(filePath)),
  });
  response.end(fileContent);
}

function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, (exists) => {
      if (exists) {
        fs.readFile(absPath, (error, data) => {
          if (error) {
            send404(response);
          } else {
            cache[absPath];
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

const server = http.createServer((request, response) => {
  let filePath = false;
  if (request.url === "/") {
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }

  let absPath = "./" + filePath;
  serveStatic(response, cache, absPath);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
