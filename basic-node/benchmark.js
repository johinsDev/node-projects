console.time("all");
let suma = 600000;

console.time("bucle");
for (let i = 0; i < suma; i++) {
  //console.log(i)
}
console.log(suma);
console.timeEnd("bucle");

console.time("bucle2");
let suma2 = suma * 2;
console.log(suma2);
for (let x = 0; x < suma2; x++) {
  //console.log(x)
}
console.timeEnd("bucle2");
console.log("async");
asincrona().then(() => {
  console.timeEnd("async");
});
console.timeEnd("all");

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
