// Ejercicio 1: ¡Crea tu perfil digital!
// Consigna:
// Imagina que acabas de unirte a una red social donde puedes crear tu
// perfil digital básico. Tu misión es:
// 1. Crear un archivo llamado perfil.json.
// 2. Dentro de este archivo, guarda información sobre ti: nombre, edad
// y tu ciudad favorita.
// 3. Usa el módulo fs para escribir este archivo desde Node.js.
//  Pista: Utiliza JSON.stringify para convertir tu información en un
// formato que pueda guardarse en el archivo.

const fs = require("fs");

// const perfil = {
//   nombre: "Lucas",
//   edad: 25,
//   ciudadFavorita: "Bariloche",
// };
// const escribirPerfil = (perfil) => {
//   try {
//     fs.writeFileSync("perfil.json", JSON.stringify(perfil, null, 2));
//     console.log("Perfil guardado correctamente");
//   } catch (err) {
//     console.error("Error escribiendo el archivo:", err);
//   }
// };
// escribirPerfil(perfil);
// Ejercicio 2: Descubre tu perfil
// Consigna:
// Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
// en el ejercicio anterior y muestra la información en la consola para
// asegurarte de que todo está correcto.
//  Pista: Utiliza fs.readFile con la codificación

// const leerPerfil = () => {
//   try {
//     const data = fs.readFileSync("perfil.json", "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     console.error("Error leyendo el archivo:", err);
//     return [];
//   }
// };

// const perfileido = leerPerfil();
// console.log("Perfil leído:", perfileido);

// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
// en el archivo perfil.json.
//  Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
// escribirlo.

// const actualizarPerfil = (hobby) => {
//   const perfil = leerPerfil(); // leo el perfil
//   if (perfil) {
//     // si se pudo leer el perfil
//     perfil.hobby = hobby; // agrego la nueva clave y le asigno el valor
//     escribirPerfil(perfil); // guardo el perfil actualizado al json
//     console.log("Perfil actualizado correctamente"); // muestro mensaje de éxito
//   } else {
//     console.error("No se pudo leer el perfil para actualizarlo"); // muestro mensaje de error
//   }
// };

// actualizarPerfil("pescar");

// Ejercicio 4: ¿Existe tu perfil?
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
// existe. Si no existe, crea uno nuevo con un perfil básico.
//  Pista: Usa fs.existsSync para verificar la existencia del archivo.

// const verificarPerfil = () => {
//   if (!fs.existsSync("perfil.json")) {
//     escribirPerfil({ nombre: "", edad: 0, ciudadFavorita: "", hobby: "" });
//     console.log("Perfil creado correctamente");
//   } else {
//     console.log("El perfil ya existe");
//   }
// };
// verificarPerfil();
// Ejercicio 5: ¡Despídete de tu perfil!
// Consigna:
// ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
// Verifica que el archivo existe antes de intentar borrarlo.
//  Pista: Usa fs.unlink para eliminar archivos

// const eliminarPerfil = () => {
//     if (fs.existsSync('perfil.json')) {
//         fs.unlinkSync('perfil.json');
//         console.log("Perfil eliminado correctamente");
//     } else {
//         console.log("El perfil no existe");
//     }
// }

// eliminarPerfil()

// Ejercicio 6: Tu lista de metas
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json
// con una lista vacía al principio. Luego, agrega metas como: “Aprender
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
//  Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
// lista.

// const leerMetas = () => {
//   if (!fs.existsSync("metas.json")) {
//     return [];
//   } else {
//     try {
//       const data = fs.readFileSync("metas.json", "utf-8");
//       return JSON.parse(data);
//     } catch (error) {
//       console.log("error al leer el archivo", error);
//     }
//   }
// };

// const escribirMetas = (metas) => {
//   try {
//     fs.writeFileSync("metas.json", JSON.stringify(metas, null, 2), "utf-8");
//   } catch (error) {
//     console.log("error al escribir el archivo", error);
//   }
// };
// let metas = leerMetas();

// metas.push("Aprender Node.js");
// metas.push("Viajar a Japón");
// escribirMetas(metas);

// Ejercicio 7: Encuentra tu meta perdida
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
//  Pista: Usa fs.readFile para leer el archivo y un método como find para
// buscar en la lista.

// const bucarMeta = (meta) => {
//   const metas = leerMetas();
//   const metasIcluida = metas.find((m) => m === meta);
//   if (metasIcluida) {
//     console.log("La meta ya está incluida", metasIcluida);
//   } else {
//     console.log("La meta no está incluida");
//   }
// };
// bucarMeta("Viajar a Japón");
// bucarMeta("Viajar a Rusia");

// Ejercicio 8: Cuenta tus metas
// Consigna:
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
// archivo metas.json y cuente cuántas metas tienes actualmente.
//  Pista: Usa length para obtener la cantidad de elementos en la lista.

// const contarMetas = () => {
//   let metas = leerMetas();
//   metas = metas.length;
//   console.log("la cantidad de metas disponible que son es :", metas);
// };
// contarMetas();

// Ejercicio 9: Filtra tus metas completas
// Consigna:
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
// Filtra las metas que ya completaste y muéstralas en la consola.
//  Pista: Modifica las metas para que sean objetos con un atributo
// estado. Usa el método filter para obtener las completas.
//

// const transformarMetas = (metas) => {
//   const metasTransformada = metas.map((meta, index) => {
//     return {
//       meta: meta,
//       estado: index % 2 === 0 ? "completa" : "pendiente", // Alterna entre completa y pendiente
//     };
//   });

//   escribirMetas(metasTransformada); // Guardo las metas transformadas en el archivo
//   return metasTransformada; // Devuelvo las metas transformadas
// };

// const filtrarMetasCompletas = () => {
//   let metas = leerMetas(); // Leo las metas
//   let metasTransformadas = transformarMetas(metas); // Transformo las metas
//   let metasCompletas = metasTransformadas.filter(
//     (meta) => meta.estado === "completa"
//   ); // Filtro las metas completas
//   console.log("Metas completas:", metasCompletas);
// };

// filtrarMetasCompletas();

// Ejercicio 10: ¡Haz un respaldo de tus metas!
// Consigna:
// Nunca está de más guardar una copia de seguridad. Escribe un programa
// que copie el contenido de metas.json en un archivo llamado
// respaldo_metas.json.
// Pista: Usa el método fs.copyFile para copiar archivos de manera
// sencilla.

// const respaldarMetas = () => {
//   try {
//     fs.copyFileSync("metas.json", "respaldo_metas.json"); // Copio el archivo metas.json a respaldo_metas.json
//     console.log("Metas respaldadas correctamente"); // Muestro mensaje de éxito
//   } catch (err) {
//     console.error("Error al respaldar las metas:", err); // Muestro mensaje de error
//   }
// };
// respaldarMetas();

// Ejercicio 11: Sistema de gestión de contactos
// Consigna:
// Imagina que estás desarrollando una miniaplicación para gestionar
// contactos. Tu objetivo es:
// 1. Crear un archivo llamado contactos.json que almacene una lista de
// contactos.
// 2. Implementar funciones para:
// o Agregar un contacto: Cada contacto debe tener nombre,
// teléfono y email.
// o Listar todos los contactos.
// o Buscar un contacto por nombre.
// 3. Asegúrate de que los contactos no se repitan (valida el nombre
// antes de agregarlo).
// Pista: Usa readFile para obtener la lista actual de contactos y writeFile
// para guardar cambios.

const leerContactos = () => {
  if (!fs.existsSync("contacto.json")) {
    return [];
  } else {
    const contactos = fs.readFileSync("contacto.json", "utf-8");
    return JSON.parse(contactos);
  }
};

const escribirContacto = (contacto) => {
  fs.writeFileSync("contacto.json", JSON.stringify(contacto, null, 2), "utf-8");
};

const agregarContacto = (nombre, telefono, email) => {
  const contactos = leerContactos();
  const contactoExistente = contactos.find(
    (contacto) =>
      contacto.nombre === nombre ||
      contacto.telefono === telefono ||
      contacto.email === email
  );

  if (!contactoExistente) {
    contactos.push({ nombre: nombre, telefono: telefono, email: email });
    escribirContacto(contactos);
    console.log("Contacto agregado correctamente");
  } else {
    console.log("El contacto ya existe");
  }
};

agregarContacto("tamara", 424444, "taty66@gmail.com");
agregarContacto("jesica", 424334, "ddddddd");

const listarContactos = () => {
  const contactos = leerContactos();
  contactos.forEach((c) => console.log(c.nombre, c.telefono, c.email));
};

listarContactos();

const buscador = (nombre) => {
  let contactos = leerContactos();
  contactos = contactos.find((c) => c.nombre === nombre);
  if (contactos){
    console.log("el contacto se encuentra en la lista " ,contactos);
    
  }else{
    console.log("no existe dicho contacto");
    
  }
};

buscador("jorge")

// Ejercicio 12: Sistema de registro de tareas           
// Consigna: 
// Crea un programa que maneje un archivo tareas.json con las siguientes 
// funcionalidades: 
// 1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y 
// estado (pendiente o completa). 
// 2. Completar una tarea: Cambia el estado de una tarea a completa. 
// 3. Listar tareas por estado: Muestra las tareas agrupadas por su 
// estado (pendiente o completa). 
// Pista: Utiliza métodos como filter y map para manipular la lista de 
// tareas.

const leerTarea=()=>{
if(!fs.existsSync("tareas.json")){
  return []
} else{
 return JSON.parse(fs.readFileSync("tareas.json" ,"utf-8")) 
}
}
leerTarea()

const escribirTarea=(tarea)=>{
  fs.writeFileSync("tareas.json" ,JSON.stringify(tarea, null ,2 ),"utf-8" )
}

const agregartarea=(nombre , descripcion , estado)=>{
const tareas=leerTarea()
tareas.push({nombre:nombre ,descripcion:descripcion ,estado:estado })
escribirTarea(tareas)
}
agregartarea("tamara" , "fffffff" , "pendiente")


const completarTarea = () => {
  let tareas = leerTarea();
  tareas = tareas.map((t) => {
    t.estado = t.estado === "pendiente" ? "completa" : t.estado;
    return t;
  });
  escribirTarea(tareas);
};

completarTarea();

const listarTareas = (estado) => {
  let tareas = leerTarea();
  tareas = tareas.filter((t) => t.estado === estado);
  console.log("Tareas", estado, ":", tareas);
};

listarTareas("pendiente");
listarTareas("completa");

// Ejercicio 13: Inventario de productos      
// Consigna: 
// Crea un programa para manejar un archivo inventario.json. Debes: 
// 1. Agregar productos al inventario con nombre, cantidad y precio. 
// 2. Actualizar la cantidad de un producto existente. 
// 3. Calcular el valor total del inventario. 
// Pista: Usa un ciclo para calcular el valor total. 

const leerInventario = () => {  
  if (!fs.existsSync("inventario.json")) {    
    return [];  
  } else {    
    const inventario = fs.readFileSync("inventario.json", "utf-8");    
    return JSON.parse(inventario);  
  }
}
const escribirInventario = (inventario) => {
  fs.writeFileSync("inventario.json", JSON.stringify(inventario, null, 2), "utf-8");
}

const agregarProducto = (nombre, cantidad, precio) => {
  const inventario = leerInventario();
  const productoExistente = inventario.find((producto) => producto.nombre === nombre);
  if (!productoExistente) {
    inventario.push({ nombre: nombre, cantidad: cantidad, precio: precio });
    escribirInventario(inventario);
    console.log("Producto agregado correctamente");
  } else {
    console.log("El producto ya existe");
  }
}

const actualizarCantidad = (nombre, cantidad) => {
  let inventario = leerInventario();
  const producto = inventario.find((producto) => producto.nombre === nombre); // Busco el producto por nombre
  if (producto) { // Si el producto existe
    producto.cantidad = cantidad; // Actualizo la cantidad
    escribirInventario(inventario); // Guardo el inventario actualizado
    console.log("Cantidad actualizada correctamente");
  } else {
    console.log("El producto no existe");
  }
}

const calcularValorTotal = () => {
  let inventario = leerInventario();
  let valorTotal = inventario.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);// Calculo el valor total del inventario
  console.log("Valor total del inventario:", valorTotal);
}

agregarProducto("manzana", 10, 100);
agregarProducto("banana", 20, 200);
actualizarCantidad("manzana", 100);
calcularValorTotal();


// Ejercicio 14: Diario personal        
// Consigna: 
// Desarrolla un programa para escribir entradas de un diario en un archivo 
// diario.json. Cada entrada debe incluir fecha, titulo y contenido. Además: 
// 1. Permite listar todas las entradas. 
// 2. Filtra entradas por una palabra clave en el título. 
// Pista: Usa new Date() para registrar la fecha automáticamente. 

const leerDiario = () => {
  if (!fs.existsSync("diario.json")) {
    return [];
  } else {
    const diario = fs.readFileSync("diario.json", "utf-8");
    return JSON.parse(diario);
  }
}
const escribirDiario = (diario) => {
  fs.writeFileSync("diario.json", JSON.stringify(diario, null, 2), "utf-8");
}

const agregarEntrada = (titulo, contenido) => {
  const diario = leerDiario();
  diario.push({ fecha: new Date(), titulo: titulo, contenido: contenido });
  escribirDiario(diario);
  console.log("Entrada agregada correctamente");
}

const listarEntradas = () => {
  const diario = leerDiario();
  diario.forEach((entrada) => console.log(entrada.fecha, entrada.titulo, entrada.contenido));
}

const filtrarEntradas = (palabraClave) => {
  let diario = leerDiario();
  diario = diario.filter((entrada) => entrada.titulo.includes(palabraClave));
  console.log("Entradas filtradas:", diario);
}

agregarEntrada("titulo1", "contenido1");
agregarEntrada("titulo2", "contenido2");
listarEntradas();
filtrarEntradas("titulo1");


// Ejercicio 15: Historial de actividades deportivas                     
// Consigna: 
// Crea un programa para registrar actividades deportivas en un archivo 
// actividades.json. Debe incluir: 
// 1. Registrar una actividad con tipo (correr, nadar), duración (en 
// minutos) y fecha. 
// 2. Mostrar todas las actividades realizadas. 
// 3. Filtrar actividades por tipo (por ejemplo, solo mostrar las de 
// "correr"). 
// Pista: Usa Date.now() para obtener la fecha exacta. 

const leerActividades = () => {
  if (!fs.existsSync("actividades.json")) {
    return [];
  } else {
    const actividades = fs.readFileSync("actividades.json", "utf-8");
    return JSON.parse(actividades);
  }
}
const escribirActividades = (actividades) => {
  fs.writeFileSync("actividades.json", JSON.stringify(actividades, null, 2), "utf-8");
}

const registrarActividad = (tipo, duracion) => {
  const actividades = leerActividades();
  actividades.push({ tipo: tipo, duracion: duracion, fecha: new Date() });
  escribirActividades(actividades);
  console.log("Actividad registrada correctamente");
}

const listarActividades = () => {
  const actividades = leerActividades();
  actividades.forEach((actividad) => console.log(actividad.tipo, actividad.duracion, actividad.fecha));
}

const filtrarActividades = (tipo) => {
  let actividades = leerActividades();
  actividades = actividades.filter((actividad) => actividad.tipo === tipo);
  console.log("Actividades filtradas:", actividades);
}

registrarActividad("correr", 30);
registrarActividad("nadar", 60);
listarActividades();
filtrarActividades("correr");