const readline = require('readline-sync');

const deseaContinuar= readline.keyInYN('Desea continuar?');

if (deseaContinuar) {
    console.log('continuamos con la ejecucion');
    
} else{
    console.log('operacion canselada por el usuario');
}