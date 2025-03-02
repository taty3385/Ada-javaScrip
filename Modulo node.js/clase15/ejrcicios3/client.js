const net=require("net");

const client = net.createConnection({ port: 8000 }, () => {
    console.log("conectado al servidor");
    client.write("Hola,como estas");
});

client.on("data", (data) => {
    console.log(`Texto cifrado: ${data.toString()}`);
    client.end();
});     
client.on("end", () => {
    console.log("desconectado del servidor");
});
