

const displayVehicle= {
 display: (vehichle)=>{
    if(!vehichle){
        return  JSON.stringify({
            status : "error",
            message : "no existe vehiculos",
            data: []
        } ,null , 2)
    } else{
        return JSON.stringify( {
            status: "susses",
            message: "vehiculos encontrados",
            data: vehichle
        } , null ,2)
        }

    },
    
    addvehichle: (newVehicle) => {
        if(!newVehicle){
            return JSON.stringify({
                status: "error",
                message: "no se pudo agregar vehiculo",
                data: []
            },null,2)
        } else{
            return JSON.stringify({
                status: "susses",
                message: "vehiculo agregado correctamente",
                data: newVehicle
            },null,2)
        }
   

    },
deelteVehicle:(id ,data)=>{
    if (!id){
        return JSON.stringify({
            status:"error",
            message:"no existe id ingresado",
            data:[]
        }, null, 2)
    }else{
        return JSON.stringify({
            status: "susses",
            message: `su vehiculo con ${id} ha sido eliminado correctamente`,
            data: data
        },null,2)
    }
}


}



module.exports= {
    displayVehicle,
  
}