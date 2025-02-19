

const net = require("net");
const serverController = require("./controller/hotelControllers");

const server = net.createServer((socket) => {
  console.log("cliente conectado al servidor");

  socket.on("data", (data) => {
    const id = data.toString().trim();
    console.log("datos recibido del cliente ", id);
    const response = serverController.handleRequest(id);
    socket.write(response); 
  });

  socket.on("error", (err) => {
    console.log("error", err.message);
  });

  socket.on('end', () => {
    console.log("cliente se ha desconectado");
  });
});

server.listen(4001, () => {
  console.log('servidor conectado al puerto 4001');
});