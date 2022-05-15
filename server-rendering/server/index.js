import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Menu } from "../src/Menu";
import path from "path";

const app = express();
app.use(express.static("./build"));

const PORT = process.env.port || 4000;

app.get("/*", (req, res) => {
  const app = ReactDOMServer.renderToString(<Menu />);
  const indexFile = path.resolve("./build/index.html");
  const fs = new FileReader();
  fs.readFile(indexFile, "utf8", (err, data) => {
    return res.send(
      data.replace('<div id="root"></div>'),
      `<div id="root">${app}</div>`
    );
  });
});

app.listen(PORT, () => [console.log(`Server is listening on port ${PORT}`)]);
