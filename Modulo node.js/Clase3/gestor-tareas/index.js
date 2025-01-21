
const fs = require(`fs`)
const { json } = require("stream/consumers")

const filePath= "./tareas.JSon"

// leemos los argumentos pasados desde la linea de comandos

const args= process.argv.slice(2)
const comando=args[0] //primer argumento de comando a ejecutar
const descripcion=args.slice(1).join(" ") // el resto de los argumentos de la descripcion de tareas


// funcion para leer un archivo Json y devolver las tareas

const leerArchivos=()=>{
    const contenido=fs.readFileSync(filePath ,'utf8')
    return JSON.parse(contenido) // convierte el contenido a un arreglo de tareas
}

// funcion para escribir las tareas en el archivo Json

const escribirTareas = (tareas) => {
    const json = JSON.stringify(tareas, null, 2);// convierte las tareas a un string osea formato json
    fs.writeFileSync(filePath, json,'utf8'); // escribimos las tareas en el archivo
}


// funcion para agregar una tarea

const agregarTarea = (descripcion) => {
    const tareas = leerArchivos() // leer las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion: descripcion, completado: false }) // agregar una nueva tarea
    escribirTareas(tareas) // guardar la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
}

// funcion para listar  todas las tareas 
const listarTareas = () => {
    const tareas = leerArchivos() // leemos las tareas existentes
    console.log("Lista de tareas: ");
    tareas.forEach(tarea => {
        const estado=tarea.completado ? "Completado" : "Pendiente" // si la tarea esta completada o pendiente
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    })
}

// funcion para marcar la funcion como completada

const completarTarea = (id) => {
    const tareas = leerArchivos() // leer las tareas existentes
    const tarea = tareas.find(tarea => tarea.id == parseInt(id) ) // buscar la tarea por el id
    if (tarea) {
        tarea.completado = true // marcar la tarea como completada
        escribirTareas(tareas) // guardar la lista actualizada
        console.log(`Tarea completada: "${tarea.descripcion}"`);  
    } else{
        console.log("Tarea no encontrada");
        
    }
   

}

//manejamos los comandos

switch (comando) {
    case "agregar":
        agregarTarea(descripcion)
        break;
    case "listar":
        listarTareas()
        break;
    case "completar":
        completarTarea(descripcion)
        break;
    default:
        console.log("Comando no reconocido usa 'agregar', 'listar' o 'completar'");
        break;
}