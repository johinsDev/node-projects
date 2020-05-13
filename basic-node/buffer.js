// BUFFER SON DATOS EN MEMTORIA

// numero de bytes
// let burffer = Buffer.alloc(1);

// let buffer = Buffer.from([1, 2, 5]);

let buffer = Buffer.from("Hola mundo");

console.log(buffer.toString());

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log("abc", abc.toString());
