

function sumar (a,b) {
    console.log(a+b)
    segundaFuncion()
}

function segundaFuncion() {
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Pablo')
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...')
    console.log(`Usuario ${usuario} autenticado exitosamente`)
}

sumar(2,3)