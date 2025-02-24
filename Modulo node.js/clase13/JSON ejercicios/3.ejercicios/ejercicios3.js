// Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus
// Propiedades
// Objetivo: Convertir una cadena JSON a un objeto y acceder a sus
// propiedades.
// Instrucciones:
// • Crea un archivo llamado exercise3.js.
// • Define una cadena JSON que represente a un libro (incluye
// campos como title, author, y year).
// • Convierte la cadena JSON a un objeto y muestra cada
// propiedad en la consola.

const fs = require("fs");

const data = fs.readFileSync("bocks.json", "utf-8");
const libros = JSON.parse(data);

libros.forEach((libro) => {
  console.log(libro.title);
  console.log(libro.author);
  console.log(libro.year);
});

console.log(libros);
