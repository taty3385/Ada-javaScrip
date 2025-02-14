// DESAFÍO 1: Cliente con Reconexión Automática
//  Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
//  El cliente debe:
//  Conectarse al servidor en el puerto 5000.
//  Enviar un mensaje inicial: "¡Hola, servidor!".
//  Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
//  Escuchar y manejar 'error', mostrando el mensaje en consola.

const net = require("net");

PORT = 5000;
HOST = "localhost";

// const client = net.createConnection({
//   port: PORT,
//   host: HOST,
// });

// client.on("connect", () => {
//   console.log("conectando con el servidor");
//   client.write("hola sertvidor ");
// });
// client.on("data", (data) => {
//   console.log("Recibiendo datos del servidor:", data.toString());
// });

// client.on("close", () => {
//   console.log("cerrando conexion");
//   setTimeout(() => {
//     client.connect(PORT, HOST); // reintentar la conexion al puerto y host pasasdos por parametros
//   }, 3000);
// });

// client.on("error", (err) => {
//   console.error("Error en la conexion:", err.message);
// });

// DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
// Objetivo: Simular un cliente que pausa la recepción de datos por 5
// segundos y luego la reanuda.
// El cliente debe:
// Conectarse al servidor y enviar un mensaje inicial.
// Escuchar el evento 'data' y mostrar los datos en consola.
// Pausar la recepción de datos usando client.pause() a los 3 segundos.
// Reanudar la recepción de datos con client.resume() a los 8 segundos.
// Finalizar la conexión tras 15 segundos.

// const client = net.createConnection({ port: PORT, host: HOST }, () => {
//   console.log("conectando con el servidor");
//   client.write("hola servidor");
// });

// client.on("data", (data) => {
//   console.log("recibiendo datos del servidor", data.toString());
// });
// setTimeout(() => {
//   console.log("pausando la recepcion de datos");
//   client.pause();

//   setTimeout(() => {
//     console.log("reanudando la conexion .....");
//     client.resume();
//   }, 8000);
// }, 3000);

// setTimeout(() => {
//   console.log("Finalizando la conexión");
//   client.end(); // Correcto uso de client.end()
// }, 15000); // Finalizar la conexión después de 15 segundos

// client.on("end", () => {
//   console.log("Desconectado del servidor");
// });

// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
//  Objetivo: Implementar un timeout que cierre la conexión si no recibe
// datos en 10 segundos.
//  El cliente debe:
//  Conectarse y enviar un mensaje inicial.
//  Configurar un setTimeout() de 10 segundos para cerrar la conexión si
// no recibe datos.
//  Escuchar el evento 'data' y cancelar el timeout si recibe información.
//  Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
// mensaje en consola.

// const client = net.createConnection({ port: PORT, host: HOST }, () => {
//   console.log("Conectando con el servidor");
//   client.write("¡Hola, servidor!");
//   client.setTimeout(10000); // Establece un tiempo de espera de 10 segundos
// });

// client.on("data", (data) => {
//   console.log("Recibiendo datos del servidor:", data.toString());
//   client.setTimeout(10000); // Reinicia el tiempo de espera cada vez que se reciben datos
// });

// client.on("timeout", () => {
//   console.log("No se recibieron datos en 10 segundos, cerrando la conexión");
//   client.destroy(); // Cierra la conexión
// });

// client.on("end", () => {
//   console.log("Desconectado del servidor");
// });

// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado

//  Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras
// 20 segundos.
//  El cliente debe:
//  Conectarse y enviar un mensaje inicial.
//  Enviar un mensaje "Mensaje automático" cada 5 segundos.
//  Escuchar el evento 'data' y mostrar los datos recibidos.
//  Cerrar la conexión con client.end() tras 20 segundos.

// const client = net.createConnection({ port: PORT, host: HOST }, () => {
//   console.log("Conectando al servidor");
//   client.write("¡Hola, servidor!");

//   const interval = setInterval(() => { // Enviar un mensaje cada 5 segundos
//     console.log("Mensaje automático cada 5 segundos");
//     client.write("¿Estás ahí?");
//   }, 5000);

//   // Cierra la conexión tras 20 segundos
//   setTimeout(() => {
//     console.log("Finalizando la conexión");
//     clearInterval(interval); // Detener el envío de mensajes automáticos
//     client.end();
//   }, 20000);
// });

// client.on("data", (data) => {
//   console.log("Recibiendo datos del servidor:", data.toString());
// });

// client.on("end", () => {
//   console.log("Desconectado del servidor");
// });

// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// DESAFÍO 5: Cliente con Eventos y Control de Referencias
//      Objetivo: Aplicar ref() y unref() para controlar la terminación del
// proceso de Node.js.
//  El cliente debe:
//    Conectarse y enviar un mensaje inicial.
//    Escuchar los eventos 'data', 'end', 'close' y 'error'.
//    Llamar a client.unref() a los 10 segundos para permitir que el proceso
// termine.
//    A los 15 segundos, llamar a client.ref() para que el proceso se
// mantenga activo.
//    Cerrar la conexión a los 20 segundos.

// const client = net.createConnection({ port: PORT, host: HOST }, () => {
//   console.log("Conectando al servidor");
//   client.write("¡Hola, servidor!");
// });

// client.on("data", (data) => {
//   console.log("datos recibidos por el servidor", data.toString());
// });
// client.on("end", () => {
//   console.log("cerrando conexion con el servidor");
// });

// client.on("close", () => {
//   console.log(" el servidor se a cerrado");
// });


// setTimeout(()=>{
//   console.log("Permitiendo que el proceso termine...");
//   client.unref()
// },10000)

// setTimeout(()=>{
//   console.log("Manteniendo el proceso activo...");
//   client.ref()
// },15000)

// setTimeout(()=>{
//   console.log("cerrando conexion .... ");
//   client.end()
// },20000)

// client.on("error", (err) => {
//   console.log("error:", err.message);
// });


// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo 
// de Fallos        
//      Objetivo: Crear un cliente TCP que intente reconectarse si la 
// conexión se pierde, pero que abandone después de 5 intentos fallidos. 
//   El cliente debe: 
//    Intentar conectarse al servidor. 
//    Si se desconecta, volver a intentar cada 2 segundos. 
//    Llevar un contador de intentos fallidos. 
//    Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de 
// error. 
//    Manejar adecuadamente los eventos 'error', 'close' y 'data'. 
//     PISTA: Usen un contador global de intentos y un setTimeout() para 
// gestionar los reintentos. 


// let intentos = 0;
// const maxIntentos = 5;
// const client = net.createConnection({ port: PORT, host: HOST }, () => {
//   console.log("Conectando al servidor");
//   client.write("¡Hola, servidor!");
// });

// client.on("data", (data) => {
//   console.log("datos recibidos por el servidor", data.toString());
// });

// client.on("end", () => {
//   console.log("cerrando conexion con el servidor");
// });

// client.on("close", () => { //
//   console.log(" el servidor se a cerrado");
//   setTimeout(() => {
//     if (intentos < maxIntentos) { // Si no se superó el máximo de intentos fallidos
//       console.log("Reintentando conexión...");
//       client.connect(PORT, HOST); // Reintentar la conexión
//       intentos++; // Incrementar el contador de intentos
//     } else {
//       console.error("Se superó el máximo de intentos fallidos"); // Mostrar mensaje de error
//       client.end(); // Cerrar la conexión
//     }
//   }, 2000);
// });

// client.on("error", (err) => {
//   console.log("error:", err.message);
// });


// DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto
// Desconexión               
//      Objetivo: Implementar un cliente TCP que permita al usuario ingresar 
// comandos desde la terminal, los valide antes de enviarlos y cierre la 
// conexión si se recibe una respuesta específica del servidor. 
//   El cliente debe: 
//    Conectarse al servidor en el puerto 5000. 
//    Leer la entrada del usuario desde la terminal con readline. 
//    Solo permitir comandos que empiecen con CMD_ (ejemplo: 
// CMD_HOLA, CMD_ADIOS). 
//    Enviar los comandos al servidor solo si son válidos. 
//    Escuchar respuestas del servidor. 
//    Si el servidor responde "EXIT", cerrar la conexión y terminar el 
// programa. 
//     PISTA: Usen readline para capturar la entrada del usuario y RegExp 
// para validar los comandos. 


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ port: PORT, host: HOST }, () => {
  console.log("Conectando al servidor");
});

client.on("data", (data) => {
  console.log("datos recibidos por el servidor", data.toString());
  if (data.toString().trim() === "EXIT") {
    console.log("Cerrando la conexión");
    client.end();
    rl.close();
  }
});

client.on("end", () => {
  console.log("cerrando conexion con el servidor");
});

client.on("close", () => {
  console.log(" el servidor se a cerrado");
});

client.on("error", (err) => {
  console.log("error:", err.message);
});

rl.setPrompt("Ingrese un comando: ");
rl.prompt();

rl.on("line", (line) => {
  if (/^CMD_/.test(line)) { // Validar que el comando empiece con CMD si empieza con CMD pasa el test
    client.write(line); // Enviar el comando al servidor
  } else {
    console.log("Comando inválido");
  }
  rl.prompt(); // Volver a mostrar el prompt
});

rl.on("close", () => {
  console.log("Saliendo del programa");
  process.exit(0); // Salir del programa y cero significa que se salio sin errores
});

