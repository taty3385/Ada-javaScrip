// Ejercicio 1: ¿Quién puede entrar al parque?
// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.
// Consigna:
// • Usa un bucle for y condicionales.
// • Usa un array como entrada de la función.
// • Devuelve el número de personas que cumplen con los requisitos.
let edades = [10, 15, 17, 35, 65, 12, 59];

const personasQuePuedenEntrar = (edades) => {
  let personas = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 12 && edades[i] < 60) {
      personas++;
    }
  }
  return personas;
};
console.log(personasQuePuedenEntrar(edades)); // 4

// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
// • Usa un bucle for...in.
// • Usa objetos y arrays.

let menu = { Ensalada: 15, sopa: 8, Carne: 25, Pasta: 18 };

const platosMenorA20 = (menu) => {  // se crea una funcion que recibe un objeto
  let platos = []; // se crea un array vacio
  for (let plato in menu) { // creo una variable plato que recorre el objeto menu y me trae los valores de las propiedades
    if (menu[plato] < 20) { //menu[plato] me trae los valores de las propiedades del objeto menu y los compara con 20
      platos.push(plato); // si el valor es menor a 20 lo agrega al array platos
    }
  }
  return platos;
};

console.log(platosMenorA20(menu)); 

// Ejercicio 3: Ordenando números
// Crea una función que reciba un array de números y devuelva un nuevo
// array con los números ordenados de menor a mayor.
// Consigna:
// • Usa el método sort().

// let numeros = [5, 2, 9, 1, 7];

// const ordenarNumeros = (numeros) => {
//   return numeros.sort((a, b) => a - b);
// };

// console.log(ordenarNumeros(numeros)); // [1, 2, 5, 7, 9]

// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

// let texto = "Hola Mundo";

// const contarVocales = (texto) => {
//   let vocales = 0;
//   for (let i = 0; i < texto.length; i++) {
//     if (
//       texto[i].toLowerCase() === "a" ||
//       texto[i].toLowerCase() === "e" ||
//       texto[i].toLowerCase() === "i" ||
//       texto[i].toLowerCase() === "o" ||
//       texto[i].toLowerCase() === "u"
//     ) {
//       vocales++;
//     }
//   }
//   return vocales;
// };

// console.log(contarVocales(texto)); // 4

// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las 
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string.

let nombre = "juan perez gomez";

const iniciales = (nombre) => { 
  let iniciales = nombre.split(" ").map((nombre) => nombre[0].toUpperCase());
  return iniciales.join("");
}   

console.log(iniciales(nombre)); // JPG


// Ejercicio 6: Calculadora de promedio 
// Escribe una función que reciba un array de números y devuelva el 
// promedio.
// Consigna:
// • Usa un bucle for para sumar los números.
// • Divide la suma total entre la cantidad de elementos del array.
// Ejemplo:


let calificaciones= [8,9,10,7,6];

const promedio = (calificaciones) => {
let cantidad=0
for (let i = 0; i < calificaciones.length; i++) {
 cantidad+= calificaciones[i]


}
return( cantidad /calificaciones.length);
 

}
 console.log(promedio(calificaciones));

//  Ejercicio 7: Filtrar palabras largas 
// Escribe una función que reciba un array de palabras y un número, y 
// devuelva las palabras que tienen más caracteres que el número dado.
// Consigna:
// • Usa el método filter().
// • Usa una función flecha para simplificar el código.
// Ejemplo:
 
let palabras =["javaScrip","html", "css" , "nodejs"]

const PalabrasLargas=( array, numero)=>{
 const Palabras= array.filter(palabra=>palabra.length>numero);
  return Palabras
 }

console.log(PalabrasLargas(palabras, 5));

// Ejercicio 8: Contador de letras 
// Crea una función que reciba una cadena de texto y una letra, y devuelva 
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

// let texto="Programar es divertido"

// const contadorLetras=(texto , letra )=>{
//   let sumaLetras= 0
// for (let i = 0; i < texto.length; i++) {
// if (texto[i] === letra.toLowerCase() ) {
//     sumaLetras++
     
//     }
//  return `la letra aparece ${sumaLetras}`

// }
// }
// console.log(contadorLetras(texto, "w" ));


// Ejercicio 9: Números únicos 
// Escribe una función que reciba un array de números y devuelva un nuevo 
// array sin números repetidos.
// Consigna:
// • Usa el objeto Set para eliminar duplicados.
// • Convierte el Set a un array usando el operador spread (...)


let numeros= [1,2,3,2 ,4 ,5 ,1]

const numerosUnicos=(array )=>{
  return [...new Set(array)] // el Operador spred realiza una copia de los elementos de un array  y los pone en otro array y el set elimina los elementos repetidos
}

console.log(numerosUnicos(numeros));


//* Ejercicio 10: Invertir palabras 
//* */ Crea una función que reciba una cadena de texto y devuelva otra cadena 
//* con las palabras en orden inverso.
//* Consigna:
//* • Usa el método split() para separar las palabras.
//* • Usa el método reverse() para invertir el array.
//* • Usa el método join() para unir las palabras en una nueva cadena.


let texto="Programar es divertido"
const invetir=(texto)=>{
return texto.split(" ").reverse().join(" ")
}

invetir(texto)
console.log(invetir(texto));