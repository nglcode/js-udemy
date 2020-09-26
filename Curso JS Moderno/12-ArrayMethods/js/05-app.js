
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = ''

carrito.forEach( (producto, index) => {
    if (producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
})

console.log(resultado)

// find solo va a retornar el primer elemento que encuentre
// si se quieren retornar varios elementos, usar filter
const resultado2 = carrito.find( prod => prod.nombre === 'Tablet')
console.log(resultado2)