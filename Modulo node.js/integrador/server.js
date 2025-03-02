const net = require("net");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on("data", (data) => {
    const datos = data.toString().trim();
    socket.write(datos);
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  });

  socket.on("error", (error) => {
    console.error("Error de conexión:", error);
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
