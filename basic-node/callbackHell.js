function hola(n, f) {
  setTimeout(() => {
    log("Hola " + n);
    f(n);
  }, 1000);
}
function hablar(call) {
  setInterval(() => {
    log("I am carlos, and i live in jalpa");
    call();
  }, 1000);
}

function adios(n, fun) {
  setTimeout(() => {
    log("Adios " + n);
    fun();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  log("numero =>" + veces);
  if (veces > 0) hablar(() => conversacion(nombre, --veces, callback));
  else callback();
}

function log(str) {
  console.log(str);
}

// --

log("Iniciado");
hola("Carlos Enrique ", (nombre) =>
  conversacion(nombre, 3, () => log("termino"))
);
