const readlineSync = require("readline-sync");

const displayVehicles = (vehicles) => {
  if (vehicles.length === 0) {
    return "No hay vehículos para mostrar";
  } else {
    vehicles.forEach((vehicle, index) => {
      console.log(
        `${index + 1}. ${vehicle.brand} - ${vehicle.model} - ${
          vehicle.year
        } - ${vehicle.km}\n`
      );
    });
  }
};

const addVehicle = () => {
  const brand = readlineSync.question("Ingrese la marca del vehículo: ");
  const model = readlineSync.question("Ingrese el modelo del vehículo: ");
  const year = readlineSync.questionInt("Ingrese el año del vehículo: ");
  const km = readlineSync.questionInt("Ingrese el kilometraje del vehículo: ");
  return { brand, model, year, km };
};

const promptForVehicleID = (vehicles) => {
  const vehicleId =
    readlineSync.questionInt("Ingrese el id del vehículo a eliminar: ") - 1;
  if (vehicleId < 0 || vehicleId >= vehicles.length) {
    console.log("ID inválido");
    return -1;
  }
  return vehicleId;
};

const confirmVehicle = (message) => {
  console.log(message);
};

const propmId = () => {
  const idVehicle = readlineSync.questionInt("ingrese el id del vehiculo a modificar");
  return idVehicle;
};

const modificacioneeVehicle=()=>{
    
    const marca=readlineSync.question( "modifique la marca")

    const anio=readlineSync.question( "modifique la anio")
    const modelo=readlineSync.question( "modifique la modelo ")
    return { marca ,anio ,modelo}
}

module.exports = {
  displayVehicles,
  addVehicle,
  promptForVehicleID,
  confirmVehicle,
  propmId,
  modificacioneeVehicle
};
