
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// todos los elementos deben cumplir con una condicion para que retorne true

let resultado = carrito.every( x => x.precio < 500)
resultado = carrito.every( x => x.precio > 50)
console.log(resultado)