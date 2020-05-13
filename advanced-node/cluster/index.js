const cluster = require("cluster");

const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const express = require("express");

  const app = express();

  const crypto = require("crypto");

  function doWork(duration) {
    const start = Date.now();

    while (Date.now() - start < duration) {}
  }

  app.get("/", async (req, res) => {
    crypto.pbkdf2("hehe", "has dele", 100000, 512, "sha512", () => {
      res.send("Hi there!");
    });
  });

  app.get("/user", (req, res) => {
    res.send("Hi user!");
  });

  app.listen(3000);
}
