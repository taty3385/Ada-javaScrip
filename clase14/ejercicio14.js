const prompt = require("prompt-sync")({ sigint: true });

/*• Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final.*/

// let precio = parseFloat(prompt("Ingrese el precio del producto"));
//  let iva= parseFloat(prompt("Ingrese el precio del producto"))

// const CalcularPrecio=(precio , iva)=>{
//     let porcentaje= precio * iva /100
//     let resultadoFinal= precio + porcentaje
//     return  resultadoFinal
// }

// console.log(CalcularPrecio(precio , iva));

/*Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio.*/

// const calcularPromedio = () => {
//     let sumaCalifiacion = 0;
//   for (let i = 0; i < 5; i++) {
//    let usuario = parseFloat(prompt("Ingrese su  calificacion :"));
//     sumaCalifiacion += usuario;
//     }
//     return sumaCalifiacion /5
// };

//  console.log(calcularPromedio())

/*Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
adolescente, adulto o adulto mayor.*/

// let edadUsuario = prompt("Ingrese su  edad :");

// const Edades = () => {
//   if (edadUsuario <= 12) {
//     return " usted es un niño";
//   } else if (edadUsuario <= 18) {
//     return" usted es un adolecente";
//   } else if (edadUsuario<=60) {
//     return  " usted es un adulto"
//   } else{
//      return"usted es un adulto mayor"
//   }
// };
// console.log(Edades(edadUsuario));

/*• Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.*/

//

/*Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
para verificar y mostrar si el auto es de origen nacional o importado. Considera 
que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen 
nacional.
✓ Solicita al usuario que ingrese la marca de un auto.
✓ Utiliza una función flecha para determinar si la marca ingresada 
corresponde a un auto de origen nacional o importado.
✓ Muestra un mensaje indicando si el auto es de origen nacional o 
importado, basado en la marca ingresada por el usuario.*/

// let marca = prompt("Ingrese la marca de  su auto :");
//  let mayus= marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase()

// const origenAuto=(marca)=>{
//  if (marca == "Chevrolet" ||marca == "Ford" ||marca == "Fiat"){
//   return `su marca es de origen nacional`
//  } else{
//   return `su marca es de origen internacional`

//  }
// }
//  console.log(origenAuto(mayus));

//charAt(0) obtiene el caracter que le pidas segun su posicion  en este caso es el cero y obtendra la primer letra y .toUpperCase() la transformara en mayuscula

//slice(1) se utiliza para extraer una sección de una cadena de texto o de un array en este caso es en la posicion 1 en adelante

/* Ejercicios de Objetos:
• Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✓ Recibe por parámetro la cantidad de horas.
✓ Resta a su energía (this.energia) la cantidad de horas x 5.
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola.*/

// const deportista = {
//   nombre: "guillermo",
//   energia: 100,
//   experiencia: 2,
//   entrenarHoras: function (horas) {
//     this.energia -= horas * 5;
//     this.experiencia += horas * 2;
//     return ` la energia que gasto es : ${this.energia} y adquirio: ${this.experiencia}`;
//   },
// };
// console.log(deportista.entrenarHoras(1));
// console.log(deportista.entrenarHoras(2));
// console.log(deportista.entrenarHoras(3));

/*• Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado*/

// const libro1 = {
//   titulo: "Cien años de soledad",
//   autor: "Gabriel García Márquez",
//   anioPublicacion: 1967,
// };

// const libro2 = {
//   titulo: "Don Quijote de la Mancha",
//   autor: "Miguel de Cervantes",
//   anioPublicacion: 1605,
// };

// const mostrarLibro = (libros) => {
//   let muestraDeLibros={        // armos mi objeto vacio que va a recibir un array
//     titulo:[],
//     autor:[],
//     anioPublicacion:[]
//   }
//   for (let i = 0; i < libros.length; i++) {
//    muestraDeLibros.titulo.push(libros[i].titulo)   // subo los libros y accedo a cada propiedad x su indice y lo pusheo
//    muestraDeLibros.autor.push(libros[i].autor)
//    muestraDeLibros.anioPublicacion.push(libros[i].anioPublicacion)
//   }
//  return muestraDeLibros // retorno los libros  y muestro el objeto ya armadado
// };
// console.log(mostrarLibro([libro1,libro2]));

/*Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La 
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo 
en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se 
ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado, 
deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá 
mostrar el string “Back End” en lugar del número.*/

// const backEnd = (num, num1) => {
//   let resultado=[]
//   for (let i = 1; i <= 100; i++) {
//     if (i % num === 0 && i % num1 === 0) {
//       resultado.push("backend", i);
//     } else if (i % num === 0) {
//       resultado.push("back", i);
//     } else if (i % num1 === 0) {
//       resultado.push("end", i);
//     } else {
//       console.log(i);
//     }
//   }
//   return resultado
// };

// console.log(backEnd(2, 3))

/*• Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos. 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo.
Datos Iniciales:
✓ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad.
Funcionalidad:
✓ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string).
✓ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo.
✓ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N).
✓ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente.*/

let modelosAutos = ["fiat", "peugeot", "renaul", "volvagen", "ferrari", "renaul", "fiat"];

const ultimaAparicionModeloAuto = (modelo) => {
  let posicion = [];
  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) {
        console.log(modelosAutos[i]);
        
      posicion.push(i + 1);
    }
  }
  if (posicion.length === 0) {
    return `El modelo no está presente`;
  }
  return posicion[posicion.length - 1]; // me va a devolver la ultima posicion
};

console.log(ultimaAparicionModeloAuto("renaul"));
console.log(ultimaAparicionModeloAuto("fiat"));
console.log(ultimaAparicionModeloAuto("toyota"));

/*• Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
debe hacerse manualmente*/

// const floresFavoritas = () => {
//   let favoritas = [];
//   let contador = 0;
//   for (let i = 0; i < 3; i++) {
//     let usuario = prompt("Ingrese su flor favorita:");
//     favoritas[favoritas.length] = usuario; // agrego las flores al array  favoritas.length me va a dar la posicion de la ultima flor y se va = a usuario cada vez que se repita el for
//   }
//   let usuarioFlor = prompt(
//     "Ingrese una flor para verificar si esta en sus favoritas:"
//   );
//   if (favoritas.includes(usuarioFlor)) {
//     contador++;
//     return `usted menciono ${contador} flores ${usuarioFlor}  de sus favoritas`;
//   } else return `usted no menciono ${usuarioFlor} en sus flores favoritas`;
// };

// console.log(floresFavoritas());
