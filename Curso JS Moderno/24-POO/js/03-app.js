// class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`;
    }

    // no requieren una instancia, se llama directamente desde la clase
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

// herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }

    mostrarInformacion() {
        return `Empresa: ${this.nombre} - Saldo: ${this.saldo} - Teléfono: ${this.telefono} - Categoria: ${this.categoria}`;
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con juan', 500, 123123123, 'Aprendizaje en línea')
console.log(empresa);
console.log(juan.mostrarInformacion());
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());