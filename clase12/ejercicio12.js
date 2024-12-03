const prompt = require("prompt-sync")({ sigint: true });

/* Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente 
hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
de todos los números ingresados.*/

// let usuario = parseFloat(prompt("Ingrese un numero"));
// let suma = 0;
// while (usuario >= 0) {
//    usuario = parseFloat(prompt("Ingrese un numero"));
//    suma += usuario;

// }
// console.log(suma);

/*• Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
ingrese la correcta. La contraseña correcta es "1234"*/

//  let contraseña ;
// const contraseñaGuardada = 1234;

// do {
//     contraseña = parseFloat(prompt("Ingrese su contraseña"));
//     if (contraseña===contraseñaGuardada) {
//         console.log("Contraseña correcta");
//     } else{
//         console.log("Contraseña incorrecta");
//     }

// } while (contraseña!==contraseñaGuardada);

/* Ejercicio 3: Ciclo For 
Nuestra tarea es contar la cantidad de números impares que hay desde 
el número 0 hasta un número X (inclusive). Para esto, debes seguir los 
siguientes pasos:
1. Solicitar al usuario que ingrese un número X.
2. Inicializar una variable para contar los números impares.
3. Utilizar un ciclo for para recorrer los números desde 0 hasta X 
(inclusive).
4. Dentro del ciclo, verificar si el número es impar.
5. Si el número es impar, incrementar el contador de números 
impares.
6. Al finalizar el ciclo, imprimir en consola la cantidad de números 
impares encontrados. 
7. Utiliza el operador módulo (%) para verificar si un número es 
impar.
8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe 
imprimir: “La cantidad de números impares desde 0 hasta 10 
(inclusive) es: 5”*/

// let usuario = parseFloat(prompt("Ingrese un numero"));
// let numerosImpares = 0;

// for (let i = 0; i <= usuario; i++) {
//  if (i % 2 !== 0) {
//   numerosImpares++; // si se cumple la condicion se incrementa el contador en este caso numerosImpares
// console.log(`los numeros impares son:${i}`);

//   }
// }
// console.log( `total de numeros impares son : ${numerosImpares}`);

/*• Ejercicio 4: Ciclo For - Array 
Crear un programa que permita registrar las notas de varios estudiantes 
usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas 
de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por 
una utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas. */

// let notas = [];
// let notasEstudiantes = parseFloat(prompt("Ingrese la nota del estudiante"));
// for (let i = 1; i<5; i++){
// notasEstudiantes = parseFloat(prompt("Ingrese la nota del estudiante"));
// notas[i]=notasEstudiantes // se asigna la nota ingresada por el usuario a la posicion i del array notas
// }
// console.log(notas);

/*• Ejercicio 5: Uso de Arrays y Condicionales 
Crea un programa que solicite al usuario ingresar 5 nombres y los 
almacene en un array. Luego, solicita al usuario ingresar un nombre y 
verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
pasos el código si eso les facilita su desarrollo) */

// let nombres = [];
// let nombreUsuario = prompt("Ingrese un nombre");
// for ( let i=0 ;i <5; i++){
// nombreUsuario = prompt("Ingrese un nombre");
// nombres[i]=nombreUsuario; //accedo mediante el indice i y asigno el nombre ingresado por el usuario
// }
// let nombreBuscar = prompt("Ingrese un nombre a buscar");
// nombreBuscar= nombres.includes(nombreBuscar); // se busca el nombre ingresado por el usuario en el array nombres
// console.log(`los nombres ingresados son : ${nombres}`);
// console.log(` el nombre buscaso es${nombreBuscar}`);

/*• Ejercicio 6: Iguales a 10 pero menores de 1000 
Dada una matriz, recorrer sus valores y sumar solo los números que estén 
por encima o sean iguales a 10, pero menores que 1000*/

// let matriz = [
//   [10, 3, 2, 1, 7],
//   [5, 5, 10, 100, 4],
//   [5, 125, 10, 1020, 4],
//   [5, 5, 5097, 100, 4],
// ];

// let suma = 0;

// for (let fila = 0; fila < matriz.length; fila++) {
//   // recorro todas las filas
//   for (let col = 0; col < matriz[fila].length; col++) {
//     // recorro todas las columnas y verifico si el valor de la matriz es mayor o igual a 10 y menor que 1000
//     if (matriz[fila][col] >= 10 && matriz[fila][col] < 1000) {
//       suma += matriz[fila][col]; // si se cumple la condicion se suma el valor de la matriz
//     }
//   }
// }
// console.log(suma);

// for (let col = 0; col < matriz[0].length; col++) {
//   for (let fila = 0; fila < matriz.length; fila++) {
//     if (matriz[fila][col] >= 10 && matriz[fila][col] < 1000) {
//       suma += matriz[fila][col];
//     }
//   }
// }
// console.log(suma);

/*Ejercicio 7: Matriz 5x5 
Declara una variable que contenga una matriz de 5x5 llena de puros 
números enteros y positivos. Luego, escribe un algoritmo para sumar 
todos los números en la matriz*/

// let matriz = [
//   [10, 20, 30, 40, 50],
//   [5, 15, 25, 35, 45],
//   [3, 9, 18, 27, 36],
//   [1, 2, 3, 4, 5],
//   [7, 14, 21, 32, 70],
// ];

// let suma = 0;
// for (let fila = 0; fila < matriz.length; fila++) {
//   for (let col = 0; col < matriz[fila].length; col++) {
//     suma += matriz[fila][col];
//   }
// }
// console.log(suma);

/*• Ejercicio 8: Rojo y Verde 
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el 
método “push” en los Arrays. ¡Este método lo veremos en las próximas 
clases, pero si desean pueden investigarlo para resolver este desafío*/

// const matriz = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
// ];

// let diagonalRojo = [];
// let diagonalVerde = [];
// let sumaRojo = 0;
// let sumaVerde = 0;

// for (let fila = 0; fila < matriz.length; fila++) {
//   let valorRojo = matriz[fila][fila]; //recorre la diagonal y roja
//   console.log(matriz[fila][fila]);

//   let valorVerde = matriz[fila][matriz.length - 1 - fila]; // recorre la diagonal verdey le resta el indice  y la fila para recorrer la diagonal secundaria
//   diagonalRojo.push(valorRojo); // Agrega el valor de la diagonal principal
//   diagonalVerde.push(valorVerde); // Agrega el valor de la diagonal secundaria

//   sumaRojo += valorRojo; // Suma el valor de la diagonal principal
//   sumaVerde += valorVerde; // Suma el valor de la diagonal secundaria
// }

// console.log("Valores de la diagonal principal (rojo):", diagonalRojo);
// console.log("Suma de la diagonal principal (rojo):", sumaRojo);
// console.log("Valores de la diagonal secundaria (verde):", diagonalVerde);
// console.log("Suma de la diagonal secundaria (verde):", sumaVerde);

/*Ejercicio 9: Última aparición de un modelo de auto 
Se está realizando el desarrollo de una aplicación para control de 
gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro 
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una 
semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 
2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 
a) Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fila representa una semana, es decir, si nos 
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar 
que las matrices comienzan siempre en posición 0. 
b) La aplicación también tendrá una parte de estadísticas, para esto 
nos solicitan dar el total de un día en particular, por ejemplo del día 
3, acá también tengamos en cuenta lo que ocurre con las filas, ya 
que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el 
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por 
columnas para resolver este último punto? 
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el 
día que más gastos se realizaron.
✓ Posibles matrices para comprobar los resultados.*/

const matrizGastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // Semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // Semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // Semana 4
];

let gastoSemanal = [];
let totalDeGastosDia = [];
let totalGastosSemana = 0;
let totalGastoDia = 0;
let totalGastosMes = 0;
let GastoDelMes = [];
// let semana = parseFloat(prompt("Ingrese la semana del 1 al 4 :") - 1);
// let dia = parseFloat(prompt("Ingrese el dia del 1 al 4 :") - 1);

// for (
//   let fila = 0;
//   fila < matrizGastos[semana].length ; fila++) {
//   totalGastosSemana += matrizGastos[semana][fila];

// }
// gastoSemanal.push(totalGastosSemana);
// console.log(`Total de gasto de la semana es : ${gastoSemanal}`);

// for (let col = 0; col < matrizGastos.length; col++) { // recorro  las columnas
//   totalGastoDia += matrizGastos[col][dia]; // sumo los gastos del dia ingresado por el usuario
//  }
// totalDeGastosDia.push(totalGastoDia);
// console.log(` el total de gasto por dia es : ${totalDeGastosDia}`);

// for (let fila = 0; fila < matrizGastos.length; fila++) {
//   for (let col = 0; col < matrizGastos[fila].length; col++) {
//     totalGastosMes += matrizGastos[fila][col];
//   }
// }
// GastoDelMes.push(totalGastosMes);
// console.log(`el total de gastos del mes es : ${GastoDelMes}`);

/* es lo mismo recorrer x fila que por columna*/

// let semanaMayorGasto = 0;
// let mayorGasto = 0;

//  semana con mayor gasto */
// for (let fila = 0; fila < matrizGastos.length; fila++) { // recorro las filas
//   let gastoSemana = 0; // inicializo la variable gastoSemana
//   for (let col = 0; col < matrizGastos[fila].length; col++) { // recorro las columnas los datos
//     gastoSemana += matrizGastos[fila][col]; // sumo los gastos dia x dia de la semana

//   }
//   if (gastoSemana > mayorGasto) { // si el gasto de la semana es mayor al mayor gasto entonces se asigna el valor de la semana a la variable semanaMayorGasto
//     mayorGasto = gastoSemana;
//     semanaMayorGasto = fila;
//   }
// }

// console.log(`La semana con el mayor gasto es la semana ${semanaMayorGasto + 1} con un gasto de ${mayorGasto}`);

// dia con mayor gasto  //

let totalDia = 0;
let diaDeLaSemanaConMayorGasto=0
for (let col = 0; col < matrizGastos[0].length; col++) {
  let SumaxDia = 0;
  for (let fila = 0; fila < matrizGastos.length; fila++) {
    SumaxDia += matrizGastos[fila][col];
     }
    if (SumaxDia >totalDia ) {
      totalDia= SumaxDia;
      diaDeLaSemanaConMayorGasto = col;
  }
}
console.log(` el dia que mas gatos tuvo fue ${diaDeLaSemanaConMayorGasto +1} y su tota el de ${totalDia}`);


