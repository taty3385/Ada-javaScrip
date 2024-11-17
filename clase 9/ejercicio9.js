const prompt = require("prompt-sync")({ sigint: true });

/* • Ejercicio 1: 
Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales. */

// let num2 = parseFloat(prompt("ingrese otro numero"));

// if (num1 > num2) {
//   console.log("este es el numero mayor" + num1);
// } else if (num1 < num2) {
//   console.log("este el el numero mayor" + num2);
// } else if (num1 === num2) {
//   console.log("ingresaste dos numeros  iguales" +" " + num1);
// }

/*  Ejercicio 2: 
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes */

// const RangoMin= 1;
// const RangoMax=50;

// let num = parseFloat(prompt("ingrese otro numero :"));

// if(num > RangoMin && num<RangoMax){
//     console.log('el nunmero esta dertro del rango');

// }else{
//     console.log('el numero esta fuera del rango');

// }

// • Ejercicio 3:
// Declara dos variables booleanas condicion1 y condicion2. Pide al
// usuario que ingrese dos valores booleanos (true o false) y muestra el
// resultado de diversas combinaciones lógicas.
// const  condicion1= true
//  const condicion2= false

//  let valor1= prompt(" ingrese dos valores booleanos (true o false :");
//  let valor2= prompt(" ingrese dos valores booleanos (true o false :");

// console.log('convinacion del ord' , condicion1 || condicion2 ||valor1 || valor2 );
// console.log('condicion del not' , !condicion1 , !condicion2 , !valor1 ,!valor2 );
// console.log('convinacion del and' , condicion1 && condicion2 && valor1 && valor2) ;

// • Ejercicio 4:
// Declara una variable nombre y pide al usuario que ingrese su nombre.
// Verifica si el nombre ingresado es igual a tu nombre.

// const nombre= "tamara";
//  let UsuarioNombre=prompt("ingrese un nombre x favor ")

//  if(nombre===UsuarioNombre){
//     console.log("su nombre coincide ");

//  }else{
//     console.log("el nombre no coincide");

//  }

/*
 ? Ejercicio 5:
 ? Escribe un programa que pida al usuario que ingrese tres números y 
 ? determine cuál es el mayor de los tres.*/

//  let num1=parseFloat(prompt("ingrese su primer numero :"));
//  let num2=parseFloat(prompt("ingrese su segundo numero :"));
//  let num3=parseFloat(prompt("ingrese su tercer numero :"));

//  if(num1>num2 && num1>num3){
//     console.log("el numero mayor es" +" " + num1);

//  }else if (num2> num1 && num2>num3){
//     console.log( "el numero mayor es" +" " + num2);

//  }else{
//     console.log("el numero mayor es" +" " + num3);

//  }

/*
?Ejercicio 6: 
? Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
? edad. Muestra un mensaje personalizado según el caso.*/

// let edad= parseFloat(prompt("Ingresa tu edad :"));

// if( edad > 18 || edad === 18){
//     console.log("Usted es mayor de edad");

// }else{
//     console.log("Usted es menor de edad");
// }

/* 
?Ejercicio 7: 
? Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
?libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
?kg a libras, Pista: 2.20462*/

// let peso =parseFloat(prompt("Ingrese su peso para convertirlo a libras :"));
// const resultado= peso * 2.20462;

// console.log(resultado);

/*
? Ejercicio 8: 
?Pide al usuario que ingrese las longitudes de los tres lados de un 
?triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
?escaleno. (Investiga sobre los triángulos para determinar la formula
*/

// let longitud1 = parseFloat(prompt(" Ingrese la longitud del primer lado: "));
// let longitud2 = parseFloat(prompt("Ingrese la longitud del segundo lado: "));
// let longitud3 = parseFloat(prompt("Ingrese la longitud del primer lado: "));

// if (longitud1 >= 0 && longitud2 >= 0 && longitud3 >= 0) {
//   console.log("la longitud debe ser mayor a 0 ");
// } else if (longitud1 === longitud2 && longitud2 === longitud3) {
//   console.log("este es un triangulo equiltero");
// } else if (
//   longitud1 === longitud2 ||
//   longitud2 === longitud3 ||
//   longitud1 === longitud3
// ) {
//   console.log("este es un triangulo isoceles");
// } else {
//   console.log("este es un triangulo escaleno");
// }

/*
?• Ejercicio 9: 
?Define una constante PI con el valor de pi (3.14159). Pide al usuario 
?que ingrese el radio de un círculo y calcula su área y perímetro 
?utilizando la constante PI.
*/

// const pi = 3.14159;
// let RadioDeCirculo = parseFloat(prompt(" Ingrese el radio de un circulo: "));

// const calculoPerimetro = pi * RadioDeCirculo * 2;

// console.log("calculo de perometro" , calculoPerimetro);

// const calculoArea=pi *(RadioDeCirculo*RadioDeCirculo);
// console.log( "calgulo de area" , calculoArea);



/*
• Ejercicio 10: 
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error
*/

// let num=parseFloat(prompt("ingrese un numero del 1 al 7 :"));

// if (num>8 ){
//     console.log("el numero debe ser menor que 7");
    
// }else if(num === 1){
//     console.log("El dia es lunes")
// }else if(num === 2){
//     console.log("El dia es martes")
// }else if(num === 3){
//     console.log("El dia es miercoles")
// }else if(num === 4){
//     console.log("El dia es jueves")
// }else if(num === 5){
//     console.log("El dia es viernes")
// }else if(num === 6){
//     console.log("El dia es sabado")
// }else if(num === 7){
//     console.log("El dia es domingo")
// }else{
//     console.log("numero erroneo");
    
// }
