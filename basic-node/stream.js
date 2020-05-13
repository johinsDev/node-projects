// // LOS STREAM SON COLECCIONES DE DATOS
// // PARA PASAR MUUCHA INFORMACIONDE UN LADO A OTRO
// // ES DECIR HACEN CHUNCK DE MUCHA INFORMACION Y PUEDE LEER o ESCRIBIR
// const fs = require("fs");

// let data = "";

// let readableStream = fs.createReadStream(__dirname + "/big.txt");

// readableStream.setEncoding("UTF8");

// readableStream.on("data", function (chunk) {
//   // console.log("chunk", chunk);
//   data += chunk;
//   // console.log("chunk", chunk.toString());
// });

// readableStream.on("end", function () {
//   console.log("data", data);
// });

// process.stdout.write("Hola");
// process.stdout.write("Que");
// process.stdout.write("Tal");

const stream = require("stream");
const fs = require("fs");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/big.txt");

readableStream.setEncoding("UTF8");

const util = require("util");

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();

  this.push(chunkMayus);

  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
