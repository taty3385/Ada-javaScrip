/*• Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo.
Pista: Usa la fórmula:

 Formula=area=base*altura/2    */

// function calcularAreaTriangulo(base, altura) {
//   return (base * altura) / 2;
// }

// console.log(calcularAreaTriangulo(5, 4));

/*• Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor.*/

// const encontrarMayor = (num1, num2) => {
//   if (num1 > num2) {
//     return `El numero mayor es : ${num1}`;
//   } else {
//     return `El numero mayor es : ${num2}`;
//   }
// };
//   console.log(encontrarMayor(10,5));

/*• Ejercicio 3: Mensaje global y local
Declara una variable global llamada saludoGlobal con el valor "Hola desde 
el scope global". Luego, crea una función llamada mostrarMensaje que 
declare una variable local llamada saludoLocal con el valor "Hola desde el 
scope local" y que imprima ambos mensajes.*/

// const saludoGlobal= "Hola desde el scope global"

// function mostrarMensaje() {
//     const saludoLocal= "Hola desde el scope local"
//     return `${saludoGlobal} , ${saludoLocal}`
// }
//  console.log(mostrarMensaje());

/*• Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y 
devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
Usa una variable local para guardar el resultado.*/

// function esPar(num) {
//     if (num%2===0) {
//         return `el numero es par`
//     } else {
//          let esInpar= `el numero es impar`
//          return esInpar
//     }

// }
// console.log(esPar(5));

/*• Ejercicio 5: Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado*/

// function concatenarNombres(nombre , apellido) {
//     return `hola soy ${nombre} ${apellido} y estudio en ada`
// }

// console.log(concatenarNombres("jesica" , "Lopez"));

/*Ejercicio 6: Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba 
un número de horas como parámetro y devuelva el total en minutos.*/

// function convertirHorasAMinutos(horas) {
//     let resultado= horas*60
//     return `La convercion de ${horas} a minuitos es : ${resultado} minutos`
// }

// console.log(convertirHorasAMinutos(5));

/*Ejercicio 7: Mensaje según la hora 
Declara una variable global llamada horaActual (puedes asignarle un valor 
fijo). Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
"Buenas noches" en cualquier otro caso.*/

// let horaActual = 20;

// function mostrarSaludo() {
//   if (horaActual < 12) {
//     return "Buenos días";
//   } else if (horaActual < 18) {
//     return "Buenas tardes";
//   } else {
//     return "Buenas noches";
//   }
// }
// console.log(mostrarSaludo());

/*• Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que 
reciba una temperatura en grados Celsius y devuelva la temperatura en 
Fahrenheit.
Fórmula:*/

/*Fahrenheit = (Celsius * 9 /5) +32 */

// function convertirCelsiusAFahrenhei(Celsius) {
//     let resultado= (Celsius*9/5)+32
//     return `la convercion de ${Celsius} a Fahrenheit es ${resultado} `
// }
// console.log(convertirCelsiusAFahrenhei(10));

/*• Ejercicio 9: Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.*/

// let resultado=[]

// function contarHasta(num) {
//     for (let index = 1; index <= num; index++) {
//         resultado.push(index)

//     }
//     return resultado
// }
// console.log(contarHasta(10));

/*• Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un 
número y devuelva su factorial.
Fórmula del factorial:*/

function calcularFactorial(num) {
  let resultado = 1; // primero inicializo en uno para que en la primera vuelta no me de 0
  for (let i = num; i > 1; i--) {
    resultado *= i; // resultado se va a multiplicar por i luego en la segunda vuelta se va a multiplicar por i-1 y asi sucesivamente
  }
  return resultado;
}

console.log(calcularFactorial(4)); 

