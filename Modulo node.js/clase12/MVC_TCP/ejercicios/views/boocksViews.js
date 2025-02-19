 // el views es el encargado de formatear la respuesta que se enviara al cliente en formato json



 const boockView = {
formatResponse: (boock) => {
    if(boock === null){
        return JSON.stringify({status:"error ",
            messagge:"Boock not found"})
        } else{
            return JSON.stringify({ status: "success",
                messagge:boock,
            })
        }
    }
}
  module.exports = boockView; // exportamos el modulo boockView