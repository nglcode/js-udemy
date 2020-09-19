const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

// const nombre = producto.nombre;

// Destruscturing
const { nombre, disponible } = producto;
const { precio } = producto;

console.log(nombre)
console.log(precio)
console.log(disponible)
console.log(producto)
