const net=require('net'); //importamos el modulo net

// creamos una conexion con el servidor en el puerto 3000

const client=net.createConnection({port:3000},()=>{
console.log('Conectado al servidor');
//enviamos un id al servidor
client.write('1');


})

//cuando el servidor envie datos

client.on('data',(data)=>{
    //convertimos los datos a string y los mostramos en la consola
    console.log('repuesta del servidor ',data.toString());
    //cerramos la conexion
    client.end();
})

//cuando se cierre la conexion
client.on('end',()=>{
    console.log('Desconectado del servidor');

})

