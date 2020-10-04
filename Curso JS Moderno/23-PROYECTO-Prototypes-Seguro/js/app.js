// constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// realiza la cotizacion con los datos
// en este caso si usamos function porque tengo que acceder a los atributos del objeto
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    
        default:
            break;
    }

    // leer el año
    const diferencia = new Date().getFullYear() - this.year;

    // cada año que la diferencia es mayor, el costo se reducira en 3%
    cantidad -= ((diferencia * 3) * cantidad ) / 100;

    /*
        Si el seguro es basico, se multiplica por 30% más
        Si el seguro es completo, se multiplica por 50% más
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    console.log(cantidad)
    return cantidad;
}

function UI() {
    // no tiene nada pero es necesario crearlo para poder usar el prototype
}


// llena las opciones de los años
// se crea como prototipo para tenerlo separado de Seguro
// esta funcion solo podra ser llamada por UI
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    
    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    }, 3000)

}

UI.prototype.mostrarResultado = (total, seguro) => {

    const { marca, year, tipo } = seguro;

    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiático';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">${total} €</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    // boton cotizar
    const btnCotizar = document.querySelector('#cotizar-seguro button');
   

    // mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    btnCotizar.disabled = true;
    btnCotizar.classList.add('cursor-not-allowed', 'opacity-50');

    setTimeout( () => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
        btnCotizar.disabled = false;
        btnCotizar.classList.remove('cursor-not-allowed', 'opacity-50');
    }, 3000)

}

// instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // llena el select con los años

})

eventListeners();

function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // leer marca
    const marca = document.querySelector('#marca').value;

    // leer año
    const year = document.querySelector('#year').value;

    // leer cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    
    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    } 


    ui.mostrarMensaje('Cotizando...', 'exito');

    // ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    // instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    // utilizar el proto que cotizará
    ui.mostrarResultado(total, seguro);
}
