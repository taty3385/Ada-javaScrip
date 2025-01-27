// Ejercicio 2: Descubre tu entorno de trabajo
// Consigna:
// En este ejercicio, escribirás un programa que muestre información útil
// sobre el entorno donde se está ejecutando el programa. Este ejercicio te
// ayudará a practicar los métodos del objeto process en Node.js.
// Requisitos del programa:
// 1. Debe mostrar la plataforma del sistema operativo (Linux, macOS o
// Windows).
// 2. Debe mostrar el directorio actual desde donde se ejecuta el
// programa.
// 3. Usa los métodos process.platform y process.cwd() para obtener
// esta información.
// Indicaciones:
// 1. Crea un archivo llamado app.js.
// 2. Escribe un programa que imprima en la consola la plataforma y el
// directorio actual.
// 3. Ejecuta el programa desde la terminal y verifica los resultados.

const plataform = process.platform;
console.log("la informacion de la plstaforma es : ", plataform);

const directorio = process.cwd();
console.log("la informacion del directorio actual es : ", directorio);
