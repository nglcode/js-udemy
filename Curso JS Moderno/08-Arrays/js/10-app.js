const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 400 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audif', precio: 100 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Movil', precio: 1000 },
]

// Map crea un nuevo arreglo, foreach no
const nuevoArreglo = carrito.map( function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`
})

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`
})

console.log(nuevoArreglo)
console.log(nuevoArreglo2)


