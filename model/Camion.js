import Vehiculo from './Vehiculo.js';

class Camion extends Vehiculo {
  // Atributos y el contructor:
  constructor(id, pesoMaximo, placa, marca, color) {
    super(placa, marca, color);
    this.id = id;
    this.pesoMaximo = pesoMaximo;
  }

  // Polimorfismos
  mostrarDatos() {
    return `${super.mostrarDatos()} con peso maximo: ${this.pesoMaximo}`;
  }
}

export default Camion;