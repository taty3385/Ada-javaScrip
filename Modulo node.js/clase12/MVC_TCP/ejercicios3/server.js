 const net = require('net');
 const movieController = require('./controller/movieController');

 const server=net.createServer((socket)=>{
    console.log('cliente conectado');
    socket.on('data',(data)=>{
        const title=data.toString().trim();
        console.log('solicitud recibida para la pelicula con titulo:',title);
        const response=movieController.getMovie(title);
        socket.write(response);
    })
    socket.on('end',()=>{
        console.log('Cliente desconectado');
    
    })
    socket.on('error',(err)=>{
        console.log('Error:',err.message);
    })
    
    });
    
    
 server.listen(4002,()=>{
    console.log('Servidor escuchando en el puerto 4002');
 });