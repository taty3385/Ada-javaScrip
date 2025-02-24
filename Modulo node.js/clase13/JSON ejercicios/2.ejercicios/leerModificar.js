// Ejercicio 2: Leer y Modificar un Archivo JSON
// Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos
// nuevamente.
// Instrucciones:
// • Crea un archivo llamado data.json con el siguiente contenido:
// • Crea un archivo llamado exercise2.js.
// • Lee el archivo data.json, modifica el campo age a un nuevo valor, y
// guarda el archivo modificado.

const fs = require("fs");

let data = fs.readFileSync("data.json", "utf-8"); // Lee el archivo data.json
if (!data) {  // Si el archivo no existe, crea un array vacío
  data = "[]"; // Crea un array vacío
  const datos = JSON.parse(data);// Convierte la cadena JSON a un objeto
  datos.push({ name: "Juan", age: 25 }); // Agrega un objeto al array
  fs.writeFileSync("data.json", JSON.stringify(datos)); // Guarda el archivo modificado
} else {
  const datos = JSON.parse(data);
  datos.forEach((dato) => {
    console.log(dato.name);
    console.log(dato.age);
  });
  // Modifica el campo age a un nuevo valor
  datos[0].age=21;
    fs.writeFileSync("data.json", JSON.stringify(datos)); // Guarda el archivo modificado
}
