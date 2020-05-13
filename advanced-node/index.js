process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");
const os = require("os");

const cpuCount = os.cpus().length;

const start = Date.now();

setTimeout(() => {
  console.log("RUNNING 2");
}, 1000);

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

console.log("RUNNING");

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", Date.now() - start);
});
