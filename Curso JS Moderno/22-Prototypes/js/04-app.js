function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

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

function Persona(nombre, saldo, telefono) {
    // heredando el constructor de cliente
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
}

// Heredar los prototypes de Cliente
// Tiene que hacerse antes de instanciar el objeto, para que cuando se cree ya tenga esa informacion
Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;

const juan = new Persona('Juan', 5000, 10920192)
console.log(juan)
console.log(juan.nombreClienteSaldo())

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())