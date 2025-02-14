// Ejercicio 2: Servidor TCP que Normaliza Rutas 
// Objetivo: Crear un servidor TCP que normalice las rutas recibidas 
// utilizando path.normalize y envíe la ruta normalizada al cliente. 
// Pasos: 
// 1. Configuración del Servidor: 
// o Crea un servidor TCP que escuche en un puerto específico 
// (por ejemplo, 8081). 
// 2. Comando para Normalizar Rutas: 
// o El servidor debe recibir una ruta desde el cliente. 
// o Usa path.normalize para normalizar la ruta. 
// 3. Responder al Cliente: 
// o Envía la ruta normalizada al cliente. 
// Instrucciones: 
// • Ejecuta el servidor y conecta un cliente. 
// • Envía rutas con barras redundantes y puntos (e.g., 
// ./docs/../file.txt) para verificar la funcionalidad.


const net = require('net');

const PORT = 8081;
const HOST = 'localhost';

const client= net.createConnection({port:PORT, host:HOST}, ()=>{
    console.log('Cliente conectado');
    client.write('./docs/../file.txt'); // devuelve /file.txt
    client.write('/home/user/docs/./file.txt'); // devuelve /home/user/docs/file.txt
   
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end(); // Cerrar la conexión después de recibir la respuesta
});
client.on('end', () => {
    console.log('Cliente desconectado');
});

client.on('error', (err) => {
    console.error('Error:', err.message);
});