const carrito = []

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Smartphone",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 100
}

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.table(carrito)

