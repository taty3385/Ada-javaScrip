const prompt = require("prompt-sync")({ sigint: true });

/*
• Ejercicio 1 - Declarar dos variables: 
Nuestra tarea será declarar dos variables: una con el nombre edad y la 
otra con el nombre peso. Después deberás asignarle un valor.
Pista: Recordemos que para crear una variable debemos utilizar la 
palabra reservada "let", seguida del nombre con el cual luego le 
haremos referencia. */

// let nombre= "tamara";
// let edad= 36;

/*• Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su 
edad y su peso, y luego muestre un mensaje personalizado que incluya 
toda esta información.
Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad 
y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. 
Ahora nos toca pedir datos al usuario, por lo que usaremos promptsync para solicitar esta información.*/

// nombre=prompt("ingrese su nombre: ");
// edad=parseFloat(prompt("ingrese su edad:"));
// let pesoUsurio=prompt("ingrese su peso:");

// const respuesta= `hola ${nombre} su edad es de : ${edad} y su peso actual es de ${pesoUsurio}`

// console.log(respuesta)

/*
• Ejercicio 3 – Constantes / Validación de Edad:
Más adelante vamos a querer validar que nuestros encuestados sean de 
18 años de edad mínima y 99 años de edad máxima. 
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas 
en dos constantes (asignándoles los valores numéricos 18 y 99 
respectivamente). Por último, Deberás pedirle al usuario que ingrese su 
edad para validarla usando parseInt.
Desglosando el ejercicio deberás:
1. Crea una constante llamada EDAD_MINIMA y otra llamada 
EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 
y 99 respectivamente.
2. Pide al usuario que ingrese su edad.
3. Usa “parseInt” para convertir la entrada del usuario a un número 
entero.
4. Valida si la edad ingresada está dentro del rango permitido y 
muestra un mensaje adecuado.
Pista: Las constantes se declaran con la palabra reservada const y es 
buena práctica que sus nombres sean declarados siempre con letras 
mayúsculas. Utiliza parseInt para convertir la entrada del usuario a un 
número entero*/

//



/*• Ejercicio 4 – Tipo de Datos: 
Declarar 4 variables utilizando la palabra reservada let y asignarles 
valores según el tipo de dato que sugiera su nombre. Además, realizar 
operaciones y validaciones adicionales sobre estos valores.
Pasos a seguir:
Declaración de Variables:
1. Declara una variable llamada verdadero y asígnale un dato 
de tipo booleano (true o false).
2. Declara una variable llamada texto y asígnale un string de tu 
elección (puedes usar cualquier mensaje que prefieras).
3. Declara una variable llamada numero y asígnale un dato 
numérico (puedes usar cualquier número entero o decimal).
4. Declara una variable llamada nada y asígnale un valor que 
represente la ausencia de valor en JavaScript.
Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable 
número, por ejemplo, suma o resta con otro número de tu 
elección.
2. Concatena el “string” de la variable texto con otro mensaje 
adicional.
3. Verifica si la variable “verdadero” es true o false y muestra un 
mensaje diferente según el resultado.
4. Implementa una condición para verificar si la variable nada 
es null y muestra un mensaje si es así.*/

// const verdadero = true;
// const texto= "hola";
// const numero= 30;
// const nada= null

// const suma= numero +85;
// const mensaje= `${texto} bienvenidos a programacion`
// console.log(verdadero);
// const negarTrue=(!verdadero)
// console.log(negarTrue);

// if ( nada === null ){
//     console.log( "la variable es nula");

// }

/*
• Ejercicio 5 – Operadores: 
Vimos cómo declarar una variable y asignarle un valor, y probablemente 
surgió la siguiente pregunta: ¿para qué sirve almacenar datos en 
variables? Las variables nos permiten reutilizar el dato asignado en la 
misma con solo invocar su nombre.
También, algo muy importante, así como podemos hacer operaciones 
matemáticas como sumar (+) o restar (-) números, podemos hacer lo 
mismo con las variables que las referencian.
Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara y asigna un valor numérico a dos variables: 
primerNumero y segundoNumero.
Operaciones Matemáticas:
2. Declara las siguientes variables: resultadoSuma, 
resultadoResta, resultadoMultiplicacion, resultadoDivision.
3. Asigna a cada una de estas variables el resultado de la suma, 
resta, multiplicación y división de las variables primerNumero 
y segundoNumero.
Mostrar Resultados:
1. Utiliza console.log(nombreDeLaVariable) para imprimir cada 
uno de los resultados y ver cómo se ven los mismos.
Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" 
seguida del nombre al cual vamos a hacer referencia.
Pista 2: Para asignar el valor a una variable utilizamos el operador "=" 
seguido del valor que queremos asignarle.*/

// const nuemero1 = 18;
// const numero2 = 35;
// let resultadoSuma = nuemero1 + numero2;
// console.log(resultadoSuma);

// let resultadoResta = nuemero1 - numero2;
// console.log(resultadoResta);

// let resultadoMultiplicacion = nuemero1 * numero2;
// console.log(resultadoMultiplicacion);

// let resultadoDivicion = nuemero1 / numero2;
// console.log(resultadoDivicion);

/*Ejercicio 6 - Comparaciones y Operadores Lógicos: 
Declara dos variables con valores numéricos. Utiliza operadores de 
comparación y lógicos para verificar si ambos números son mayores que 
10 y muestra el resultado en la consola.
Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara dos variables y asígnales valores numéricos de tu 
elección.
Operadores de Comparación y Lógicos:
2. Utiliza los operadores > (mayor que) y && (y lógico) para 
verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:
3. Utiliza console.log() para mostrar el resultado de la 
comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" 
seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, 
===, !==. El operador lógico "&&" (y lógico) se utiliza para combinar 
condiciones y todas deben cumplirse para que el resultado sea 
verdadero*/

// let numero1 = 10;
// let numer2 = 20;

// if (numero1 >= 10 && numer2 > 10) {
//   console.log("el numero es mayor a 10");
// } else {
//   console.log("el numero es menor");
// }


/*• Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
iniciales y luego intercambia sus valores. Muestra los valores antes y 
después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras.*/

// let valor="hola"
// console.log(valor);

// valor= "chau"
// console.log(valor);


/*
Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que 
convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
La fórmula de conversión es: 
Pide al usuario que ingrese la temperatura en Celsius y muestra el 
resultado en Fahrenheit.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32;*/

// let Celsius=parseFloat(prompt(" ingrese los grados a celsius: "));
// let respuesta=Celsius*9/5 +32;

// console.log(respuesta);


/*
• Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de 
Masa Corporal (IMC). El IMC se calcula con la fórmula: 
 
 
 
Pide al usuario que ingrese su peso y su altura, y muestra el IMC 
calculado.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let imc = peso / (altura * altura);*/

// let peso=parseFloat(prompt("ingrese su peso :"));
// let altura=parseFloat(prompt("ingrese su altura : "));

// let imc=peso/(altura*altura)

// console.log(imc);

/* 
Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el 
precio final de un producto después de aplicar un descuento. Pide al 
usuario que ingrese el precio original y el porcentaje de descuento, y 
muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/

// let precioOriginal=parseFloat(prompt("ingrese el precio actual :"));
// let porcentajeDescuento=parseFloat(prompt("ingrese el porcentaje :"));

// let montoDescuento=precioOriginal*(porcentajeDescuento/100);
// console.log(montoDescuento);
