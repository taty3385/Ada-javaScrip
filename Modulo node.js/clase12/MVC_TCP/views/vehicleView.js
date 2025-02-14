// creamos  un objeto que obtendra los metodos para formatear respuestas relacionadas con vehiculos

const vehicleView = {
  // metodo para formatear las respuesta que se enviara al cliente
  formatResponse: (vehicle) => {
    //verificamos si el vehiculo no existe
    if (vehicle === null) {
      //debolvemos un objeto  json con un msnsaje de error
      return JSON.stringify({ status: "error", message: "Vehicle not found" }); // retonamos un objeto json stringificado(osea devolvemos un json  ) con un mensaje de error
    }
    // si el vehiculo existe devolvemos un objeto json stringificado con los datos del vehiculo
    return JSON.stringify({
        status: "success", // estado de la respuesta
        data: vehicle, //  incluimos los datos del vehiculo

    })
  },
}

// exportamos el objeto vehicleView
module.exports = vehicleView; // exportamos el modulo vehicleView