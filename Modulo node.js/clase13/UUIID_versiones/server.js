const net = require("net");
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require("uuid");

const nameSpace = uuidv3.URL;
const server = net.createServer((socket) => {
  console.log("cliente conectado");
  // geenramos un id unico para el cliente o conexiones
  const idv1 = uuidv1();
  console.log("uuid v1 basado en el tiempo:", idv1);
  const idv3 = uuidv3("usuario", nameSpace);
  console.log("uuid v3 basado en nombre y espacio de nombres:", idv3);
  const idv4 = uuidv4();
  console.log("uuid v4 aleatorio:", idv4);
  const idv5 = uuidv5("usuario", nameSpace);
  console.log("uuid v5 basado en nombre y espacio de nombres con SHA-1:", idv5);
  
 // manejamos los  eventos de la conexion
  socket.on('data',(data)=>{
    console.log('datos recibidos' ,data.toString());
  })

  //manejamos el evento end
  socket.on('end',()=>{
    console.log('cliente desconectado');
  })

    //manejamos el evento error
    socket.on('error',(err)=>{
        console.log('error',err.message);
    })
});
 server.listen(8080,()=>{
    console.log("servidor escuchando en el puerto 8080");
    
 })