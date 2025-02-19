// # Ejercicio 3: Sistema de Gestión de Películas 🎬
// # Consigna:
// # Implementar un sistema de gestión de películas donde el cliente pueda
// # solicitar información sobre una película específica a través de su título. El
// # servidor procesará la solicitud, buscará la película en una base de datos
// # simulada (archivo JSON) y devolverá la información al cliente.
// # Pasos a seguir:
// # 1. Servidor TCP:
// # o El servidor debe escuchar en el puerto 4002.
// # o Debe recibir solicitudes del cliente que incluyan el título de
// # una película.
// # o Utilizar el patrón MVC:
// # ▪ Modelo: Encargado de leer el archivo JSON
// # (movies.json) que contiene la lista de películas y buscar
// # la película por título.
// # ▪ Vista: Encargada de formatear la respuesta que se
// # enviará al cliente (en formato JSON).
// # ▪ Controlador: Encargado de recibir la solicitud del
// # cliente, llamar al modelo para obtener los datos y
// # luego pasar esos datos a la vista para formatear la
// # respuesta.
// # o El servidor debe enviar la respuesta al cliente y cerrar la
// # conexión.
// # 2. Cliente TCP:
// # o El cliente debe conectarse al servidor y enviar el título de una
// # película.
// # o Debe recibir la respuesta del servidor y mostrarla en la
// # consola.
// # o El cliente debe permitir al usuario ingresar el título de la
// # película que desea consultar.
// # Estructura del Proyecto:
// # • models/movieModel.js: Modelo para manejar la lista de películas.
// # • views/movieView.js: Vista para formatear la respuesta.
// # • controllers/movieController.js: Controlador para manejar las
// # solicitudes.
// # • server.js: Servidor TCP.
// # • client.js: Cliente TCP.

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../peli.json");

movieModels = {
  getTitleMovie: (title) => {
    const data = fs.readFileSync(dataPath);
    const movies = JSON.parse(data);
    return movies.find((movie) => movie.title === title) || null;
  },
};
module.exports = movieModels;
