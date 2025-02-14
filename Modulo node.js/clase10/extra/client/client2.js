const net = require("net");
const readline = require("readline-sync");

const option = {
  port: 8000,
  host: "127.0.0.1",
};

const client = net.createConnection(option);

client.on("connect", () => {
  console.log("Conexión establecida");
  onlineMessage();
});

client.on("data", (data) => {
  console.log("\nRecibiendo datos del servidor:", data.toString());
  onlineMessage();
});

const onlineMessage = () => {
  let message = readline.question("\nIngrese su mensaje: ");
  if (message.trim() === "cerrar") {
    client.write("El cliente se ha desconectado");
    client.end();
  } else {
    client.write("Mensaje del cliente: " + message);
  }
};

client.on("end", () => {
  console.log("Conexión cerrada por el servidor");
});

client.on("error", (err) => {
  console.log("Error:", err.message);
});