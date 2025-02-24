// paso 1 importamos las versiones de uuid qu vamos a usar

const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require("uuid");

// ejemplo  de uuid v1 genera un id unico basado en la fecha y la mac address

const v1 = uuidv1();
console.log("uuid v1  basado en el tiempo :", v1);

// ejemplo 2 version 3 uuid genera un id unico basado en nombre y el espacio en nombre
//utiliza  un nombre y un espacio de nombres uuid
// usando un hash md5

const nameSpace = uuidv3.URL= uuidv3.URL; // espacio de nombre estandard basado en url
console.log("uuid v3 basado en nombre y espacio de nombres :", nameSpace);
const namev3="tamara"   
const idv3=uuidv3(namev3,nameSpace)
console.log("uuid v3 basado en nombre y espacio de nombres :", idv3);


// ejemplo 3 version 4 uuid genera un id unico aleatorio  genera id de forma random 
const v4 = uuidv4();

console.log("uuid v4 aleatorio :", v4);

//ejemplo 4 UUID5 genera un id unico basado en nombre y espacio de nombres(SHA-1)
// similar a la version 3 pero usa SHA-1 en lugar de MD5
const nameSpaces = uuidv5.URL; // espacio de nombre estandard basado en url
const namev5 = "tamara";
const idv5 = uuidv5(namev5, nameSpaces);
console.log("uuid v5 basado en nombre y espacio de nombres  con SHA-1:", idv5);