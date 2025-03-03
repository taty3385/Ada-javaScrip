const modelVehicle = require("../models/vehiclesModels");
const viewVehicle = require("../view/vehicleView");

const { v4: uuidv4 } = require("uuid");

// función para mostrar los vehículos
const showVehicles = () => {
  const vehicles = modelVehicle.readVehicle(); // leer los vehículos desde el modelo
  return viewVehicle.displayVehicles(vehicles); // mostrar los vehículos en la vista y devolver la respuesta
};

// función para agregar un vehículo
const addVehicles = () => {
  const newVehicle = viewVehicle.addVehicle(); // obtener los datos del vehículo desde la vista
  const vehicles = modelVehicle.readVehicle(); // leer los vehículos desde el modelo
  newVehicle.id = uuidv4(); // asignar un id único al nuevo vehículo
  vehicles.push(newVehicle); // agregar el vehículo al array
  modelVehicle.writeVehicle(vehicles); // guardar los vehículos en el modelo
  viewVehicle.confirmVehicle("vehiculo agregado"); // devolver la respuesta
};

// función para eliminar un vehículo
const deleteVehicle = () => {
  const vehicles = modelVehicle.readVehicle(); // leer los vehículos desde el modelo
  if (vehicles.length === 0) {
    return "No hay vehículos para eliminar"; // devolver la respuesta
  }
  const vehicleId = viewVehicle.promptForVehicleID(vehicles); // obtener el id del vehículo a eliminar
  if (vehicleId !== -1) {
    vehicles.splice(vehicleId, 1); // eliminar el vehículo del array
    modelVehicle.writeVehicle(vehicles); // guardar los vehículos en el modelo
    return "Vehículo eliminado correctamente"; // devolver la respuesta
  }
  return "ID inválido"; // devolver la respuesta
};
const sortVehicle = () => {
  const vehicle = modelVehicle.readVehicle();
  if (vehicle.length === 0) {
    console.log("no hay vehiculos");
  } else {
    const sortEdVehicles = vehicle.sort((a, b) => a.year - b.year);
    return viewVehicle.displayVehicles(sortEdVehicles);
  }
};

const updateVehicle = () => {
  const vehicles = modelVehicle.readVehicle();
 const vehicleId = viewVehicle.propmId();
  console.log(vehicleId);
  let filterId = vehicles.find((vehicle) => vehicle.id === vehicleId);
  let newFilterId = viewVehicle.modificacioneeVehicle();
   filterId.model = newFilterId.modelo;
  filterId.year = newFilterId.anio;
  filterId.brand = newFilterId.marca;

  

  return modelVehicle.writeVehicle(vehicles);
};

module.exports = {
  showVehicles,
  addVehicles,
  deleteVehicle,
  sortVehicle,
  updateVehicle,
};
