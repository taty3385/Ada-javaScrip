// importtar  readline-sync

const readlineSync = require('readline-sync');

// funcion para mostrar las tareas
const displayTasks = (tasks) => {
if(tasks.length === 0){
    console.log("No hay tareas para mostrar");
    return;
}else{
    console.log("Tareas:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description} - ${task.complete ? "completa" : "incompleta"}`);
    });
}
}

// funcion para obtener la descripcion de la tarea

const prompForTask = () => {
    return readlineSync.question("Ingrese la descripcion de la tarea: ");
}

//funcion para pedir  un id AL usuario ara eliminar una tarea

const prompForTaskID = (tasks) => {
    const tasksIds =readlineSync.question("Ingrese el id de la tarea a eliminar: ");
    if(tasksIds < 0 || tasksIds >= tasks.length){
        console.log("Id invalido");
        return -1;
    }
 return tasksIds;
}

// funcion para confirmar la tarea

const confirmTask = (message) => {
    console.log(message);
}


module.exports = {
    displayTasks, prompForTask, prompForTaskID, confirmTask
};

