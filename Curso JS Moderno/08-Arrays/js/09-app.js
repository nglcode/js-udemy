const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 400 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audif', precio: 100 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Movil', precio: 1000 },
]



// for(let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre)
// }

carrito.forEach( function(producto) {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`)
})

