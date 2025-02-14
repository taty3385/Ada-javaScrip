// Ejercicio 1: Servidor de Eco
// Consigna:
// Crea un servidor TCP que actúe como un servidor de eco. Cuando un
// cliente se conecte, el servidor debe recibir los datos enviados por el
// cliente y devolverlos exactamente igual (hacer un "eco"). Además, el
// servidor debe imprimir en la consola cada vez que un cliente se conecta,
// desconecta o envía datos.
// Requisitos:
// • Usa el evento connection para detectar nuevas conexiones.
// • Usa el evento data para recibir datos del cliente.
// • Usa el método socket.write() para enviar los datos de vuelta al
// cliente.
// • Usa los eventos end y close para manejar la desconexión del
// cliente.

const { log } = require("console");
const net = require("net");
// const server = net.createServer((socket) => {
//   console.log("un cliente se a conectado al servidor");

//   socket.on("data", (data) => {
//     // socket.on es un evento que se ejecuta cuando el servidor recibe datos del cliente
//     console.log(`datos recibidos del cliente ${data.tostring()}`); //
//     socket.write(data); // envia los datos de vuelta al cliente
//   });

//   socket.on("end ", () => {
//     console.log("el cliente ha cerrado la conexion");
//   });
//   socket.on("close", () => {
//     console.log("la conexion ha sido cerrada");
//   });
// });

// const PORT = 5000;
// server.on("connection", (socket) => {
//   console.log("un cliente se ha conectado al servidor");
// });

// server.listen(PORT, () => {
//   console.log(`servidor escuchando en el puerto ${PORT}`);
// });

// Ejercicio 2: Servidor con Timeout
// Consigna:
// Crea un servidor TCP que cierre automáticamente la conexión con un
// cliente si no recibe datos en un período de 10 segundos. Si el cliente
// envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
// el contador de tiempo.
// Requisitos:
// • Usa el método socket.setTimeout() para establecer un tiempo de
// espera.
// • Usa el evento timeout para cerrar la conexión si se alcanza el
// tiempo límite.
// • Usa el evento data para reiniciar el contador de tiempo cada vez
// que se reciben datos.

// const server = net.createServer((socket) => {
//   console.log("un cliente se ha conectado al servidor");
//   socket.setTimeout(10000); // establesco un tiempo de espera de 10 segundos
//   socket.on("data", (data) => {
//     console.log("datos recibidos del cliente " + data.toString()); // convierte los datos recibidos en texto del cliente
//     socket.setTimeout(10000); // reinicia el contador de tiempo
//   });
//   socket.on("timeout", () => { // evento que se ejecuta cuando se alcanza el tiempo limite
//     console.log("la conexion ha sido cerrada por inactividad");
//     socket.end();
//   });
//   socket.on("end", () => { // evento que se ejecuta cuando el cliente cierra la conexion
//     console.log("el cliente ha cerrado la conexion");
//   });
//   socket.on("close", () => { // evento que se ejecuta cuando la conexion ha sido cerrada
//     console.log("la conexion ha sido cerrada");
//   });
// });

// server.listen(5000, () => {
//     console.log("servidor escuchando en el puerto 5000");
// })

// Ejercicio 3: Servidor de Mensajes Personalizados
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar mensajes. El
// servidor debe responder con un mensaje personalizado dependiendo
// del contenido del mensaje recibido:
// • Si el cliente envía "Hola", el servidor debe responder
// "¡Bienvenido!".
// • Si el cliente envía "Adiós", el servidor debe responder "¡Hasta
// luego!" y cerrar la conexión.
// • Para cualquier otro mensaje, el servidor debe responder "Mensaje
// recibido: [mensaje del cliente]".
// Requisitos:
// • Usa el evento data para recibir y procesar los mensajes del cliente.
// • Usa el método socket.write() para enviar respuestas personalizadas.
// • Usa el método socket.end() para cerrar la conexión cuando el
// cliente envíe "Adiós".

// const server= net.createServer((socket) => {
//     console.log("un cliente se ha conectado al servidor");
//     socket.on ("data" ,(data)=>{
//         const mensaje=data.toString()
//         switch(mensaje)
//         {
//             case "hola":
//                 socket.write("bienvenidos");
//                 break;
//                 case "adios":
//                     socket.write("bienvenidos");
//                     socket.end()
//                     break;
//                     default:
//                         socket.write(`mensaje recibido: ${mensaje}`);
//                         break;
//         }

//     })

// })

// Ejercicio 4: Servidor con Manejo de Errores
// Consigna:
// Crea un servidor TCP que maneje errores de conexión de manera
// adecuada. Si ocurre un error en la conexión con un cliente, el servidor
// debe imprimir un mensaje de error en la consola y cerrar la conexión con
// ese cliente. Además, el servidor debe seguir funcionando y aceptando
// nuevas conexiones.
// Requisitos:
// • Usa el evento error para detectar errores en la conexión.
// • Usa el método socket.destroy() para cerrar la conexión en caso de
// error.
// • Asegúrate de que el servidor siga escuchando nuevas conexiones
// después de manejar el error.

// const server = net.createServer((socket) => {
//   console.log("un cliente se a conectado al servidor");
//   socket.on("error", (err) => { // evento que se ejecuta cuando ocurre un error en la conexion
//     console.log("error al conectar con el servidor", err.message);
//     socket.destroy();
//   });
//   socket.on("end", () => {
//     console.log("cliente desconectado");
//   });
// });

// server.on("error", (err)=>{ // evento que se ejecuta cuando ocurre un error en el servidor
//     console.log("error en el servidor" , err.message);

// })
// server.listen("5000" ,()=>{ // evento que se ejecuta cuando el servidor esta escuchando en el puerto 5000
//     console.log("Servidor conectado en el puerto 5000");

// })

// Ejercicio 5: Servidor con Contador de Conexiones
// Consigna:
// Crea un servidor TCP que lleve un contador de cuántos clientes se han
// conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
// enviarle un mensaje indicando cuántos clientes se han conectado hasta
// ese momento. Cuando un cliente se desconecta, el servidor debe reducir
// el contador.
// Requisitos:
// • Usa una variable global para mantener el contador de conexiones.
// • Usa el evento connection para incrementar el contador y enviar el
// mensaje al cliente.
// • Usa el evento close para reducir el contador cuando un cliente se
// desconecta.

// let contador = 0;

// const server=net.createServer((socket)=>{
//  contador++
// console.log("se a conectado un cliente al servidor",contador);
// socket.write("clientes conectados hasta el momento", contador)

// socket.on("close", ()=>{
//     contador--
//     console.log("el cliente se a desconectado" ,contador);

// })

// socket.on("error", (err)=>{
// console.log( "error al coneccion" ,err.message);
// socket.end();
// })
// })

// server.listen("5000", ()=>{
//     console.log("Servidor conectado en el puerto 5000");

// })

// Ejercicio 6: Servidor de Comandos
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar comandos
// simples. Dependiendo del comando recibido, el servidor debe realizar
// una acción específica:
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y
// hora actual.
// • Si el cliente envía "ip", el servidor debe responder con la dirección
// IP del cliente.
// • Si el cliente envía "salir", el servidor debe cerrar la conexión.
// • Para cualquier otro comando, el servidor debe responder
// "Comando no reconocido".
// Requisitos:
// • Usa el evento data para recibir y procesar los comandos.
// • Usa el método socket.write() para enviar respuestas.
// • Usa el método socket.end() para cerrar la conexión cuando el
// cliente envíe "salir".

// const server = net.createServer((socket) => {
//   console.log("un cliente a conectado al servidor");
//   socket.on("data", (data) => {
//     const mensaje = data.toString();
//     switch (mensaje) {
//       case fecha:
//         socket.write(
//           "la fecha y hora actual es: " + new Date().toLocaleString() //toLocaleString() convierte la fecha en una cadena de texto
//         );
//         break;
//       case ip:
//         socket.write("la direccion ip del cliente es: " + socket.remoteAddress); //remoteAddress devuelve la direccion ip del cliente
//         break;
//       case salir:
//         socket.end();
//         socket.write("la conexion ha sido cerrada");
//         break;
//       default:
//         "el comando no es reconocido";
//         break;
//     }
//   });
// });


// Consigna: 
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar 
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a 
// todos los demás clientes conectados. El servidor debe notificar cuando 
// un cliente se conecta o desconecta. 
// Requisitos: 
// • Usa un array para almacenar las conexiones de los clientes. 
// • Usa el evento data para recibir mensajes y retransmitirlos a todos 
// los clientes. 
// • Usa el evento end para eliminar a un cliente del array cuando se 
// desconecta. 
// • Notifica a los demás clientes cuando alguien se conecta o 
// desconecta. 


// const net = require("net");

// const clients = [];
// const server = net.createServer((socket) => {
//   clients.push(socket);
//   console.log("Un cliente se ha conectado al servidor. Total de clientes conectados:", clients.length);

//   clients.forEach((client) => {
//     if (client !== socket) {
//       client.write("Un nuevo cliente se ha conectado.\n");
//     }
//   });

//   socket.on("data", (data) => {
//     console.log(`Mensaje recibido: ${data.toString()}`);
//     clients.forEach((client) => {
//       if (client !== socket) {
//         client.write(data);
//       }
//     });
//   });

//   socket.on("end", () => {
//     clients.splice(clients.indexOf(socket), 1);
//     console.log("Un cliente se ha desconectado. Total de clientes conectados:", clients.length);
//     clients.forEach((client) => {
//       client.write("Un cliente se ha desconectado.\n");
//     });
//   });

//   socket.on("error", (err) => {
//     console.log("Error en la conexión:", err.message);
//     socket.destroy();
//   });
// });

// server.listen(5000, () => {
//   console.log("Servidor conectado en el puerto 5000");
// });


// Ejercicio 9: Servidor de Transferencia de Archivos 
// Consigna: 
// Crea un servidor TCP que permita a los clientes enviar un archivo de 
// texto al servidor. El servidor debe guardar el archivo en el sistema y 
// notificar al cliente cuando la transferencia se haya completado. Además, 
// el servidor debe verificar que el archivo no exceda un tamaño máximo 
// de 1 MB. 
// Requisitos: 
// • Usa el evento data para recibir el archivo en trozos (chunks). 
// • Usa el método socket.write() para notificar al cliente sobre el 
// progreso de la transferencia. 
// • Usa el método fs.writeFile() para guardar el archivo en el servidor. 
// • Si el archivo excede 1 MB, cierra la conexión y notifica al cliente. 




// Ejercicio 10: Servidor con Historial de Mensajes 
// Consigna: 
// Crea un servidor TCP que almacene un historial de los últimos 10 
// mensajes enviados por los clientes. Cuando un nuevo cliente se conecte, 
// el servidor debe enviarle el historial de mensajes. Los mensajes deben 
// almacenarse en memoria y actualizarse cada vez que un cliente envía un 
// nuevo mensaje. 
// Requisitos: 
// • Usa un array para almacenar el historial de mensajes. 
// • Usa el evento data para recibir mensajes y actualizar el historial. 
// • Usa el método socket.write() para enviar el historial al cliente 
// cuando se conecta. 
// • Limita el historial a los últimos 10 mensajes. 