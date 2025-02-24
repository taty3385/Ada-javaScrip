// Ejercicio 3: Servidor TCP con UUID v1 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v1 basado en el tiempo y la dirección MAC.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v1 basado en el
// tiempo.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.

const net = require("net");
const { v1: uuidv1 } = require("uuid");

const server = net.createServer((socket) => {
  console.log("cliente conectado al servidor");
  const idv1 = uuidv1();
  const data = {
    uuid: idv1,
  };
  response= JSON.stringify(data);
  socket.write(response);
  
  
  socket.on("data", (data) => {
    console.log("datos recibidos del cliente : ", data.toString());
  });

  socket.on("error", (err) => {
    console.log("error: ", err.message);
  });
});

server.listen(8080, () => {
  console.log("servidor conectado al puerto 8080");
});
