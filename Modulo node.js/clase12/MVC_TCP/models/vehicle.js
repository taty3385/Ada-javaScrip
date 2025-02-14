// paso 1 empesamos con el modelo
//importamos el modulo
// file system espara trabajar el sistema de archivos
// path para trabajar con rutas
const fs = require("fs");
const path = require("path");
// paso 2 definimos  la ruta del archivo que "data.json" que esta en este directorio que vehicle.js
// __dirname es una variable global que nos da la ruta del directorio actual
const dataPath = path.join(__dirname, "data.json");

// creamos un objeto que obtendra metodos para interactur con los datos de los vehiculos

const vehicleModel = {
  // metodo para obtener un vehiculo por id
  getVehicleId: (id) => {
    //leemos el archivo data.json de vehiculos de manera sincrona
    const data = fs.readFileSync(dataPath);
    // convertimos el archivo json a javascript
    const vehicles = JSON.parse(data);
    // buscamos el vehiculo por el id cuyo id sea igual al id que recibimos como parametro si no se encuentra devolvemos null
    return vehicles.find((vehicle) => vehicle.id == id) || null;
  },
};

//exportamos el objeto vehicleModel para que pueda ser utilizado en otros archivos
module.exports = vehicleModel;
