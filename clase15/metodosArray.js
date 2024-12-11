// ejemplo de metodos de array 

let razaDePerros=["labrador" , "buldog", "beagle", "caniche", "pastor aleman"];

console.log("array inicial" , razaDePerros);

// 1 .Metodo push agrega uno o dos elementos al final del array
razaDePerros.push("dalmata", "san bernardo");
console.log( "array despues del push(dalmata, san bernardo)" , razaDePerros);


// Metodo Pop elimina el ultimo elemento del array
let razaEliminada=razaDePerros.pop();

console.log("array despues del pop" , razaDePerros);
console.log("raza eliminada", razaEliminada);

// Metodo shift elimina el primer elemento del array y lo devuelve
let primeraRaza=razaDePerros.shift();
console.log("array despues del shift", razaDePerros);
console.log("primera raza eliminada", primeraRaza);

// Metodo unshift agrega uno o mas elementos al principio del array.
razaDePerros.unshift("caniche");
console.log("array despues del unshift(buldog)", razaDePerros);


//Metodo Join une los elememetos en de un array  en un string separados por un separador(, por defecto)
let razaDePerrosString=razaDePerros.join(" - ");
console.log("array convertido a string", razaDePerrosString);

// Metodo indexOf devuelve el primer indice en el que se encuentra un elemento especificado en el array. y devuelve -1 si el elemento no esta en el array

let indiceBeagle=razaDePerros.indexOf("beagle");
console.log("indice de beagle con indexOf", indiceBeagle);

console.log("indice de san bernardo con indexOf", razaDePerros.indexOf("san bernardo"));

// Metodo lastIndexOf devuelve el ultimo indice en el que se encuentra un elemento especificado en el array y devuelve -1 si el elemento no esta en el array

let razaDuplicada=razaDePerros.lastIndexOf("caniche");
console.log("indice de caniche con lastIndexOf", razaDuplicada);


// metodo Includes determina si un array incluye un determinado elemento, devuelve true o false segun corresponda

let incluyeBeagle=razaDePerros.includes("beagle");
console.log("incluye beagle", incluyeBeagle);
let incluyeSanBernardo=razaDePerros.includes("san bernardo");
console.log("incluye san bernardo", incluyeSanBernardo);

