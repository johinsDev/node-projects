const os = require("os");

var SIZE = 1024;

var RAM = {
  kb(bytes) {
    return bytes / SIZE;
  },
  mb(bytes) {
    return this.kb(bytes) / SIZE;
  },
  gb(bytes) {
    return this.mb(bytes) / SIZE;
  },
};

console.log(RAM.mb(os.freemem()) + "mb");
console.log(RAM.kb(os.freemem()) + "kb");
console.log(RAM.gb(os.totalmem()) + "gb");
