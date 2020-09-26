const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario)

function validarFormulario (evento) {
    evento.preventDefault();

    console.log(evento);
}