"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

// Se usa para evitar la adición de propiedades del objeto; si permite modificar las existentes
Object.seal(producto)

producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto)
console.log(Object.isSealed(producto))

