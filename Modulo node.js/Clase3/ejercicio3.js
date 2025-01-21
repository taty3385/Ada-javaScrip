// Actividad 1: Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
// programa que permita registrar libros favoritos en un archivo JSON.
// Implementa las siguientes funciones:
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
// Para esto, el libro tendrá solo un campo: su nombre.
// 2. Listar los libros: Muestra todos los libros registrados.
// Pistas:
// • Usa un archivo JSON para guardar los libros.
// • Si el archivo no existe, comienza con un arreglo vacío

// const fs = require("fs");
// const filePath = "./libros.json";

// // funcion leer libros

// const leerLibros = () => {
//   if (!fs.existsSync(filePath)) {
//     // si no existe el archivo
//     return []; // devuelvo un array vacio
//   }
//   const libros = fs.readFileSync(filePath, "utf-8"); // leo el archivo y lo guardo en la variable libros
//   return JSON.parse(libros); // convierto el archivo en un array
// };

// // funcion escribir libros en el archivo
// const escribirLibros = (libros) => {
//   fs.writeFileSync(filePath, JSON.stringify(libros, null, 2), "utf-8"); // escribo los libros en el archivo
// };

// // funcion para agregar libros
// const agregarLibro = (nombreLibro) => {
//   const libros = leerLibros(); // leo los libros existentes
//   libros.push({ id: libros.length + 1, nombre: nombreLibro }); // agrego un nuevo libro
//   escribirLibros(libros); // guardo la lista actualizada
//   console.log(`Libro agregado: "${nombreLibro}"`);
// };

// const listarLibros = () => {
//   const libros = leerLibros(); // leo los libros existentes
//   console.log("Lista de libros: ");
//   libros.forEach((libro) => {
//     console.log(`${libro.id}. ${libro.nombre}`);
//   });
// };

// agregarLibro("El principito");
// listarLibros();

// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
// que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y
// la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la
// cantidad de temporadas de una serie.
// Pistas:
// • Usa un archivo JSON para almacenar la información de las series.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • ¿Qué es fs.existsSync()?
// • El método fs.existsSync() es parte del módulo fs (file system) en
// Node.js. Este método se usa para comprobar si un archivo o
// directorio existe en el sistema de archivos de manera sincrónica, lo
// que significa que el código se ejecuta y espera a que la operación se
// complete antes de continuar con el siguiente paso.
// • Sintaxis: fs.existsSync(path);

const fs = require("fs");

// const path = "./series.Json";

// const leerSerie = () => {
//   if (!fs.existsSync(path)) {
//     return [];
//   }
//   const series = fs.readFileSync(path, "utf-8");
//   return JSON.parse(series);
// };

// const escribirSerie = (series) => {
//   fs.writeFileSync(path, JSON.stringify(series, null, 2), "utf-8");
// };

// const agregoSerie = (nombreSerie, temporada) => {
//   const series = leerSerie();
//   series.push({
//     id: series.length + 1,
//     nombre: nombreSerie,
//     cantidadTemporada: temporada,
//   });
//   escribirSerie(series);
//   console.log("serie agregada:", nombreSerie);
// };

// const listarSerie = () => {
//   const series = leerSerie();
//   series.forEach((serie) => {
//     console.log(`${serie.id}. ${serie.nombre}`);
//   });
// };

// const actualizarTemporada = (id, temporada) => {
//   const series = leerSerie();
//   const serie = series.find((serie) => serie.id === id);
//   if (serie) {
//     serie.cantidadTemporada = temporada;
//     escribirSerie(series);
//     console.log(
//       "Temporada actualizada",
//       serie.nombre,
//       "nueva temporada:",
//       serie.cantidadTemporada
//     );
//   } else {
//     console.log("Serie no encontrada");
//   }
// };

// agregoSerie("piter pan", 3);
// agregoSerie("los simpson", 10);
// agregoSerie("breaking bad", 5);
// listarSerie();
// actualizarTemporada(1, 5);
// listarSerie();
// actualizarTemporada(2, 11);

// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Eliminar una tarea se puede hacer por su ID.

const leerTareas = () => {
  if (!fs.existsSync("./tareas.json")) {
    return [];
  } else {
    const tareas = fs.readFileSync("./tareas.json", "utf-8");
    return JSON.parse(tareas);
  }
};

const escribirTareas = (tareas) => {
  fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 2), "utf-8");
};

const agregarTarea = (nuevaTarea, descripcion) => {
  const tareas = leerTareas();
  const existeTarea = tareas.some((t) => t.nombre === nuevaTarea && t.descripcion === descripcion);
  if (!existeTarea) {
  tareas.push({
    id: tareas.length + 1,
    nombre: nuevaTarea,
    descripcion: descripcion,
    estado: "pendiente",
  });
  escribirTareas(tareas);
  console.log("Tarea agregada");
} else {
  console.log("La tarea ya existe");
}
}


const listarTarea = () => {
  const tareas = leerTareas();
  tareas.forEach((t) => {
    console.log(`${t.id}. ${t.nombre}`);
  });
};

const eliminarTarea=(id)=>{
let tareas= leerTareas()
 tareas =tareas.filter((t) => t.id !== id)
 tareas = tareas.map((t, index) => ({ ...t, id: index + 1 }));
escribirTareas(tareas)
console.log("tarea eliminadacon id :", id) ;

}

agregarTarea("comprar pan", "ir a la panaderia");
agregarTarea("comprar leche", "ir al super");
listarTarea();
eliminarTarea(1);
listarTarea();



// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de
// un producto en el inventario.
// Pistas:
// • Usa un archivo JSON para guardar los productos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada producto debe tener un ID único que se pueda utilizar para
// actualizar su cantidad.

// const leerArchivo = () => {
//   if (!fs.existsSync("./inventario.json")) {
//     return [];
//   } else {
//     const productos = fs.readFileSync("./inventario.json", "utf-8");
//     return JSON.parse(productos);
//   }
// };

// const escribirProductos = (productos) => {
//   fs.writeFileSync(
//     "./inventario.json",
//     JSON.stringify(productos, null, 2),
//     "utf-8"
//   );
// };

// const agregarProducto = (nombre, cantidad) => {
//   const producto = leerArchivo();
//   const existeProducto = producto.some((p) => p.nombre === nombre && p.cantidad === cantidad);
//   if (!existeProducto) {
//     producto.push({
//       id: producto.length + 1,
//       nombre: nombre,
//       cantidad: cantidad,
//     });
//     escribirProductos(producto);
//     console.log("producto agregado");
//   }
//   else {
//     console.log("El producto ya existe");
//   }
// };

// const listarProduct = () => {
//   const productos = leerArchivo();
//   productos.forEach((p) => {
//     console.log(`${p.id} ${p.nombre}`);
//   });
// };

// const actualizar = (id, cantidad) => {
//   const productos = leerArchivo();
//   const producto = productos.find((p) => p.id === id);
//   if (producto) {
//     producto.cantidad = cantidad;
//     escribirProductos(productos);
//     console.log(
//       "producto actualizada",
//       producto.nombre,
//       "cantidad actualizada:",
//       producto.cantidad
//     );
//   } else {
//     console.log("producto no encontrado");
//   }
// };

// agregarProducto("jabon ", 5);
// agregarProducto("perfume ", 8);
// listarProduct();
// actualizar(2, 5);

// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los contactos.
// • Si el archivo no existe, comienza con un arreglo vacío.

// const leerContactos = () => {
//   if (!fs.existsSync("./contacto.json")) {
//     return [];
//   } else {
//     const contactos = fs.readFileSync("./contacto.json", "utf-8");
//     return JSON.parse(contactos);
//   }
// };

// const escribirContactos = (contactos) => {
//   fs.writeFileSync(
//     "./contacto.json",
//     JSON.stringify(contactos, null, 2),
//     "utf-8"
//   );
// };
// const agregarContacto = (nombre, telefono, email) => {
//   const contactos = leerContactos();
//   const existeContacto = contactos.some(
//     (c) => c.nombre === nombre && c.telefono === telefono && c.email === email
//   );
//   if (!existeContacto) {
//     contactos.push({
//       id: contactos.length + 1,
//       nombre: nombre,
//       telefono: telefono,
//       email: email,
//     });
//     escribirContactos(contactos);
//     console.log("contacto agregado");
//   } else {
//     console.log("El contacto ya existe");
//   }
// };

// const listarContactos = () => {
//   const contactos = leerContactos();
//   contactos.forEach((c) => {
//     console.log(`${c.id} ${c.nombre}`);
//   });
// };

// const eliminarContacto = (id) => {
//   let contactos = leerContactos();
//   contactos = contactos.filter((c) => c.id !== id);
//   contactos = contactos.map((c, index) => ({ ...c, id: index + 1 }));
//   escribirContactos(contactos);
//   console.log("contacto eliminado con id:", id);
// };
// agregarContacto("juan", 123456, "juan3385@gmail.com");
// agregarContacto("maria", 123456, "maria85@gmail.com");
// agregarContacto("pedro", 123456, "pedro@gmail.com")
// listarContactos();
// eliminarContacto(1);

//   Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID.
// Pistas:
// • Usa un archivo JSON para guardar las entradas del diario.
// • Cada entrada tendrá una fecha y un texto.
// • Si el archivo no existe, comienza con un arreglo vacío.

// const leerDiario = () => {
//   if (!fs.existsSync("./diario.json")) {
//     return [];
//   } else {
//     const diario = fs.readFileSync("./diario.json", "utf-8");
//     return JSON.parse(diario);
//   }
// };

// const escribirDiario = (diario) => {
//   fs.writeFileSync("./diario.json", JSON.stringify(diario, null, 2), "utf-8");
// };

// const agregarEntrada = (fecha, texto) => {
//   const diario = leerDiario();
//   diario.push({
//     id: diario.length + 1,
//     fecha: fecha,
//     texto: texto,
//   });
//   escribirDiario(diario);
//   console.log("entrada agregada");
// };

// const listarEntradas = () => {
//   const diario = leerDiario();
//   diario.forEach((d) => {
//     console.log(`${d.id} ${d.fecha}`);
//   });
// };

// const eliminarEntrada = (id) => {
//   let diario = leerDiario();
//   diario = diario.filter((d) => d.id !== id);
//   // Actualizar los id de las entradas restantes
//   diario = diario.map((d, index) => ({ ...d, id: index + 1 }));
//   escribirDiario(diario);
//   console.log("Entrada eliminada con id:", id);
// };

// agregarEntrada("12/10/2021", "hoy es un dia soleado");
// agregarEntrada("13/10/2021", "hoy es un dia lluvioso");
// listarEntradas();
// eliminarEntrada(1);
// agregarEntrada("14/10/2021", "hoy es un dia nublado");

// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una
// tarea de "pendiente" a "completada".
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • El estado de cada tarea puede ser "pendiente" o "completada".
// • Si el archivo no existe, comienza con un arreglo vacío.

// const leerTareasDiarias = () => {
//   if (!fs.existsSync("./tareasDiarias.json")) {
//     return [];
//   } else {
//     const tareasDiarias = fs.readFileSync("./tareasDiarias.json", "utf-8");
//     return JSON.parse(tareasDiarias);
//   }
// };

// const escribirTareasDiarias = (tareasDiarias) => {
//   fs.writeFileSync(
//     "./tareasDiarias.json",
//     JSON.stringify(tareasDiarias, null, 2),
//     "utf-8"
//   );
// };

// const agregarTareaDiaria = (descripcion, estado) => {
//   const tareasDiarias = leerTareasDiarias();
//   tareasDiarias.push({
//     id: tareasDiarias.length + 1,
//     descripcion: descripcion,
//     estado: estado,
//   });
//   escribirTareasDiarias(tareasDiarias);
//   console.log("tarea diaria agregada");
// };

// const listarTareasDiarias = () => {
//   const tareasDiarias = leerTareasDiarias();
//   tareasDiarias.forEach((t) => {
//     console.log(`${t.id} ${t.descripcion}`);
//   });
// };

// const marcarTareaCompletada = (id) => {
//   const tareasDiarias = leerTareasDiarias();
//   const tarea = tareasDiarias.find((t) => t.id === id);
//   if (tarea) {
//     tarea.estado = "completada";
//     escribirTareasDiarias(tareasDiarias);
//     console.log("tarea marcada como completada", tarea.descripcion);
//   } else {
//     console.log("tarea no encontrada");
//   }
// };

// agregarTareaDiaria("estudiar", "pendiente");
// agregarTareaDiaria("hacer ejercicio", "completada");
// listarTareasDiarias();
// marcarTareaCompletada(1);

// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y
// estado (pendiente o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un
// proyecto a "finalizado" o "en progreso".
// Pistas:
// • Usa un archivo JSON para guardar los proyectos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada proyecto debe tener un ID único.

// const path = "./proyecto.json";

// const leerProyecto = () => {
//   if (!fs.existsSync(path)) {
//     return [];
//   } else {
//     try {
//       const proyectos = fs.readFileSync(path, "utf-8");
//       return JSON.parse(proyectos);
//     } catch (error) {
//       console.error("Error al leer el archivo JSON:", error);
//       return [];
//     }
//   }
// };

// const escribirProyecto = (proyectos) => {
//   fs.writeFileSync(path, JSON.stringify(proyectos, null, 2), "utf-8");
// };

// const agregarProyecto = (nombre, descripcion, estado) => {
//   const proyectos = leerProyecto();
//   const nuevoId = proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;
//   proyectos.push({
//     id: nuevoId,
//     nombre: nombre,
//     descripcion: descripcion,
//     estado: estado,
//   });
//   escribirProyecto(proyectos);
//   console.log("Proyecto agregado");
// };

// const listarProyecto = () => {
//   const proyectos = leerProyecto();
//   proyectos.forEach((p) => console.log(`${p.id} ${p.descripcion}`));
// };

// const actualizarProyecto = (id, estado) => {
//   const proyectos = leerProyecto();
//   const proyectoActualizado = proyectos.find((p) => p.id === id);
//   if (proyectoActualizado) {
//     proyectoActualizado.estado = estado;
//     escribirProyecto(proyectos);
//     console.log("Proyecto actualizado", proyectoActualizado.estado);
//   } else {
//     console.log("El proyecto no fue encontrado");
//   }
// };

// Ejemplo de uso
// agregarProyecto("Estudiar", "Estudiar para el examen", "pendiente");
// listarProyecto();
// actualizarProyecto(1, "completado");
// listarProyecto();

// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los eventos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada evento debe tener un ID único.

// const path = "./eventos.json";

// const leerEventos = () => {
//   if (!fs.existsSync(path)) {
//     return [];
//   } else {
//     const eventos = fs.readFileSync(path, "utf-8");
//     return JSON.parse(eventos);
//   }
// };

// const escribirEvento = (eventos) => {
//   fs.writeFileSync(path, JSON.stringify(eventos, null, 2), "utf-8");
// };

// const agregarEventos = (nombre, fecha, lugar) => {
//   const eventos = leerEventos();
//   eventos.push({
//     id: eventos.length + 1,
//     nombre: nombre,
//     fecha: fecha,
//     lugar: lugar,
//   });
//   escribirEvento(eventos);
//   console.log("eventos actualizados correctamente");
// };

// const listarEvento = () => {
//   const eventos = leerEventos();
//   eventos.forEach((e) =>
//     console.log(`${e.id}  ${e.nombre} ${e.fecha} ${e.lugar}`)
//   );
// };

// const eliminarEventos = (id) => {
//   const eventos = leerEventos();
//   const eliminar = eventos.filter((e) => e.id !== id);
//   eliminar.map((e, index) => ({ ...e, id: index + 1 }));
//   escribirEvento(eliminar);
//   listarEvento();
//   console.log("el evento eliminado con id  es : ", id);
// };
// agregarEventos("correr", "12/10/2021", "parque");
// agregarEventos("nadar", "13/10/2021", "piscina");
// listarEvento();
// eliminarEventos(1);
// eliminarEventos(2);

// Actividad 10: Gestión de compras
// Consigna: Crea un programa que registre las compras realizadas. El
// programa debe permitirte:
// 1. Agregar una compra: Registrar una compra con su nombre y
// precio.
// 2. Listar las compras: Mostrar todas las compras registradas.
// 3. Eliminar una compra: Eliminar una compra de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las compras.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada compra debe tener un ID único

// const path = "./compras.json";

// const leerCompras = () => {
//   if (!fs.existsSync(path)) {
//     return [];
//   } else {
//     const compras = fs.readFileSync(path, "utf8");
//     return JSON.parse(compras)
//   }
// };

// const escribirCompras=(compras)=>{
// fs.writeFileSync(path, JSON.stringify(compras , null , 2 ),"utf8")
// }

// const agregarCompras=(nombre , precio)=>{
//  const compras= leerCompras()
//  compras.push({id : compras.length + 1 , nombre:nombre , precio:precio})
//  escribirCompras(compras)
//  console.log("Su compra fue agregada exitosamente");

// }

// const listarCompras=()=>{
//   const compras=leerCompras()
//   compras.forEach((c)=>console.log(`${c.id} ${c.nombre} ${c.precio}`)
// )
// }

// const eliminarCompra = (id) => {
//   let compras = leerCompras();
//   compras = compras.filter((c) => c.id !== id);
//   // Actualizar los id de las compras restantes
//   compras = compras.map((c, index) => ({ ...c, id: index + 1 })); // mapeo las compras y su index y realizo una copia de las compras
//   escribirCompras(compras);
//   console.log("Compra eliminada con id:", id);
// };

// agregarCompras("pantalon", 500)
// agregarCompras("remera", 300)
// listarCompras()
// eliminarCompra(1)
// agregarCompras("zapatillas", 1000)
// agregarCompras("campera", 800)
// eliminarCompra(2)

// hacer denuevo los eliminar porque no seatualizan correctamente
