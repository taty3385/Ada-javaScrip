// 3. En gestionEstudiantes.js:
// o Importa el array desde estudiantes.js.
// o Muestra en la consola los nombres de todos los estudiantes.
// o Calcula y muestra el promedio de notas de un estudiante
// específico.
// o Agrega un nuevo estudiante al array y muestra el array
// actualizado en formato JSON


const fs = require("fs");
const { estudiantes } = require("./estudiantes");
const { error, log } = require("console");

const nombresAlumnos = estudiantes.map((estudiante) => { // Muestro los alumnos por consolas
  return estudiante.nombre;
});

const alumno = "Juan";  // declaro una variable juan para luego buscarlo en el array

const buscador = estudiantes.find((estudiante) => { // busco el alumno juan en el array
  return estudiante.nombre === alumno; // si el nombre del estudiante es igual a juan
}); // me devuelve el objeto completo

if (buscador) { // si el objeto buscador es verdadero
  const sumaDeNotas = buscador.notas.reduce((acum, nota) => { // sumo las notas del alumno
    return acum + nota; // acumulo las notas
  }, 0); // empiezo en 0
  const promedio = sumaDeNotas / buscador.notas.length; // calculo el promedio
  console.log("el promedio de " + " " + alumno + " " + "es" + promedio);
}
console.log("el usuario no esta diponible");

const nuevoEstudiante = { // creo un nuevo estudiante
  nombre: "ale",
  edad: 33,
  curso: "Fullstack",
  notas: [10, 10, 10],
};

estudiantes.push(nuevoEstudiante) // agrego el nuevo estudiante al array
const estudianteStringifY= JSON.stringify(estudiantes , null ,2)  // convierto el array en un string osea en un json


fs.writeFile('./estudiantes.js' , estudianteStringifY , (error)=>{ // escribo en el archivo de estudiantes paso el parametro de estudiantesStringify para que lo escriba en el archivo y paso el error
  if(error){ // si hay un error muestro un mensaje de error
    console.log("error al escribir el archivo", error);
    return
    
  }
  console.log("actualizado correctamente"); // si no hay error muestro un mensaje de actualizado correctamente
  
})

