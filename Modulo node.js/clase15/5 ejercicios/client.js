// Ejercicio 5: Aplicación de Notas con Módulo Path y FS 
// Consigna: 
// Crea una aplicación de notas donde cada nota se guarde en un archivo 
// de texto dentro de una carpeta específica. Usa el módulo path para 
// manejar rutas y fs para crear y leer archivos. 
// Pasos: 
// • Usa path.join para crear rutas dinámicas a la carpeta de notas. 
// • Usa fs para crear, leer y eliminar archivos de notas. 
// • Implementa un menú interactivo con readline-sync. 


const net = require("net");
const readline = require("readline-sync");

const menu = [
  "Crear nota",
  "Leer nota",
  "Eliminar nota",
  "Salir"
];
const opcion = readline.keyInSelect(menu, "Seleccione una opción");

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Conectado al servidor");
  client.write(menu[opcion].toLowerCase().split(" ")[0]);
});

client.on("data", (data) => {
  const respuesta = data.toString().trim();
  console.log(respuesta);

  if (respuesta === "Ingrese la nota:") {
    const nota = readline.question('Ingrese la nota: ');
    client.write(nota);
  } else {
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