// Ejercicio 4: Mensaje de despedida personalizado
// Consigna:
// Crea un programa interactivo que pregunte al usuario su nombre y lo
// use en un mensaje de despedida. Usa variables de entorno para
// personalizar el saludo inicial.
// Requisitos del programa:
// 1. Usa una variable de entorno llamada START_MESSAGE para
// configurar el saludo inicial.
// 2. Usa readline para preguntar el nombre del usuario.
// 3. Despídete del usuario con un mensaje personalizado.

require('dotenv').config();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const message = process.env.START_MESSAGE;

rl.question(message, (name) => {
  console.log("hasta luego", name);
  rl.close();
});
