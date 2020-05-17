// // Scope global

// // Cuando declaro una funcion se genera un scope local
// // Refencia casa , Calle

// // HOISTING --> Solo sucede con var y function
// console.log(myName);

// var myName = "Johan";

// returnMyName("Johan");

// function returnMyName(name) {
//   console.log("Hola " + name);
// }

// var x = 5;

// (function () {
//   console.log("x:", x); // no obtenemos '5' sino 'undefined'
//   var x = 10;
//   console.log("x:", x); // 10
// })();

// var x = 5;

// (function () {
//   var x; // Se elevo la declaración
//   console.log("x:", x); // undefined
//   x = 10;
//   console.log("x:", x); // 10
// })();

// var x = 1; // Inicializa x
// console.log(x + " " + y); // '1 undefined'
// var y = 2; // Inicializa y

// var x = 1; // Inicializa x
// var y; // Se elevo la declaración
// console.log(x + " " + y); // '1 undefined'
// y = 2; // Inicializa y

// console.log(z);
// var z = 10;

// ("use strict");
// console.log(x);
// x = 3.14;

throw "Error";
