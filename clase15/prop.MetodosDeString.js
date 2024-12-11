// cremamos un string

let descripcionPerro="  El labrador es una raza de perro originaria de Terranova, en la actual Canada.  " ;
console.log("cadena inicial", descripcionPerro);

//Propiedades de string

// length: Devuelve la longitud de la cadena de texto

console.log("longitud de la cadena", descripcionPerro.length);

// Propiedad IndexOf: Devuelve la posicion de la primera ocurrencia de un valor especificado en una cadena de texto y devuelve -1 si no se encuentra el valor

let posicionLabrador=descripcionPerro.indexOf("labrador");
let posicionIncorrcta=descripcionPerro.indexOf("caniche");

console.log("posicion de labrador", posicionLabrador);
console.log("posicicion incorrecta", posicionIncorrcta);

// Metodo slice devuelve una parte de una cadena de texto, seleccionada desde el inicio hasta el final (o hasta un indice especificado)
let subCadena=descripcionPerro.slice(3, 10);
console.log("subcadena despues del slice en la pocicio(3,10)", subCadena);


// Metodo trim elimina los espacios en blanco al principio y al final de una cadena de texto
let descripcionPerroTrim=descripcionPerro.trim();
console.log("cadena despues del trim", descripcionPerroTrim);


// Metodo Replace reemplaza un valor especificado por otro valor en una cadena de texto

let remplaza=descripcionPerro.replace("labrador", "caniche");
console.log("cadena despues del replace", remplaza);


//Metodos split divide una cadena de texto en un array de subcadenas y devuelve el nuevo array segun el separador especificado

let palabras=descripcionPerro.split(" ");
console.log("array de palabras dividida con split", palabras);




