const { exec, spawn } = require("child_process");

/*exec('ls ', (error, stdOut) => {
    error ? console.log(error) : console.log(stdOut);
});
*/
let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => console.log(dato.toString()));
proceso.on("exit", () => console.log("Proceso terminado"));
