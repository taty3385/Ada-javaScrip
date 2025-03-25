

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
        break;
        case "3":
            response= vehicleController.deleteVehicle(parsedData.id);
        break;
      default:
        response = "Opción no válida";
        break;
    }
    
    socket.write(response);
   
  });
  
  socket.on("error", (err) => {
    console.log(err.message);
  });

  socket.on("end", () => {
    console.log("cliente desconectado");
   
   
  });
});


server.listen(8000, () => {
  console.log("servidor corriendo en el puerto 8000");
});

server.on('close',(socket)=>{
    socket.end();
  console.log("servidor cerrado");

})
