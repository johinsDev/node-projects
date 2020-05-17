// Qué es el Scope y cómo funciona el Global Scope
// Que es el Scope:
// El scope puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código.

// Qué es el Scope Global
// Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque. También son conocidas como variables globales. Puedes acceder a este tipo de variables desde cualquier parte de tu código, ya sea dentro o fuera de una función.

// A pesar de que JavaScript nos permite declarar una variable como global, no es una buena práctica. Una de las razones es porque tenemos la posibilidad de declarar dos variables globales en distintas partes del código con el mismo nombre sin notarlo.

// var puede sobrescribir la declaración y asignación de una variable y alterar su valor
// let no permite volver a declarar una variable con el mismo nombre pero permite la asignación de un nuevo valor
// const tampoco permite reasignar una declaración ni asignación de un nuevo valor
// Una variable sin var, let o const, dentro de una función puede ser reconocida como una variable global pero esto es una mala práctica

var name = "johan";

if (true) {
  let lastName = "Villamil";
}

console.log(lastName);

let x = 1;
{
  let x = 2;
  console.log(x);
}

console.log(x);

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();

a = 2;
console.log(a);
var a;
