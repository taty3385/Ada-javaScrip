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
const client = net.createConnection({ port: 8080 }, () => {
  console.log("cliente coectado al servidor");
});

client.on("data", (data) => {
  const datos = JSON.parse(data);
  console.log("el uuid :", datos.uuid);
});
client.on("end", () => {
  console.log("Cliente desconectado");
});
client.on("error", (error) => {
  console.error("Error:", error);
});
