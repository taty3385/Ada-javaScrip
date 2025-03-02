const net = require("net");
const readline = require("readline-sync");
const controllerVehicle = require("./controllers/vehicleController");

const menu = ["mostrar", "agregar", "eliminar", "salir"];
const index = readline.keyInSelect(menu, "Seleccione una opcion: " ,{cancel:false});
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Cliente conectado");
  client.write(menu[index]);
});


client.on("data", (data) => {
  let response;
  const datos = data.toString().trim();

  if (datos === "mostrar") {
    response = controllerVehicle.showVehicles();
  } else if (datos === "agregar") {
    response = controllerVehicle.addVehicles();
  } else if (datos === "eliminar") {
    response = controllerVehicle.deleteVehicle();
  } else if (datos === "salir") {
    console.log("hasta luego");
    client.end()
  } else {
    console.log("comando no reconocido");
  }
  return response;
});

client.on("end", () => {
  console.log("Desconectado del servidor");
});

client.on("error", (err) => {
  console.error("Error de conexión:", err.message);
});
