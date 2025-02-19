const net= require('net');

const bookController = require('./controller/boocksController'); //importamos el controlador de libros

const server= net.createServer((socket)=>{
    console.log('cliente conectado');

    socket.on('data',(data)=>{
        const boock=data.toString().trim();  //convertimos los datos a string y eliminamos los espacios en blanco
        console.log('solicitud recibida para el libro con id:',boock);
        const response=bookController.handleRequest(boock); //llamamos al metodo handleRequest para manejar la solicitud del cliente
        socket.write(response); //enviamos la respuesta al cliente
        
    })
    socket.on('end',()=>{
        console.log('cliente desconectado');
    })
    socket.on('error',(err)=>{
        console.log('Error:',err.message);
    })
    
})

server.listen(4000,()=>{
    console.log('Servidor escuchando en el puerto 4000');
})