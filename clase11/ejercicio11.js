const prompt = require("prompt-sync")({ sigint: true });

/*
?Ejercicio 1: ¿Positivo, negativo o cero? 
?Consigna: 
?Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa 
?que le pida al usuario un número cualquiera. El programa deberá analizar si el 
?número ingresado es positivo, negativo o cero. Utiliza estructuras if para 
?resolverlo y muestra un mensaje explicativo en cada caso.*/

// let numero = parseFloat(prompt(" ingrese un numero : "));




// if (numero > 0) {
//   console.log(`el numero ingresado es positivo : ${numero}`);
// }else if(numero<0){
//     console.log(`el numero ingresado es negativo : ${numero}`);
// }else{
//     console.log(`el numero ingresado es  : ${numero}`);
// }


/*


? Ejercicio 2: Semáforo inteligente 
? Consigna:
? Vamos a programar un semáforo. Escribe un programa que le pida al usuario 
? ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color 
? ingresado, el programa debe imprimir un mensaje con la acción 
? correspondiente:
? • Rojo: "Alto, no puedes avanzar."
? • Amarillo: "Precaución, prepárate para avanzar."
? • Verde: "Avanza con seguridad."
? Si el usuario ingresa un color inválido, el programa debe mostrar un 
? mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
? Utiliza un switch para resolver este ejercicio*/

// let semasforo = prompt("ingrese uno de los colores de los semasforo :");

// switch (semasforo) {
//   case "rojo":
//     console.log( "Alto, no puedes avanzar.");
//     break;
//   case "amarillo":
//     console.log("Precaución, prepárate para avanzar.");
//     break;
//     case "verde":
//         console.log("Avanza con seguridad.");
//     break;
//  default:
//     console.log("Color no reconocido, ingresa rojo, amarillo o verde.");

// }

/*
? Ejercicio 3: ¿Sabes contar? 
? Consigna:
? Crea un programa que le pida al usuario un número positivo. El programa 
? deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
? Usa un ciclo for para realizar la tarea.*/

// let numeroPositivo=parseFloat(prompt("ingrese un numero positivo : "));

// for (let i = 1; i <= numeroPositivo; i++) {
//     console.log( `numero de vuelta es : ${i}`);

// }

/*
? Ejercicio 4: ¿Es par o impar? 
? Consigna:
? Los números pueden ser pares o impares. Escribe un programa que le pida al 
? usuario un número y determine si es par o impar. Muestra un mensaje 
? explicativo indicando qué significa cada caso*/

let numero=parseFloat(prompt("ingrese un numero : "));

let resultado= numero%2 === 0? "es par" :"es impar";
console.log( resultado);

// if (numero%2 ===0 ) {
//     console.log("el numero es par");

// }else{
//     console.log("el numero es impar");
// }

/*
? Ejercicio 5: Encuentra los números pares entre dos valores 
? Consigna:
? Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
? programa debe mostrar todos los números pares que se encuentran entre esos 
? dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
? los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
? programa debe mostrar un mensaje indicando que los valores son inválidos.*/

// let inicio = parseFloat(prompt("ingrese el numero de inicio :"));
// let final = parseFloat(prompt("ingrese el numero de final :"));

// if (inicio > final) {
//   console.log("los valores son inválidos");
// } else {
//   for (let i = inicio; i <= final; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

/*
 ? Ejercicio 6: La tabla de multiplicar 
 ? Consigna:
 ? Crea un programa que le pida al usuario un número y luego imprima su tabla de 
 ? multiplicar desde el 1 hasta el 10. Usa un ciclo for.
*/
// let numero = parseFloat(prompt("ingrese su numero :"));

// for (let i = 1; i <= 10; i++) {
//   const multiplicar = numero * i
//   console.log(multiplicar);

// }

/*
 ? Ejercicio 7: Calculadora simple 
 ? Consigna:
 ? Crea un programa que le pida al usuario dos números y una operación 
 ? matemática a realizar: suma, resta, multiplicación o división. Según la operación 
 ? ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
 ? ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
 ? Usa switch para resolverlo.*/

// let numero1 = parseFloat(prompt("ingrese su primer numero :"));
// let numero2 = parseFloat(prompt(" ingrese su segundo numero : "));
// let operacion = prompt("suma, resta , multiplicacion o divicion :");

// switch (operacion) {
//   case "suma":
//     console.log(numero1 + numero2);

//     break;
//   case "resta":
//     console.log(numero1 - numero2);

//     break;
//   case "divicion":
//     console.log(numero1 / numero2);

//     break;
//   case "multiplicacion":
//     console.log(numero1 * numero2);

//     break;

//   default:
//     console.log("Error , operación inválida");

// }

/*
?Ejercicio 8: Encuentra los múltiplos de un número 
?Consigna:
? Escribe un programa que le pida al usuario un número entero positivo y 
? muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
? para resolverlo.*/

// let numeroPositivo = parseFloat(prompt("ingrese un número entero positivo"));

// for (let i = 1; i <= 100; i++) {
//   if (i % numeroPositivo === 0) {
//     console.log(`soy multiplo ${i}`);
//   }
// }

/*
? Ejercicio 9: Cuenta regresiva para el despegue 
? Consigna:
? Crea un programa que simule la cuenta regresiva para el lanzamiento de un 
? cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al 
? final. Usa un ciclo for para realizar la cuenta regresiva*/

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
//   if (i === 0) {
//     console.log("¡Despegue!");
//   }
// }

/*
?Ejercicio 10: Adivina el número 
? Consigna:
? Crea un programa donde la computadora seleccione un número al azar entre 1 
? y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
? acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
? los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
? número secreto. Usa un for para resolver este ejercicio*/

// let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// console.log(numeroAleatorio);

// for (let i = 1; i <= 3; i++) {
//   let intento = parseFloat(prompt("ingrese su numero: "));
//   if (numeroAleatorio === intento) {
//     console.log("felicidades acertaste");
//     return
//   } else {
//     console.log("el numero es incorrecto");
//   }
// }
