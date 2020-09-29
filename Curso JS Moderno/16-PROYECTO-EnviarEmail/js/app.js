// variables
const btnEnviar = document.querySelector('#enviar');
const btnResetear = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    btnResetear.addEventListener('click', resetearFormulario);

    formulario.addEventListener('submit', enviarEmail);

    
}


// funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    
    
    if(e.target.value.length > 0) {
        // eliminar mensaje de error
        const error = document.querySelector('p.error');
        if(error) {
            error.remove();
        }
        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type == 'email') {
    

        if(er.test( e.target.value )) {
            // eliminar mensaje de error
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }
        
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }


    if(er.test( email.value ) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 

}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'bg-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    // si ya existe la clase error, no se volverá a crear el elemento
    // se usa querySelectorAll porque devuelve una coleccion de elementos en el cual si podemos usar length
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
    

}

function enviarEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout( () => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-5', 'bg-green-500', 'text-white', 'font-bold');
        formulario.insertBefore(parrafo, spinner);

        setTimeout( () => {
            parrafo.remove();

            resetearFormulario(e);
        }, 5000);
        
    }, 3000);

}

function resetearFormulario(e) {
    formulario.reset();
    iniciarApp();
}