// conjuntos de elementos o datos(no debeb ser obligatoriamente del mismo tipo) que se encuentran agrupados en una sola variable.

let colores= ["rojo", "verde", "azul", "amarillo", "naranja", "violeta", "rosa"]; // array con strings
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array con numeros
let booleanos = [true, false, true, false, true]; // array con booleanos
let mesclado = ["hola", 1, true, "mundo", 2, false ,colores]; // array con diferentes tipos de datos

// mostramos array completo 
console.log(numeros);

//acceder a datos especificos dentro de un array .

console.log(colores[1]); // accedemos al primer elemento del array

//array dentro de array 
console.log(mesclado[6][2]); // accedemos al tercer elemento del array que esta dentro del array mesclado en este caso es el azul 

