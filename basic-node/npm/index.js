const bcrypt = require("bcrypt");

const moment = require("moment");

const sharp = require("sharp");

const password = "123456";

const salt = 12;

bcrypt.hash(password, salt, function (err, hash) {
  console.log("hash", hash);

  bcrypt.compare(password, hash, function (err, response) {
    console.log("response", response);
  });
});

const now = moment();

console.log("now", now);

console.log("now", now.toString());

console.log("now", now.format("MM/DD/YYYY HH:MM A"));

sharp("original.png").resize(80).toFile("resize_80.png");
