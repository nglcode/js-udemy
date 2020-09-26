const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evento) => {
    //console.log('Escribiendo...')
    if (evento.target.value === '') {
        console.log("Falló la validacion")
    }
    console.log(evento.target.value)
})