// Ejercicio 2: Servidor TCP con UUID v5 y JSON 
// Objetivo: 
// Crear un servidor TCP que responda con un objeto JSON que contenga 
// un UUID v5 basado en un nombre fijo y un espacio de nombres. 
// Pasos: 
// 1. Servidor TCP (server.js): 
// o Importar los módulos net y uuid. 
// o Crear un servidor TCP que genere un UUID v5 basado en un 
// nombre y un espacio de nombres. 
// o Enviar un objeto JSON con el UUID al cliente. 
// 2. Cliente TCP (client.js): 
// o Importar el módulo net. 
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y 
// mostrar el UUID en la consola.

const net = require('net');

const{ v5: uuidv5 } = require('uuid');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    const nameSpace= uuidv5.URL;
    const namev5 = "tamara";
    const idv5 = uuidv5(namev5, nameSpace);
    const data = {
        uuid: idv5
    };
    socket.write(JSON.stringify(data));
  

    socket.on('data', (data) => {
        console.log('Cliente envió:', data.toString());
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
    
    socket.on('error', (error) => {
        console.error('Error:', error);
    });
});

server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
})