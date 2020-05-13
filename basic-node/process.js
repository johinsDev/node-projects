process.on("exit", function () {
  console.log("EL PROCESO ACABO");
});

process.on("uncaughtException", function (err) {
  console.error("¡Se produjo un error no considerado!");
  console.error(err.stack);
});
