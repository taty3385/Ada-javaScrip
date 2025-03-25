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

 deleteVehicle: (id)=>{
  const vehicles= vehiclesModel.readFile();
  const searchVehicle = vehicles.find(vehicle=> vehicle.id === id);
  if(!searchVehicle){
    return vehiclesView.displayVehicle.deelteVehicle(id, []);

 }else {
  const deleteVehicle= vehicles.filter(vehicle=> vehicle.id !== id);
  vehiclesModel.writeFile(deleteVehicle)
  return vehiclesView.displayVehicle.deelteVehicle(id, deleteVehicle);
 }
}
}

module.exports = vehicleController;
