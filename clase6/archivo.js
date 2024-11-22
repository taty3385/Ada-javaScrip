// ejercicio 1 fiambreria
const prompt = require("prompt-sync")();

// datos que ingresa el usuario
//   const temperatura=prompt(" ingrese la temperatura");
//   const lluvia= prompt("Esta lloviendo");
//   const HoraActual=prompt("Horario actual");
//   const CantidadDeQueso=prompt("Que cantidad de queso va a llevar");
//   const LlevaDinero=prompt("va a pagar ");

// datos fijos
//   const HoraApertura=9
//   console.log(HoraApertura);

//   const HoraCierre=23
//   console.log(HoraCierre);

//   const deudaMonica=5
//   console.log(deudaMonica);
//   console.log(5 )

// ! La diferencia es que  el valor que tiene la variable puede cambiar si es necesario y el valor si se pone en el console.log siempre va a hacer el mismo

/* 
  ? Ejercicio 2 - Comparación de Tres Números: Escribe un programa 
  ? que pida al usuario tres números y determine cuál es el mayor de los 
  ? tres. Muestra el número mayor en la consola.
  ? Pista: En este ejercicio utiliza if, else if y else. También no olvides 
  ? usar “let” para definir variables.
  ? Pista 2: Investiga qué es parseFloat, ya que este ejercicio lo 
  ? necesitarás.
*/

// let num1 = parseFloat(prompt("Ingresa el primer número:"));
// let num2 = parseFloat(prompt("Ingresa el segundo número:"));
// let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// if (num1>num2 && num1>num3){
//     console.log(`el numero  mayor es ${num1}`);

// }else if(num2>num1 && num2> num3){
//     console.log(`el numero  mayor es ${num2}`);
// } else{
//     console.log(`el numero mayor es ${num3}`);
// }

/*
 ? Ejercicio 3 - Calculadora Simple: Escribe un programa que pida al 
?usuario dos números y una operación (suma, resta, multiplicación o 
?división). Luego, realiza la operación indicada y muestra el resultado en 
?la consola.
?Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides 
?usar “let” para definir variables.
?Pista 2: Investiga que es parseFloat, ya que este ejercicio lo 
?necesitaras.
*/

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("ingresa la operacion deseada ");

if (operacion === "suma") {
  console.log(num1 + num2);
} else if (operacion === "resta") {
  console.log(num1 - num2);
} else if (operacion === "multiplicacion") {
  console.log(num1 * num2);
} else if (operacion === "division") {
  console.log(num1 / num2);
} else {
  console.log("valor no valido");
}

/*
? parseFloat() =Es una función en JavaScript que se utiliza para convertir una cadena de texto (string) en un número de punto flotante (decimal). Esta función analiza el valor de la cadena y devuelve el primer número que puede extraer de ella. 
*/