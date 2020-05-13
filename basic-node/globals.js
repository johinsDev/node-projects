// SET TIMEOUT
// En el ejemplo, llamaria a la consola el "hello world" despues de 3 segundos.
let timeout = setTimeout(function () {
  console.log("Hello world");
}, 3000);

// SET INTERVAL
// Llama a otra función cada intervalo de tiempo.
// En el ejemplo, llamaria a la consola el "hello world" cada 3 segundos indefinidamente.
let interval = setInterval(function () {
  console.log("Hello world");
}, 3000);

// SET INMMEDIATE
// En el ejemplo, llamaria a la consola el "hello world" inmediatamente.
let immediate = setImmediate(function () {
  console.log("Hello world");
});

// CLEAR TIME OUT
// Detiene un setTimeOut,  (en este caso el del ejemplo de arriba)
clearTimeout(timeout);

// CLEAR INTERVAL
// Detiene un intervalo (en este caso el del ejemplo de arriba)
clearInterval(interval);

console.log(__filename, __dirname);
