function thisIsAPromise(age, topAge) {
  return new Promise((resolve, reject) => {
    if (age <= topAge) {
      resolve("User is allowed.");
    } else {
      reject("User is denied.");
    }
  });
}

// Ejemplo permitido
thisIsAPromise(5, 15)
  .then((mensaje) => {
    return Promise.resolve(mensaje);
  })
  .then((response) => {
    console.log("RESPONSE", response);
  })
  .catch(function (mensaje) {
    console.log(mensaje);
  });

thisIsAPromise(20, 15)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch(function (mensaje) {
    console.log(mensaje);
  });
