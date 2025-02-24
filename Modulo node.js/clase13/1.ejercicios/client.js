
const net= require('net');


const client=net.createConnection({port:8080},()=>{
   console.log('cliente conectado');

})

client.on('data',(data)=>{
    console.log('datos recibidos',data.toString());
    client.end();
})

client.on('end',()=>{
    console.log('cliente desconectado');
})

client.on('error',(err)=>{
console.log('error',err.message);

})