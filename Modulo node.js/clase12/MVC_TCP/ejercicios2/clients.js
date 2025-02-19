const net = require("net");

const client = net.createConnection({ port: 4001 }, () => {
  console.log("cliente conectado al servidor");
  client.write("1");
});

client.on("data", (data) => {

  console.log("respuesta del servidor ", data.toString());

  client.end();
});

client.on("end", () => {
  console.log("Desconectado del servidor");
});

client.on("error", (err) => {
  console.log("error", err.message);
});