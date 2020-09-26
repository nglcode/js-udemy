const enlace = document.createElement('a');

enlace.textContent = 'Nuevo enlace';
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

console.log(enlace)

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('Clickado!')
}

///////////////////

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'texto alternativo';

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

console.log(card)


