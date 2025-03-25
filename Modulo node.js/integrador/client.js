const readlineSync = require('readline-sync')
const net = require('net')
const uuid = require('uuid')


const menu=[ "Mostrar vehiculos", " Agregar vehiculo", " Eliminar vehiculo", ". Salir"]

const displayMenu= ()=>{
    menu.forEach((option,index)=>{
        console.log(`${index+1}. ${option}`);
        
    })
}


const client= net.createConnection({port: 8000},()=>{
    console.log(/" CONECTANDO AL SERVIDOR "/);
    displayMenu()
    const option = readlineSync.questionInt("Seleccione una opcion : ")
    switch(option){
        case 1:
            client.write (JSON.stringify({option: "1"}))
            break;
            case 2:
            client.write(JSON.stringify({ option: "2", newVehicle: addVehicle() }))
     
        default:
            console.log("opcion invalida");
            break;
        
    }
    
    
})
client.on ("data",(data)=>{
    console.log("===================respuesta del servidor============================");
    
  const datos =data.toString()
    console.log(datos);



    
})

const addVehicle= ()=>{
    const id = uuid.v4()
    const name= readlineSync.question("ingrese nombre del vehiculo : ")
    const model= readlineSync.question("ingrese modelo del vehiculo : ")
    const year= readlineSync.question("ingrese año del vehiculo : ")
    return {id ,name ,model ,year}
}