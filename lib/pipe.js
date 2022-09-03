/**
 * In an Express application, the req (request) and res (response) for a request handler are streams.
 * A req is a readable stream of data whereas res is a writable stream of data.
 * Considering this for an HTTP request, we have to serve a really large file,
 * we can do so by using streams.
 */

import { createReadStream } from "fs";
import express from "express";
const app = express();
app.get("/", (req, res) => {
  var readStream = createReadStream("./data.txt");
  readStream.on("data", (data) => {
    res.write(data);
  });
  readStream.on("end", (data) => {
    res.status(200).send();
  });
});
app.listen(3000);

// A shorter implementation for the get method using piping is:
app.get("/", (req, res) => {
  readStream.pipe(res);
});

const { createWriteStream } = require("fs");

const writeStream = createWriteStream("./test_file.txt");

// what ever you will type on console,it will be pipe to writestream and content will be written to test_file.txt
process.stdin.pipe(writeStream);

