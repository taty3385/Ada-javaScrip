const vehiclesModel = require("../models/vehiclesModels");
const vehiclesView = require("../view/vehicleView");


const vehicleController = {
  display: () => {
    const vehicle = vehiclesModel.readFile();
     return vehiclesView.displayVehicle.display(vehicle);
  },

  addVehicle: (newVehicle) => {
    const vehicles = vehiclesModel.readFile(); //leer archivo
    vehicles.push(newVehicle); //agregar nuevo vehiculo
    vehiclesModel.writeFile(vehicles); //escribir archivo
    return vehiclesView.displayVehicle.addvehichle(newVehicle);
  },

//   delete: (id) => {
//     const vehicles = vehiclesModel.readFile();
//     const searchs = vehicles.find((vehicle) => vehicle.id === id);
//     if (!searchs) {
//       return " no existe id ingresado ";
//     } else {
//       const del = searchs.filter((search) => search.id !== id);
//       vehiclesModel.writeFile(del);
//       return `su vehiculo con ${id} ha sido eliminado correctamnete`;
//     }
//   },
};

module.exports = vehicleController;
