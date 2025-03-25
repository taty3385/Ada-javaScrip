const readlineSync = require("readline-sync");
const net = require("net");
const uuid = require("uuid");

const menu = [
  "Mostrar vehiculos",
  " Agregar vehiculo",
  " Eliminar vehiculo",
  ". Salir",
];

const Menu = () => {
  menu.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
   
  });
};

const  displayMenu = () => {
    Menu()
    const option = readlineSync.questionInt("Seleccione una opcion : ");
    switch (option) {
        case 1:
          client.write(JSON.stringify({ option: "1" }));
          break;
        case 2:
          client.write(JSON.stringify({ option: "2", newVehicle: addVehicle() }));
          break;
        case 3:
          const id = readlineSync.question("Ingrese id del vehiculo a eliminar: ");
          client.write(JSON.stringify({ option: "3", id }));
          break;
        case 4:
          console.log("Saliendo...");
          client.end();
          break;
        default:
          console.log("Opción inválida");
          displayMenu();
          break;
      }

}

const client = net.createConnection({ port: 8000 }, () => {
  console.log(/" CONECTANDO AL SERVIDOR "/);
    displayMenu();
  
 
  
});
client.on("data", (data) => {
  console.log(
    "===================respuesta del servidor============================"
  );
  const datos = data.toString();
  console.log(datos);
    displayMenu();
});

client.on("end", () => {
  console.log("desconectado del servidor");

});

client.on("error", (err) => {
  console.log(err.message);
}); 

const addVehicle = () => {
  const id = uuid.v4();
  const name = readlineSync.question("ingrese nombre del vehiculo : ");
  const model = readlineSync.question("ingrese modelo del vehiculo : ");
  const year = readlineSync.question("ingrese año del vehiculo : ");
  return { id, name, model, year };
};
