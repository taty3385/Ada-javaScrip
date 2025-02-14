const net = require("net");

const server = net.createServer(); // creo el servidor
const clients = [];
server.on("connection", (socket) => {
  console.log("comunicacion  establecida");
  clients.push(socket); //guardo el socket del cliente en un array clients

  clients.forEach((client) => {
    client.write("hola cliente" + socket.remotePort + ":" + socket.remoteAddress +" ¿en que puedo ayudarte?");
  });
  socket.on("data", (data) => {
    console.log(
      "recibiendo datos del cliente" +
        socket.remoteAddress +
        ":" +
        socket.remotePort +
        ":" +
        "dice :" +
        data.toString()
    );
  
  });

  socket.on('close' ,()=>{
    console.log("cliente se ha desconectado");
    const index= clients.indexOf(socket); //busco el indice del cliente que se desconecto
    if(index > -1){ //si el index es mayor a -1 significa que lo encontro y si no lo encontro no hago nada
      clients.splice(index,1); // lo elimino del array el 1 es para que elimine solo 1 elemento
    }
  })

  socket.on('error',(err)=>{
    console.log("error :" , err.message);
    
  })
});


server.listen(8000 , ()=>{
    console.log("servidor escuchando en el puerto " , server.address().port);
    
})