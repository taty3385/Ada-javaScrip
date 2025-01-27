// Ejercicio 3: ¡Sumemos dos números!
// Consigna:
// Tu tarea es escribir un programa interactivo que permita al usuario
// ingresar dos números y calcule su suma. Este ejercicio te ayudará a
// practicar el uso del módulo readline para leer entradas del usuario en la
// consola.
// Requisitos del programa:
// 1. Usa el módulo readline para crear una interfaz interactiva.
// 2. Pide al usuario que ingrese dos números, uno a la vez.
// 3. Calcula y muestra la suma de los dos números.
// 4. Finaliza el programa con un mensaje de agradecimiento.
// Indicaciones:
// 1. Crea un archivo llamado app.js.
// 2. Usa readline.createInterface para manejar la entrada y salida del
// usuario.
// 3. Utiliza callbacks para procesar las respuestas del usuario.
// 4. Ejecuta el programa y prueba ingresando diferentes valores.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("infrese el primer numero:", (numero1) => {
  rl.question("ingrese el segundo numero:", (numero2) => {
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log(`la suma de los numeros es: ${suma}`);
  });
});
