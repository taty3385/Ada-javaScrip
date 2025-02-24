// Ejercicios:
// Ejercicio 1: Servidor TCP con UUID v4
// Objetivo:
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y
// envíe el UUID de vuelta al cliente.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v4 para cada
// conexión y envíe el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el UUID y mostrarlo en la
// consola.

const net = require("net");
const { v4: uuidv4 } = require("uuid");

const server = net.createServer((socket) => {
  const idv4 = uuidv4();
  console.log("cliente conectado :", idv4);
  socket.write(idv4);

  socket.on("data", (data) => {
    console.log("datos recibidos", data.toString());
  });

  socket.on("end", () => {
    console.log("cliente desconectado");
  });

  socket.on("error", (err) => {
    console.log("error", err.message);
  });
});

server.listen(8080, () => {
  console.log("servidor escuchando en el puerto 8080");
});
