const fs = require("fs");

const path = require("path");

function readFile() {
  fs.readFile(path.join(__dirname, "archivo.txt"), function (err, data) {
    console.log(data.toString());
  });
}

function writeFile() {
  fs.writeFile(
    path.join(__dirname, "archivo.txt"),
    "More content",
    function () {
      console.log("TERMINE DE ESCRIBIR");
    }
  );
}

function deleteFile() {
  fs.unlink(path.join(__dirname, "archivo.txt"), function () {
    console.log("TERMINE DE BORRAR");
  });
}

// deleteFile();

writeFile();

// readFile();
