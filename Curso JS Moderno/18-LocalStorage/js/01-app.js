// localStorage solo almacena strings

localStorage.setItem('nombre', 'Angel');

const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

// JSON.stringify convierte un objeto, o un arreglo, en una cadena
const productoString = JSON.stringify(producto)
console.log(productoString)
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
