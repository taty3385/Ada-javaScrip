// importamos el modulo readline-sync
const readline = require('readline-sync');

const nombre = readline.question('ingrese  su  nombre? ');
const edad = readline.question('ingrese  su  edad? ');

console.log(`Hola ${nombre} tienes ${edad} años`);

