// Ejercicio 6 (Extra): Explora métodos de readline
// Consigna:
// Este ejercicio te permitirá explorar algunos métodos adicionales del
// módulo readline, como rl.setPrompt() y el evento 'line'. Escribe un
// programa interactivo que solicite varias palabras al usuario y las muestre
// en mayúsculas. El programa finalizará cuando el usuario escriba "salir".
// Requisitos del programa:
// 1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al
// usuario.
// 2. Usa el evento 'line' para procesar cada palabra que el usuario
// ingrese.
// 3. Si el usuario escribe "salir", el programa debe despedirse y finalizar.
// Indicaciones:
// 1. Crea un archivo llamado app.js para el código.
// 2. Configura la interfaz de readline y procesa las entradas del usuario.
// 3. Usa el evento 'line' para manejar cada palabra ingresada.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Escribe una palabra: ");
rl.prompt();

rl.on("line", (line) => { //line es el evento que se dispara cuando el usuario presiona enter
  if (line === "salir") {
    console.log("Adios!");
    rl.close(); //cierra la interfaz
  } else {
    console.log(line.toUpperCase() + " ❤️");
    rl.prompt(); //vuelve a mostrar el prompt
  }
});
rl.on("close",()=>{
    console.log("Hasta luego!");
    process.exit(0)
})
