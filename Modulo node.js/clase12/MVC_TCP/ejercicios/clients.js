 const net = require('net');


 const client = net.createConnection({port: 4000},()=>{
    console.log('Conectado al servidor');
    client.write('1');

    
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end();
})

client.on('end',()=>{
    console.log('Desconectado del servidor');
})

client.on('error',(err)=>{
    console.log('Error:',err.message);
})
