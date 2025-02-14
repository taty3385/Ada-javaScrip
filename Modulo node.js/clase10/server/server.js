const net = require("net");

const server = net.createServer(); // creo el servidor

server.on("connection", (socket) => {
  console.log("comunicacion  establecida");
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
    socket.write("\n mensaje recibido");
  });

  socket.on('close' ,()=>{
    console.log("cliente se ha desconectado");
    
  })

  socket.on('error',(err)=>{
    console.log("error :" , err.message);
    
  })
});


server.listen(5000 , ()=>{
    console.log("servidor escuchando en el puerto " , server.address().port);
    
})
