function hola(name) {
  return new Promise((resolve, reject) => {
    setTimeout((_) => {
      console.log(`Hola ${name}`);
      resolve(name);
    }, 1000);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla Bla bla ....`);
      resolve();
      // reject(`hubo un error`)
    }, 1000);
  });
}

function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout((_) => {
      console.log(`Adios ${name}`);
      // reject(`huvo error`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let name = await hola(`Carlos`);
  await hablar();
  await hablar();
  await hablar();
  await adios(name);
  console.log(`Terninamos el proceso`);
}

console.log(`Empesamos el proceso`);

main();
