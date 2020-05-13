// PARAMETROS POR DEFECTO

function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 26;
  var country = country || "CO";
}

// es6
function newFunction2(name = "Johan", age = 26, country = "CO") {
  console.log(name, age, country);
}

newFunction2();

// TEMPLATE LITERALS
let hello = "Hello";

let world = "World";

console.log(hello + world);

// es6
console.log(`${hello} ${world}`);

// MULTILINE
let lorem =
  "lorem  loremloremloremloremloremlorem loremloremloremlorem \n" +
  "loremloremloremlorem";

let lorem2 = `lorem  loremloremloremloremloremlorem loremloremloremlorem
loremloremloremlorem`;

console.log(lorem);

console.log("********************");

console.log(lorem2);

// DESTRUCTURING

const person = {
  age: 26,
  name: "JOHAN",
  country: "CO",
};

const { age, name } = person;

console.log(age, name);

// SPRIT OPERATOR

let team = ["Oscar", "Julian", "Ricardo"];

let team2 = ["Jessica", "Valeria", "Camila"];

let education = ["David", ...team, ...team2];

console.log(education);

// LET,CONTS

{
  var globalVar = "Global var";
}

const arrow = () => {
  var globalVar2 = "Tricky";
  console.log(globalVar2);
};

{
  let globalLet = "Global let";
  console.log(globalLet);
}

// Shorthand

let name = "johan";
let age = 26;

const person = { name, age };

// Arrow function

const names = [
  {
    name: "Johan",
    age: 26,
  },
  {
    name: "Yessica",
    age: 27,
  },
];

let listOfNames = names.map((person) => person.name);

console.log(listOfNames);

// Promises

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 3000);
  });
}

getUsers().then(console.log);
