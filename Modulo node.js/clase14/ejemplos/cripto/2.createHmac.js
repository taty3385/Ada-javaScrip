const cripto = require('crypto');

//datos a autenticar

const data = 'Hola, soy un mensaje secreto';


// clave secreta para hmac

const secretKey = 'claveSecreta';

// creamos objetos hmac con el algoritmo sha256 y la clave secreta

const hmac = cripto.createHmac('sha256', secretKey);



//actualizamos el hmac con los datos

hmac.update(data);

// obtener el hmac en formato hexadecimal

const hmacOuput = hmac.digest('hex'); // obtenemos el hmac en formato hexadecimal

// leemos el hmac en consola

console.log(`El hmac de sha256 mensaje es: ${hmacOuput}`);