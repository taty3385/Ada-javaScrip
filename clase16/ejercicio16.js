// • map(): Ideal para transformar los elementos de un array en uno nuevo.
// • filter(): Perfecto para seleccionar elementos que cumplen con una condición.
// • find(): Para localizar el primer elemento que satisface un criterio específico.
// • reduce(): Una poderosa herramienta para resumir o acumular datos en un único
// valor.
// • forEach(): Útil para recorrer elementos sin modificar el array

// • Ejercicio 1: Crea un nuevo array con los cuadrados de los números
// Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es
// crear una nueva lista donde cada número de la lista original se haya
// transformado en su cuadrado. Por ejemplo, el número 2 debería
// convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime
// la nueva lista.

// let numeros=  [2, 4, 6, 8];

//  let cuadradosDenumeros=numeros.map((num)=>{
// return num*num
// })

// console.log(cuadradosDenumeros)

// Ejercicio 2: Filtra los números pares de una lista
// Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y
// guardar únicamente los números pares en una nueva lista. Los números
// pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez
// que hayas creado la nueva lista, muéstrala en la consola.

// let numeros= [1, 2, 3, 4, 5, 6];

// const numerosPares=numeros.filter((num)=>{
//     return num%2===0
// })

// console.log(numerosPares)

// Ejercicio 3: Encuentra el primer número mayor a 10
// Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer
// número de la lista que sea mayor a 10. Recuerda que el resultado debe ser
// únicamente el primer número que cumpla esta condición, no todos los
// números que lo hagan.

// let numeros=  [5, 8, 12, 20, 3];

// let numeroMayor=numeros.find((num)=>{
//     return num >= 10
// })

// console.log(numeroMayor);

// Ejercicio 4: Calcula la suma total de los números
// Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
// sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al
// finalizar, imprime el total en la consola.

// let numeros = [1, 2, 3, 4];

// let suma = numeros.reduce((num, acum) => {
//   return acum + num;
// });

// console.log(suma);

// • Ejercicio 5: Recorre una lista e imprime cada elemento
// Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es
// recorrer la lista y mostrar el nombre de cada fruta en la consola, una por
// una

// let frutas = ["manzana", "banana", "cereza"];

// let recorrer = frutas.forEach((fruta) => {
//   console.log(fruta);
// });
// console.log(recorrer);

// • Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
// sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!"

// let palabras=['hola', 'mundo', 'javascript'];

// const prefijoSufijo= palabras.map((palbra)=>{
//     return "¡" + palbra + "!"
// })
// console.log(prefijoSufijo);

// Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos
// quedarnos solo con los nombres que comiencen con la letra 'A'. Por
// ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza
// con 'L'.

// let nombres= ['Ana', 'Luis', 'Andrea', 'María'];

// const filterNombre=nombres.filter((nombre)=>{
//     return nombre.charAt(0) === "A"
// })

// console.log(filterNombre);

// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
// saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
// devolverlo.

// let nombres = ["Carlos", "Daniel", "Laura", "Ana"];

// const Buscador = nombres.find((nom) => {
//   return nom.toLocaleLowerCase() === "laura";
// });

// console.log(Buscador);

// • Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
// Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos
// saber cuántas letras hay en total entre todas las palabras. Por ejemplo,
// 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería
// ser 15.

// let palabras = ["sol", "luna", "estrella"];

// let contadorDeletras = palabras.reduce(( acum , palabra) => {
//   return acum + palabra.length;
// }, 0);
// console.log(contadorDeletras);

// Ejercicio 10: Construye una frase a partir de una lista de palabras
// Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una
// frase completa concatenando cada palabra en orden, separadas por
// espacios. Al final, deberíamos obtener el texto 'Me gusta aprender
// JavaScript'.

let frase = ["Me", "gusta", "aprender", "JavaScript"];

let fraseCompleta = frase.reduce((acum, elemen) => {
  return acum + " " + elemen;
});
console.log(fraseCompleta);

// • Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis',
// 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
// o Primero, filtra los nombres que tengan menos de 5 letras.
// o Luego, transforma los nombres resultantes para que estén en
// mayúsculas.
// o Finalmente, construye una frase que diga: "Los nombres
// seleccionados son: [nombres]", donde [nombres] sea la lista
// resultante unida por comas.
// Al final, imprime la frase en la consola

let personas = ["Lucía", "Ana", "María", "Luis", "José", "Pablo"];

// const filterNombre=personas.filter((elemen)=>{
//     return elemen.length >=5

// })
//  const nombreMayuscula=filterNombre.map((elemen)=>{
//      return elemen.charAt(0).toUpperCase() + elemen.slice(1)
//  })

//   const fraseFinal=nombreMayuscula.reduce((acum, elemen)=>{
//       return acum + ", " + elemen
//   })

// console.log("Los nombres seleccionados son: " + fraseFinal);

// Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de
// objeto:

// Queremos:
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.
// o Obtener solo los nombres de esos productos.
// o Calcular el precio total sumando los precios de los productos
// seleccionados.
// o Imprime el total y los nombres de los productos seleccionados en la
// consola.

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Teclado", price: 50 },
  { name: "Monitor", price: 200 },
  { name: "Audífonos", price: 75 },
];

const precioMayor = products.filter((product) => {
  return product.price >= 100;
});
const accesoNombre = precioMayor.map((elemen) => {
  return elemen.name;
});
console.log("los productos mayores a 100 son :" + accesoNombre.join(" , "));

const CalculoPrecio = precioMayor.reduce((acum, elemen) => {
  return acum + elemen.price;
}, 0);
console.log(
  " el precio total de los productos son :" +
    CalculoPrecio +
    " " +
    "ellos son :" +
    accesoNombre
);

// • Encuentra la película más corta y analiza los títulos largos
// Supón que tienes una lista de películas con su duración en minutos:
const movies = [
  { title: "El Señor de los Anillos", duration: 200 },
  { title: "Inception", duration: 148 },
  { title: "Matrix", duration: 136 },
  { title: "Toy Story", duration: 81 },
  { title: "Coco", duration: 105 },
];
// Queremos:
// o Encontrar la película más corta en duración.
// o De las películas restantes, quedarnos con aquellas cuyo título tenga
// más de 10 caracteres.
// o Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola:
// o El título de la película más corta.
// o La lista de títulos largos en minúsculas.

const peliculas = movies.reduce((min, elemen) => {
  return elemen.duration < min? elemen.duration :min
},movies[0].duration);
console.log("La pelicula de menor Duracion es :" + peliculas);


const peliculasLargas = movies.filter(movie => movie.title.length >= 10)

//De las películas restantes, quedarnos con aquellas cuyo título tenga
// más de 10 caracteres.
const obtenerTitulo=peliculasLargas.map(elemen=> elemen.title).join(" , ")


console.log("el titulo mayor a 10 caracteres es :" + obtenerTitulo);

// El título de la película más corta.
const peliculaCorta=movies.reduce((min , elemen)=>{
  return elemen.title < min ? elemen.title : min
},movies[0].title)
console.log("la pelicula mas corta es :" +peliculaCorta);

// La lista de títulos largos en minúsculas.

const titulosCortos=movies.filter(movie=>movie.title.length<10).map(movie=>movie.title)
console.log( "los titulos mas cortos son : " + titulosCortos.join(","))


