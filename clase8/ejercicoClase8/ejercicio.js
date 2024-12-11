const prompt = require("prompt-sync")({ sigint: true });

/*
?  Ejercicio 1: Calcula el doble de un número 
? Enunciado:
? En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
? escribir un programa en JavaScript que:
? 1. Solicite al usuario que ingrese un número cualquiera.
? 2. Calcule el doble de ese número.
? 3. Muestre el resultado en la consola.
? Requisitos:
? • Utiliza la función prompt() para solicitar el dato al usuario.
? • Almacena el número ingresado en una variable.
? • Utiliza un operador aritmético para calcular el doble del número
*/

// let num1=parseFloat(prompt("ingrese su numero"));

// if(num1){
//     console.log(num1 * 2);

// }

/*
?Ejercicio 2: Verificar si un número es positivo, negativo o cero 
?Enunciado:
?En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
?programa en JavaScript que:
?1. Pida al usuario que ingrese un número.
?2. Verifique si el número es positivo, negativo o igual a cero.
?3. Muestre un mensaje indicando cuál es el caso.
?Requisitos:
?• Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
?verificaciones.
?• Usa parseFloat() para convertir la entrada del usuario a un número
*/

// let num1 = parseFloat(prompt("ingrese su numero"));

// if (num1 > 0) {
//   console.log(" el numero es positivo");
// } else if (num1 < 0) {
//   console.log(" el numero es negativo");
// } else {
//   console.log(" el numero es 0");
// }

/*
?Ejercicio 3: Suma de dos números ingresados por el usuario 
?Enunciado:
?Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
?aritméticos. Escribe un programa que:
?1. Pida al usuario que ingrese dos números.
?2. Sume ambos números.
?3. Muestre el resultado de la suma.
?Requisitos:
?• Utiliza prompt() para recibir los números.
?• Utiliza parseFloat() para convertir las entradas a números.
?• Almacena los resultados en variables adecuadas y muestra el resultado.
*/

// let num1 = parseFloat(prompt("ingrese primer numero"));
// let num2 = parseFloat(prompt("ingrese segundo  numero"));

// const suma = num1 +num2
// console.log(suma);

/*
? Ejercicio 4: Determinar si un número es par o impar 
?Enunciado:
?En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
?Debes escribir un programa que:
?1. Solicite al usuario que ingrese un número entero.
?2. Determine si el número es par o impar.
?3. Muestre un mensaje indicando si el número es par o impar.
?Requisitos:
?• Utiliza el operador módulo (%) para comprobar si el número es divisible 
?por 2.
?• Usa una estructura if-else para mostrar el mensaje adecuado.
*/ 

// let numEntero = parseFloat(prompt("ingrese numero entero"));

// if(numEntero % 2=== 0){
//     console.log("el numero es par");
    
// }else{
//     console.log("el numero es impar");
// }

/*
 ?Ejercicio 5: Saludo personalizado 
?Enunciado:
?Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de 
?texto y la función prompt(). Escribe un programa que:
?1. Solicite al usuario que ingrese su nombre.
?2. Muestre un saludo personalizado usando el nombre ingresado.
?Requisitos:
?• Utiliza prompt() para recibir el nombre del usuario.
? Muestra un mensaje utilizando concatenación de cadenas
 
 */

let nombre = prompt("ingrese su nombre ");
 
const saludo= 'hola ' + nombre +' espero que tenga un hermoso dia'
 console.log(saludo);
 