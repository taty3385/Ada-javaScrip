/*
Instrucciones
1. Crea un archivo llamado app.js en Visual Studio Code.
2. Escribe un programa que haga lo siguiente:
- Reciba el nombre del usuario desde la línea de comandos.
- Use una variable de entorno para personalizar el saludo predeterminado.
- Muestre información básica del entorno de ejecución:
  - El directorio actual desde donde se ejecuta el programa.
  - La plataforma del sistema operativo.
- Use el módulo readline para preguntarle al usuario su edad.
- Agradezca al usuario y termine de forma ordenada.
3. Crea un archivo .env para configurar un saludo personalizado.

*/

// Paso 1: Importamos el modulo readline
const readline = require('readline')

// cargamos las V.E desde el archivo .env usando dotenv
require('dotenv').config()

// establecemos un saludo predeterminado usando una VE
// si no se define en el archivo .env usamos este valor por defecto
const defaultGreeting = process.env.GREETING || 'Hola sin mas'

// Procesamos los argumentos de la linea de comando (process.argv)
// capturamos el primer argumento despues del nombre del archivo como el
// nombre de usuario
// si no se proporciona un argumento, usamos invitado como valor predeterminado
const args = process.argv.slice(2)
const userName = args[0] || 'Chicas de Back <3'

// mostramos el saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`);

// mostrar info sobre el entorno de ejecucion
console.log('Informacion sobre el entorno de ejecucion: ');
// directorio actual
console.log(`Directorio actual: ${process.cwd()}`);
// plataforma
console.log(`Plataforma: ${process.platform}`);

// creamos la interfaz para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// usamos metodo rl question para mostrar la preg al usuario
rl.question('Cuantos anios tienes?', (age) => {
    console.log(`Wow, ${age} es una gran edad`);
    rl.close()
})

// manejamos el evento close
rl.on('close', () => {
    console.log('Gracias por usar este programa. adios!');
    process.exit(0)
})