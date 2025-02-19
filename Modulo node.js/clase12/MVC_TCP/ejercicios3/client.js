const net=require('net');


const client=net.createConnection({port:4002},()=>{
console.log('Conectado al servidor');
client.write("Inception");
})
client.on('data',(data)=>{
    console.log('repuesta del servidor ',data.toString());
    client.end();
})
client.on('end',()=>{
    console.log('Desconectado del servidor');

})

client.on('error',(err)=>{
    console.log('Error:',err.message);
})
