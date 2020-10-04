function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// separacion de funciones para un tipo de objeto especifico
// Esta funcion solo estará disponible para Cliente
// Ver diferencia entre function() y un arrow function
// function accedera a las propias variables del objeto; si se usa un arrow function, accedera a variables globales
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if(this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente())
console.log(pedro.nombreClienteSaldo())
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo())

console.log(pedro)


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en línea');
console.log(CCJ)
