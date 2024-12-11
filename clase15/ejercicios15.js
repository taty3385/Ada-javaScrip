// • Ejercicio 1: Añadir personajes a una lista
// Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los
// personajes "Mario" y "Luigi" al final de la lista utilizando el método
// adecuado. Luego, muestra el array actualizado.

let videoJuegos = ["link", "zalda"];

let agregoPersonaje = videoJuegos.push("Mario", "Luigi");
console.log(videoJuegos);
console.log(agregoPersonaje); //devuelve cuantos personajes hay

//  • Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
// El último invitado no puede asistir. Elimina al último invitado y muestra
// quién fue eliminado y el estado actualizado de la lista.

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let eliminado = invitados.pop();
console.log(invitados);
console.log(eliminado);

//• Ejercicio 3: Agregar y eliminar a la fila de mascotas
// Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
// "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
// "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la
// fila y muéstrala. Finalmente, muestra la lista actualizada.

let filaMascota = ["Perro", "Gato", "Conejo"];
let agregarHamster = filaMascota.unshift("Hamster");
console.log(filaMascota);
let atiendoMaqscota = filaMascota.shift();
console.log("atendi a :", atiendoMaqscota);
console.log("lista actualizada :", filaMascota);

// • Ejercicio 4: Convertir una lista de palabras en una frase
// Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las
// palabras en una sola frase, separadas por un espacio, y muestra el
// resultado.

// let palabras = ["JavaScript", "es", "divertido"];

// let frase = palabras.join(" ");
// console.log("frase terminada es : ", frase);

// • Ejercicio 5: Buscar la posición de un elemento
// Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y
// muestra el índice del color "Azul" en la lista

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
let PosicionAzul = colores.indexOf("Azul");
console.log("psocicion del azul es : ", PosicionAzul);

// Ejercicio 6: Buscar la última posición de un elemento repetido
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última
// posición en la que aparece el número 7.

// let numeros= [2, 5, 7, 2, 8, 7];
// let buscador =numeros.lastIndexOf(7)
// console.log( "la posicion del ultimo numero es : " , buscador);

// Ejercicio 7: Verificar si una lista contiene un elemento
// Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si
// "Sushi" está en la lista y muestra un mensaje que confirme si está o no

let comida = ["Pizza", "Hamburguesa", "Tacos"];

let buscadorElementos = comida.includes("sushi");

const buscandor = () => {
  if (buscadorElementos === true) {
    return "el sushi esta enta lista de comida";
  } else {
    return "el sushi no esta enta lista de comida";
  }
};
console.log(buscandor());

// Ejercicio 8: Extraer una parte de una frase
// Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte
// "gatos" utilizando el método adecuado.

// let frase= "Los gatos son geniales";

// let extraerFrace=frase.slice(3,9)
// console.log(extraerFrace);

// • Ejercicio 9: Eliminar espacios innecesarios
// Tienes la siguiente cadena con espacios adicionales
// " Hola, mundo! "
// Elimina los espacios al inicio y al final y muestra la cadena resultante

// let oracion = " Hola, mundo! ";
// console.log(oracion.trim());

// • Ejercicio 10: Reemplazar una palabra en una frase
// Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por
// "verano" y muestra la frase actualizada.

let frase = "Me gusta el invierno";
let fraseRemplasada = frase.replace("invierno", "Verano");

console.log(fraseRemplasada);

//  • Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos.
// La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1. Agregar un nuevo producto "Impresora" al inventario usando el
// método adecuado.
// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje
// adecuado.
// 3. Eliminar el primer producto del inventario.
// 4. Mostrar la lista actualizada de productos en una sola cadena,
// separados por comas.

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
inventario.push("impresora");

const buscando = (prod) => {
  let buscando = inventario.includes(prod);
  if (buscando === true) {
    return `${prod} esta en tu lista`;
  } else {
    return ` ${prod} no  esta en tu lista`;
  }
};
console.log(buscando("tablet"));
console.log(buscando("Teclado"));

let eliminar = inventario.shift();
let cadenaDeString = inventario.join(" , ");
console.log(cadenaDeString);

// • Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1. Dividir la oración en palabras individuales.
// 2. Clasificar las palabras en dos categorías:
// ▪ Cortas (menos de 5 letras)
// ▪ Largas (5 letras o más)
// 3. Mostrar ambas listas de palabras clasificadas.
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

let oracion = "JavaScript es un lenguaje poderoso y versátil";

let dividirOraciones = oracion.split(" ");
console.log(dividirOraciones);

const contadorLetras = () => {
  let cortas = [];
  let largas = [];
  for (let i = 0; i < dividirOraciones.length; i++) {
    if (dividirOraciones[i].length < 5) {
      cortas.push(dividirOraciones[i]);
    } else {
      largas.push(dividirOraciones[i]);
    }

  }
  return { cortas, largas };
};
contadorLetras();

let resultado=contadorLetras()
console.log( "cortas : " , resultado.cortas);
console.log( "Largas : " , resultado.largas);

// • Simulador de una cola de atención al cliente 
// Simula una cola de atención al cliente donde los clientes llegan y son 
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
// bucle que los atiende de a uno. Realiza lo siguiente:
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo 
// por consola.
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando 
// un mensaje especial.
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

let clientes= ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

const clientesAtendidos=()=>{
    let atendidos=[]
    let totalAtendido=0
    for (let i = 0; i < clientes.length; i++) {
     
       if (clientes[i]!=="VIP") {
      atendidos[atendidos.length]=clientes[i]
        
     }else{
        console.log("Vip pase directamente");
        atendidos[atendidos.length]=clientes[i]
         
       }
       totalAtendido++
        
    }
    console.log(`Clientes atendidos: ${atendidos}`)
    console.log(`total atendidos: ${totalAtendido}`)
    return {totalAtendido , atendidos};
    
}
clientesAtendidos()