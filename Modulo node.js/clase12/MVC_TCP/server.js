//IMPORTAMOS EL MODULO NET

const net=require('net');

//IMPORTAMOS EL MODULO VEHICLECONTROLLER
const vehicleController=require('../controlers/vehicleController');

//CREAMOS UN SERVIDOR 

const server=net.createServer((socket)=>{
console.log('Cliente conectado');

//cuando el cliente envie datos
socket.on('data',(data)=>{
    //convertimos los datos a string y los eliminamos los espacios en blanco
    const vehicle=data.toString().trim();
    console.log('solicitud recibida para el vehiculo con id:',vehicle);
    
    //llamamos al metodo handleRequest para manejar las solicitud del cliente
    //este metodo toma el id del vehiculo y la devuelve en formato json
    const response=vehicleController.handleRequest(vehicle);
    //enviamos la respuesta al cliente
    socket.write(response);


})

socket.on('end',()=>{
    console.log('Cliente desconectado');

})
socket.on('error',(err)=>{
    console.log('Error:',err.message);
})

});

server.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto 3000');

    
})

