console.log("Conectado..");

  // Import y variables constantes

const formulario = document.querySelector('#formulario');
const inicio = document.querySelector('#inicio');
let automovil = document.querySelector('#auto');
let moto = document.querySelector('#moto');
let camion = document.querySelector('#camion');

const eliminar = document.querySelector('#eliminar');

export let bd_vehiculo = [];
 
// Controlador
import { 
         findAll,
         validarFormulario 
        } 
from "../controller/controllerVehiculo.js";

import {
         limpiarHTML 
        } 
from "../helper/funciones.js";


// LocalStotage
document.addEventListener('DOMContentLoaded', () =>{

  bd_vehiculo = JSON.parse(localStorage.getItem('bd_vehiculo') ) || [];
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    inicio.addEventListener('click', (e) => {
      e.preventDefault();
      limpiarHTML("#index");
      const infVehiculo = document.querySelector("#contenedor-veh");
      infVehiculo.innerHTML = `
                                <div id="resultados">
                                  <fieldset>
                                    <legend> 
                                      <h2>Lista de Vehiculos</h2>
                                    </legend>
                                  </fieldset>  
                                  
                                  <div class="formulario">
                                      <!-- Listado Vehiculo  -->
                                      <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
                                          <div class="flex flex-col mt-100">
                                              <div class="py-2 overflow-x-auto">
                                                  <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                                      <table class="min-w-full">
                                                          <thead class="bg-gray-100 ">
                                                              <tr>
                                                                  <th id="nombre" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                          Placa
                                                                  </th>
                                                                  <th id="marca" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                          Marca
                                                                  </th>
                                                                  <th id="color" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                          Color
                                                                  </th>
                                                                  <th id="informacion" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                          Informacion
                                                                  </th>
                          
                                                                  <th id="acciones" class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                                                      Acciones
                                                                  </th>
                                                              </tr>
                                                          </thead>
                                                          <tbody id="listado-vehiculo" class="bg-white"></tbody>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </main>  
                                  </div>
                              </div>
                              <input class="boton" type="submit" value="Consultar" id="finAll">
                              `;

      const finAll = document.querySelector("#finAll");
      finAll.addEventListener("click",  () => { 
        findAll();
      });

    })

    automovil.addEventListener('click', (e) => {
      e.preventDefault();
      limpiarHTML("#index");
      const infVehiculo = document.querySelector("#contenedor-veh");
      
      infVehiculo.innerHTML = `
                              <div id="index">
                                <div id="vehiculo">
                                  <fieldset>
                                    <legend> 
                                      <h2>Informacion Automovil</h2>
                                    </legend>  
                                    <div class="contenedor-campos" id="tipo">
                                      <div class="campos">
                                        <label for="placa">
                                          Placa:
                                          <input class="input-text" type="text" id="placa" placeholder="Tu placa">
                                        </label>
                                      </div>
                                      <div class="campos">
                                        <label for="marca">
                                          Marca:
                                          <input class="input-text" type="text" id="marca" placeholder="Tu marca">
                                        </label>
                                      </div>
                                      <div class="campos">
                                        <label for="color">
                                          Color:
                                          <input class="input-text" type="text" id="color" placeholder="Tu color">
                                        </label>
                                      </div>
                                      <div class="campos" id="tipo-vehiculo">
                                        <label for="num-puerta">
                                            Numero puertas:
                                            <input class="input-text" type="text" id="num-puerta" placeholder="Numero puertas">
                                        </label> 
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                              <div>
                                <input class="boton w-100" type="submit" value="Guardar" id="guardar">
                              </div>      
                              `;

      const guardar = document.querySelector("#guardar");

      guardar.addEventListener('click', (e) => {  
        e.preventDefault();
        
        const infAuto = document.querySelector("#num-puerta");
        if(infAuto !== null){
          validarFormulario(infAuto);
        }
        
      })
    
    })

    moto.addEventListener('click', (e) => {
      e.preventDefault();
      limpiarHTML("#vehiculo");
      const infVehiculo = document.querySelector("#contenedor-veh");
      infVehiculo.innerHTML =`
                              <div id="index">
                                <div id="vehiculo"> 
                                <fieldset>
                                  <legend> 
                                    <h2>Informacion Moto</h2>
                                  </legend>
                                  <div class="contenedor-campos" id="tipo">
                                    <div class="campos">
                                      <label for="placa">
                                        Placa:
                                        <input class="input-text" type="text" id="placa" placeholder="Tu placa">
                                      </label>
                                    </div>
                                    <div class="campos">
                                      <label for="marca">
                                        Marca:
                                        <input class="input-text" type="text" id="marca" placeholder="Tu marca">
                                      </label>
                                    </div>
                                    <div class="campos">
                                      <label for="color">
                                        Color:
                                        <input class="input-text" type="text" id="color" placeholder="Tu color">
                                      </label>
                                    </div>
                                    <div class="campos" id="tipo-vehiculo">
                                      <label for="num-llantas">
                                            Numero Llantas:
                                            <input class="input-text" type="text" id="num-llantas" placeholder="Numero llantas">
                                      </label>
                                    </div>
                                  </div>
                                </fieldset>
                                </div>
                              </div>
                              <div>
                                <input class="boton" type="submit" value="Guardar" id="guardar">
                              </div>      
                          `;

      const guardar = document.querySelector("#guardar");
      guardar.addEventListener('click', (e) => {  
        e.preventDefault();
        const infMoto = document.querySelector("#num-llantas");
        if(infMoto !== null){
          validarFormulario(infMoto);
        }
      })
    })

    camion.addEventListener('click', (e) => {
      e.preventDefault();
      limpiarHTML("#vehiculo");
      const infVehiculo = document.querySelector("#contenedor-veh");
      infVehiculo.innerHTML = `
                              <div id="index">
                                <div id="vehiculo">
                                <fieldset>
                                  <legend> 
                                    <h2>Informacion Camion</h2>
                                  </legend>
                                  <div class="contenedor-campos" id="tipo">
                                    <div class="campos">
                                      <label for="placa">
                                        Placa:
                                        <input class="input-text" type="text" id="placa" placeholder="Tu placa">
                                      </label>
                                    </div>
                                    <div class="campos">
                                      <label for="marca">
                                        Marca:
                                        <input class="input-text" type="text" id="marca" placeholder="Tu marca">
                                      </label>
                                    </div>
                                    <div class="campos">
                                      <label for="color">
                                        Color:
                                        <input class="input-text" type="text" id="color" placeholder="Tu color">
                                      </label>
                                    </div>
                                    <div class="campos" id="tipo-vehiculo">
                                      <label for="capacidad-max">
                                          Capacidad Maxima:
                                          <input class="input-text" type="text" id="capacidad-max" placeholder="Capacidad maxima">
                                      </label> 
                                    </div>  
                                  </div>  
                                </fieldset>
                                </div>  
                              </div>
                              <div>
                                <input class="boton" type="submit" value="Guardar" id="guardar">
                              </div>      
                              `;
      guardar.addEventListener('click', (e) => {  
        e.preventDefault();
        const infCamion = document.querySelector("#capacidad-max");
        if(infCamion !== null){
          validarFormulario(infCamion);
        }
      })                            
    })
  });

});

// Bloque de Funciones 
