fs.readFile("/text.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Respuesta a:
// Error First Callbacks
// Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo. En caso de que no haya ningún error, puedes utilizar los argumentos posteriores y seguir adelante.
