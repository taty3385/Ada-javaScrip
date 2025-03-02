// Ejercicio 2: Aplicación de Tareas con Patrón MVC y Persistencia Consigna: Crea una aplicación de lista de tareas usando el patrón MVC. Las tareas deben guardarse en un archivo JSON y poder ser consultadas, añadidas y eliminadas desde la línea de comandos. Pasos: • Usa readline-sync para interactuar con el usuario. • Separa el código en Modelo, Vista y Controlador. • Usa fs para persistir las tareas en un archivo JSON.

const readlineSync = require('readline-sync'); // lee la entrada del usuario
const tasksController = require('./controller/taskController'); // importa el controlador de tareas

//funcion 

const main = () => {
    let option ;
    do{
        console.log("/ngestor de tareas");
        console.log("1. Ver tareas");
        console.log("2. Agregar tarea");
        console.log("3. Eliminar tarea");
        console.log("4. Salir");
       
       // leer la opcion del usuario
        option = readlineSync.question("elija  una opcion: ");

        //switch
        switch(option){
            case "1":
                tasksController.showTasks();// muestra las tareas
                break; 
            case "2":
                tasksController.addTask(); // agrega una tarea
                break;
            case "3":
                tasksController.deleteTask(); // elimina una tarea
                break;
            case "4":
                console.log("Hasta luego!");
                break;
            default:
                console.log("Opcion invalida");
        }
        
    } while(option !== "4");// mientras la opcion no sea 4
   
}

main(); // llama a la funcion principal
