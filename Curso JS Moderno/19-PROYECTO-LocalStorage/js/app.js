// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



// event listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', () => {
        // si encuentra info en tweets, obtiene la data; sino, crea un arreglo vacio
        tweets = JSON.parse( localStorage.getItem('tweets')) || []

        crearHTML();
    })
}



// funciones
function agregarTweet(e) {
    e.preventDefault();
    console.log("Agregando tweet")

    const tweet = document.querySelector('#tweet').value;

    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')

        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet // si se especifica asi, "tweet" va a ser la llave, y el valor sera el que corresponda. Equivalente a tweet: tweet
    }

    tweets = [...tweets, tweetObj];
    
    crearHTML();

    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout( () => {
        mensajeError.remove();
    }, 3000)
}

function crearHTML() {

    limpiarHTML();
    
    if(tweets.length > 0) {
        tweets.forEach( t => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            btnEliminar.onclick = () => {
                borrarTweet(t.id);
            }

            const li = document.createElement('li');
            li.innerText = t.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

function limpiarHTML() {
    while( listaTweets.firstChild ) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

function borrarTweet(id) {

    tweets = tweets.filter( t => t.id !== id);
    crearHTML();

}