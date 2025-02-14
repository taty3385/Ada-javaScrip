// paso 4 importamos el modulo que hicimos en  el modelo
// este modulo contiene la logica para obtener los datos de los vehiculos

const vehicleModel = require("../models/vehicle");
// paso 5 importamos el modulo que hicimos en  la vista
// este modulo contiene la logica para formatear las respuestas relacionadas con vehiculos que se enviaran al cliente

const vehicleView = require("../views/vehicleView");

// paso 6 creamos un objeto que contendra los metodos para controlar las peticiones relacionadas con vehiculos

const vehicleController = {
  // metodos para obtener un vehiculo por su id
  handleRequest: (id) => {
    //llamamos al metodo getVehicleId del modelo para obtener el vehiculo por su id
    // convertimos el id a entero con parseInt y le pasamos la base 10
    const vehicle = vehicleModel.getVehicleId(parseInt(id, 10));

    //llamamos al metodo formatResponse de la vista para formatear la respuesta

    //este metodo recibe el vehiculo y los preprara para enviar al usuario en formato json

    return vehicleView.formatResponse(vehicle);
  },
};

module.exports = vehicleController; // exportamos el modulo vehicleController
