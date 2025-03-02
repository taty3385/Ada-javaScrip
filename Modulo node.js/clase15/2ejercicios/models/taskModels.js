// importamos el fs

const fs = require("fs");
const filePath = "./data/task.json";

// funcion para leer las tareas

const readTasks = () => {
    const data= fs.readFileSync(filePath); // leer el archivo
    return JSON.parse(data); // convertir el archivo a un objeto json

}

// funcion para guardar las tareas

const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks ,null , 2)); // convertimo el objeto json a un string y lo guardamos en el archivo


}

module.exports = {
    readTasks, saveTasks
};