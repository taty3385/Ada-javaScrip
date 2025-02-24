const crypto = require('crypto');

const algoritmo='aes-256-cbc'; // algoritmo de cifrado aes con un tamaño de clave de 256 bits en modo cbc
const key=crypto.randomBytes(32); // genera clave de 32 bytes para el cifrado
const iv = crypto.randomBytes(16); // genera un vector de inicialización de 16 bytes

//creamos un objeto cipher con el algoritmo aes-256-cbc
const cipher = crypto.createCipheriv(algoritmo, key, iv);

// ciframos datos 

const data = 'Hola, soy un mensaje secreto'; // texto plano a cifrar
let encriptado = cipher.update(  data , 'utf8', 'hex'); // procesa el texto plano y lo sifra 

encriptado += cipher.final('hex'); // finaliza el cifrado y devuelve el texto cifrado


console.log(`Texto cifrado: ${encriptado}`); // muestra el texto cifrado en consola

// creamos un objeto decipher con el algoritmo aes-256-cbc
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

// desciframos datos
let desencriptado = decipher.update(encriptado, 'hex', 'utf8'); // procesa el texto cifrado y lo descifra

desencriptado += decipher.final('utf8'); // finaliza el descifrado y devuelve el texto plano

console.log(`Texto descifrado: ${desencriptado}`); // muestra el texto descifrado en consola

