const { log } = require("util");
const vehicleController = require("./controllers/vehicleController");
const net = require("net");

const server = net.createServer((socket) => {
  console.log("cliente conectado");

 

  socket.on("data", (data) => {
    const datos = data.toString();
   const parsedData = JSON.parse(datos);

    let response;
    switch (parsedData.option) {
      case "1":
        response = vehicleController.display();

        break;
        case "2":
         response= vehicleController.addVehicle(parsedData.newVehicle);
        break
      default:
        response = "Opción no válida";
        break;
    }
    
    socket.write(response);
   
  });
  
  socket.on("error", (err) => {
    console.log(err.message);
  });
});

server.listen(8000, () => {
  console.log("servidor corriendo en el puerto 8000");
});
