// importamos el modelo y la vista

const taskModel = require("../models/taskModels");
const taskView = require("../view/taskViews");

// funcion para mostrar las tareas

const showTasks = () => { 
  const tasks = taskModel.readTasks(); // leer las tareas desde el modelo
  taskView.displayTasks(tasks); // mostrar las tareas en la vista
};

// agregar una tarea
const addTask = () => { 
  const taskDescription = taskView.prompForTask(); // obtener la descripcion de la tarea
  const task = taskModel.readTasks(); // leer las tareas desde el modelo
  task.push({ description: taskDescription, complete: false }); // agregar la tarea al array
  taskModel.saveTasks(task); // guardar las tareas en el modelo
  taskView.confirmTask('tarea agregada'); // confirmar la tarea
};


// eliminar una tarea
const deleteTask=() => { 
    const tasks = taskModel.readTasks(); // leer las tareas desde el modelo
    if(tasks.length === 0){
        taskView.addTask('no hay tareas para eliminar'); // confirmar la tarea
        return;
    }
   const taskId= taskView.prompForTask(tasks); // obtener el id de la tarea a eliminar
    tasks.splice(taskId,1); // eliminar la tarea del array una tarea del array
    taskModel.saveTasks(tasks); // guardar las tareas en el modelo
    taskView.confirmTask('tarea eliminada'); // confirmar la tarea

}

module.exports = {
  showTasks, addTask, deleteTask
};
