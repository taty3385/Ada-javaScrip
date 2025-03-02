// Ejercicio 4: Sistema de Autenticación con UUID y JSON 
// Consigna: 
// Crea un sistema de autenticación básico donde los usuarios puedan 
// registrarse e iniciar sesión. Cada usuario debe tener un ID único 
// generado con UUID y sus datos deben guardarse en un archivo JSON. 
// Pasos: 
// • Usa el módulo uuid para generar IDs únicos. 
// • Usa fs para guardar y leer los usuarios en un archivo JSON. 
// • Implementa funciones para registrar usuarios y validar 
// credenciales.


// Ejercicio 4: Sistema de Autenticación con UUID y JSON 
// Consigna: 
// Crea un sistema de autenticación básico donde los usuarios puedan 
// registrarse e iniciar sesión. Cada usuario debe tener un ID único 
// generado con UUID y sus datos deben guardarse en un archivo JSON. 
// Pasos: 
// • Usa el módulo uuid para generar IDs únicos. 
// • Usa fs para guardar y leer los usuarios en un archivo JSON. 
// • Implementa funciones para registrar usuarios y validar 
// credenciales.

const net = require("net");
const readline = require("readline-sync");

const client = net.createConnection({ port: 8000 }, () => {
  console.log("Conectado al servidor");
  const pregunta = readline.question('¿Desea registrarse o iniciar sesión? (r/l): ');
  client.write(pregunta === 'r' ? 'registro' : 'login');
});

client.on("data", (data) => {
  const mensaje = data.toString().trim();
  console.log(mensaje);

  if (mensaje === "Ingrese su nombre de usuario:") {
    const nombre = readline.question('Ingrese su nombre de usuario: ');
    client.write(nombre);
  } else if (mensaje === "Ingrese su contraseña:") {
    const password = readline.question('Ingrese su contraseña: ', { hideEchoBack: true });
    client.write(password);
  } else if (mensaje === "Usuario registrado correctamente" || mensaje === "Bienvenido" || mensaje === "Usuario o contraseña incorrecta") {
    console.log(mensaje);
    client.end();
  }
});

client.on("end", () => {
  console.log("Desconectado del servidor");
});

client.on("error", (error) => {
  console.error("Error de conexión:", error);
  client.end();
});