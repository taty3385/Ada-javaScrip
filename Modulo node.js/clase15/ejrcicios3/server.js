// Ejercicio 3: Aplicación de Chat con Módulo NET y Crypto
// Consigna:
// Crea una aplicación de chat en tiempo real usando el módulo net.
// Asegura los mensajes cifrándolos con el módulo crypto.
// Pasos:
// • Usa net para crear un servidor y clientes.
// • Usa crypto para cifrar y descifrar los mensajes.
// • Implementa un sistema de autenticación básico.

const net = require("net"); // servidor
const crypto = require("crypto"); // cifrado

const algoritmo = "aes-256-cbc"; // algoritmo de cifrado aes con un tamaño de clave de 256 bits en modo cbc
const key = crypto.randomBytes(32); // genera clave de 32 bytes para el cifrado
const iv = crypto.randomBytes(16); // genera una clave de inicialización de 16 bytes

const server = net.createServer((socket) => {
  console.log("cliente conectado");

  socket.on("data", (data) => {
    const cipher = crypto.createCipheriv(algoritmo, key, iv); //creamos un objeto cipher con el algoritmo aes-256-cbc

    let encriptado = cipher.update(data, "utf8", "hex"); // procesa el texto plano y lo sifra
    encriptado += cipher.final("hex"); // finaliza el cifrado y devuelve el texto cifrado en hexadecimal
    console.log(`Texto cifrado: ${encriptado}`);
      socket.write(encriptado);

    const decipher = crypto.createDecipheriv(algoritmo, key, iv);
    let desencriptado = decipher.update(encriptado, "hex", "utf8");
    desencriptado += decipher.final("utf8");
    console.log(`: ${desencriptado}`);
    
  });
  socket.on("end", () => {
    console.log("cliente desconectado");
  });
});

server.listen(8000, () => {
   console.log("servidor iniciado");
})
