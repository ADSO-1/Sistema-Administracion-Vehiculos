import Vehiculo from './Vehiculo.js';

class Moto extends Vehiculo {
  // Atributos y el contructor:
  constructor(id, numeroLlantas, placa, marca, color) {
    super(placa, marca, color);
    this.id = id;
    this.numeroLlantas = numeroLlantas;
  }

  // Polimorfismos
  mostrarDatos() {
    return `${super.mostrarDatos()} con numeroLlantas: ${this.numeroLlantas} `;
  }
}

export default Moto;
