function soyAsincrona(cb, name) {
  console.log('Hola, soy una funcion asincrona')

  setTimeout(function () {
    console.log('Estoy siendo asincrona' + name) 
    cb()
  }, 1000)
}

console.log('Iniciando proceso')

function callback() {
  console.log('soy un callback')
}

const name = 'Hola johan'

soyAsincrona(callback , name)

console.log('terminando proceso')
