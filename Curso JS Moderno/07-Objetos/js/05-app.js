const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1 kg',
            medida: '1 m'
        },
        fabricacion: {
            pais: 'China'
        }
    },


}

console.log(producto.informacion.peso)
console.log(producto.informacion.fabricacion.pais)

