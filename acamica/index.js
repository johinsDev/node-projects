function dispatchNotError() {
  // throw "No puedes dividir por cero";
  return "Algo";
}

function dispatchNotError(num) {
  if (typeof num !== "number") {
    throw new Error("No es un número");
  }

  console.log("Muy bien");
  // return "Algo";
}
// dispatchError();
// console.log("Continue");
try {
  dispatchNotError(true); // ASINCRONISMO, AWAIT ASYNC, PROMISE,CALLBACK
  // dispatchError();
} catch (error) {
  // undefined is not a object
  console.log(error.response.message);
} finally {
  console.log("Finally");
}
