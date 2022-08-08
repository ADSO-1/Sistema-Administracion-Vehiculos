class Vehiculo {

    // Atributos y el contructor: 
    constructor(placa, marca, color) {
            this.placa = placa;
            this.marca = marca;
            this.color = color;
    }
    
    // Metodos la logica del negocio
    mostrarDatos() {
        return `Vehiculo: con placa ${this.placa} marca ${this.marca} color ${this.color} se dio a la fuga en el SENA de Malambito efectivo`;
    }
}

export default Vehiculo;