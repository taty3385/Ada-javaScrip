// EJERCITACION:
// Ejercicio 1: Conectar y enviar un mensaje al servidor
// Consigna
// Crea un cliente TCP que:
// 1. Se conecte a un servidor en localhost:5000.
// 2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
// servidor!".
// 3. Escuche los datos recibidos y los muestre en consola.
// Pistas
// • Usa net.createConnection() para conectar al servidor.
// • Maneja el evento 'connect' para saber cuándo la conexión está
// lista.
// • Usa client.write() para enviar el mensaje.
// • Captura los datos con el evento 'data'.

// Ejercicio 2: Implementar un timeout en la conexión
// Consigna
// Modifica el cliente del Ejercicio 1 para que:
// 1. Si después de 5 segundos no ha recibido una respuesta, cierre la
// conexión.
// 2. Muestre "
// cerrar.
// Pistas
// Tiempo de espera agotado" en la consola antes de
// • Usa client.setTimeout() con 5000 milisegundos.
// • Cuando el timeout ocurra, usa client.end() para cerrar la conexión.
const net = require("net");
const host = "localhost";
const port = 5000;

// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("Conectado con el servidor");
//   client.write("¡Hola, servidor!");
// });

// client.on("connect", () => {
//   console.log("La conexión está lista");
// });

// client.on("data", (data) => {
//   console.log("Datos recibidos del servidor:", data.toString());
// });
// client.setTimeout(5000, () => {
//   console.log("tiempo de despera alcanzado carrando conexion");
//   client.end();
// });

// client.on("end", () => {
//   console.log("Desconectado del servidor");
// });

// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// Ejercicio 3: Pausar y reanudar la recepción de datos
// Consigna
// Crea un cliente TCP que:
// 1. Reciba mensajes continuamente del servidor.
// 2. Al recibir el primer mensaje, pause la recepción durante 3
// segundos.
// 3. Luego de los 3 segundos, reanude la recepción y siga mostrando
// los mensajes.
// Pistas
// • Usa client.pause() y client.resume().
// • Un setTimeout() puede ayudarte a reanudar después de 3
// segundos.

// const client = net.createConnection({ host: host, port: port }, () => {
//   console.log("cliente conectado al servidor");
//   client.write("hola servidor");
// });

// client.on("data", (data) => {
//   console.log("reciendo datos del servidor", data.toString());
//   console.log("pausando la recepcion de datos");
//   client.pause();
//   setTimeout(() => {
//     console.log("reanudando  la recepcion de datos");
//     client.resume();
//   }, 3000);
// });

// client.on("end", () => {
//   console.log("cerrando conexion con servidor");
// });

// client.on("error", (err) => {
//   console.log("error", err.message);
// });
// client.on('close',()=>{
//   console.log("cerrada inesparadamente");

// })

// Ejercicio 4: Manejo de errores en la conexión
// Consigna
// Modifica el cliente para que:
// 1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
// muestre con "
// Error: [mensaje]".
// 2. Si la conexión se cierra inesperadamente, muestre "
// cerrada inesperadamente".
// Pistas
// • Usa client.on('error', callback) para manejar errores.
// • Usa client.on('close', callback) para detectar cierres.

// const client = net.createConnection({ host: host, port: port }, () => {
//   console.log("Cliente conectado al servidor");
//   client.write("Hola servidor");
// });

// client.on("data", (data) => {
//   console.log("Reciendo datos del servidor", data.toString());
//   console.log("Pausando la recepcion de datos");
//   client.pause();
//   setTimeout(() => {
//     console.log("Reanudando  la recepcion de datos");
//     client.resume();
//   }, 3000);
// });

// client.on("end", () => {
//   console.log("Cerrando conexion con servidor");
// });

// client.on("error", (err) => {
//   console.log("Error :", err.message);
// });
// client.on('close',()=>{
//   console.log("Cerrada inesparadamente");

// })

// Ejercicio 5: Detectar cuando el servidor cierra la conexión
// Conexión
// Consigna
// Crea un cliente que:
// 1. Se conecte y envíe "¿Sigues ahí, servidor?".
// 2. Cuando el servidor cierre la conexión, muestre "servidor cerro
// la conexión".
// Pistas
// Servidor cerró
// • El evento 'end' se activa cuando el servidor finaliza la conexión.

// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("¿Sigues ahí, servidor?");
//   client.write("¿Sigues ahí, servidor?");
//   client.on("data", (data) => {
//     console.log("Reciendo dato del servidor", data.toString());
//   });
//   client.on("end", () => {
//     console.log("Servidor cerro la conexion");
//   });
// });

// Ejercicio 6: Cliente interactivo con la usuaria
// Consigna
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
// enviarlos al servidor.
// • Después de cada mensaje, la usuaria puede escribir otro.
// • Si escribe "salir", el cliente se desconecta.
// Pistas
// • Usa readline para capturar texto de la usuaria.
// • Si el mensaje es "salir", cierra la conexión con client.end().

// const readline = require("readline");
// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("conectado al servidor");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.setPrompt("Escribe un mensaje: ");
//   rl.prompt();
//   rl.on("line", (mensaje) => {
//     if (mensaje === "salir") {
//       client.end();
//       rl.close();
//     } else {
//       client.write(line);
//       rl.prompt();
//     }
//   })
// });
// client.on("data", (data) => {
//   console.log("Recibiendo datos del servidor", data.toString());
// });
// client.on("end", () => {
//   console.log("Desconectado del servidor");
// });
// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// Ejercicio 7: Cliente que destruye el socket al fallar
// Consigna
// Crea un cliente que:
// 1. Se conecte al servidor.
// 2. Si hay un error en la conexión, use client.destroy() y muestre "
// Conexión destruida".
// Pistas
// • client.destroy() libera los recursos del socket de inmediato.

// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("Conectandose con el servidor");
// });
// client.on("error", (err) => {
//   console.log("error al conectar con el servidor", err.message);
//   client.distroy();
//   console.log("conexion destruida");

// });
// Ejercicio 8: Cliente con unref/ref para control de procesos
// Consigna
// Crea un cliente que:
// 1. Use client.unref() para permitir que Node.js termine si no hay otras
// tareas.
// 2. Luego, después de 5 segundos, use client.ref() para evitar que el
// proceso termine.
// Pistas
// • unref() hace que el socket no impida que Node.js termine.
// • ref() lo vuelve a mantener activo.

// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("conectado con servidor");
// });
// client.on("data", (data) => {
//   console.log("recibiendo datos del servidor", data.toString());
//   client.unref();
//   setTimeout( () => {
//     console.log("conctandose");
//     client.ref();
//   },5000);
// });
// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });

// Ejercicio 9: Cliente que reconecta automáticamente
// Consigna
// Crea un cliente que:
// 1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
// que tenga éxito.
// Pistas
// • Usa setTimeout() para intentar de nuevo tras 3 segundos.
// • Llama a net.createConnection() dentro del reintento.


  // const client = net.createConnection({ port: port, host: host }, () => {
  //   console.log("conectado con servidor");
  // });
  // client.on("error", (err) => {
  //   console.log("error:", err.message);
  //   setTimeout(() => { //configurando el tiempo de espera
  //     console.log("conectandose nuevamente");
  //   //  client.connect({ port: port, host: host });
  //   }, 3000);
  // });

// Ejercicio 10: Cliente que detecta pérdida de conexión
// Consigna
// Crea un cliente que:
// 1. Si deja de recibir datos durante 10 segundos, muestre "
// No hay
// datos del servidor" y cierre la conexión.
// Pistas
// • Usa setTimeout() que se reinicie con cada mensaje recibido.
// • Si pasan 10 segundos sin mensajes, cierra con client.end().

// const client = net.createConnection({ port: port, host: host }, () => {
//   console.log("conectado con servidor");
// });
// client.on("data", (data) => {
//   console.log("recibiendo datos del servidor", data.toString());
// })
// setTimeout(() => {
//   console.log("No hay datos del servidor");
//   client.end();
// }, 20000);

// client.on("error", (err) => {
//   console.error("Error en la conexión:", err.message);
// });