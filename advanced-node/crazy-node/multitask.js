const crypto = require("crypto");
const https = require("https");
const fs = require("fs");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("Request: ", Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("hehe", "has dele", 100000, 512, "sha512", () => {
    console.log("Hash: ", Date.now() - start);
  });
}

doRequest();

fs.readFile(__filename, "utf8", () => {
  console.log("FS:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
