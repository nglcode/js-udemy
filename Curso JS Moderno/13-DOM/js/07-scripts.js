// const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

// console.log(encabezado.style)

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);