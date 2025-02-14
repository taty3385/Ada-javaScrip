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
const path = require('path');
const PORT = 8081;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data)=>{
        const route= data.toString().trim()
        const normalice= path.normalize(route) // Normaliza la ruta 
        const message = 'Su ruta normalizada es: ' + normalice
        socket.write(message);
    })
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error(err.message);
    });
})
    server.listen(PORT, () => {
        console.log('Servidor TCP escuchando en el puerto', PORT);
    });