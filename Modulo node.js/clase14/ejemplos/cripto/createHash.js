const crypto = require('crypto');
//datos que queremos hashear
const data = 'Hola, soy un mensaje secreto';

//creamos el objeto hash  usando el algoritmo sha256
const hash = crypto.createHash('sha256');

//actualizar el  hash con los datos

hash.update(data);
// obtener el hash en formato hexadecimal

const hashHex = hash.digest('hex');

// mostrar hah generado en consola
console.log(`El hash de sha256 mensaje es: ${hashHex}`);