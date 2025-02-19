// Ejercicios: 
// Ejercicio 1: Sistema de Gestión de Libros        
// Consigna: 
// Vamos a implementar un sistema de gestión de libros donde el cliente 
// pueda solicitar información sobre un libro específico a través de su ID. El 
// servidor procesará la solicitud, buscará el libro en una base de datos 
// simulada (archivo JSON) y devolverá la información al cliente. 
// Pasos a seguir: 
// 1. Servidor TCP: 
// o El servidor debe escuchar en el puerto 4000. 
// o Debe recibir solicitudes del cliente que incluyan el ID de un 
// libro. 
// o Utilizar el patrón MVC: 
// ▪ Modelo: Encargado de leer el archivo JSON 
// (books.json) que contiene la lista de libros y buscar el 
// libro por ID. 
// ▪ Vista: Encargada de formatear la respuesta que se 
// enviará al cliente (en formato JSON). 
// ▪ Controlador: Encargado de recibir la solicitud del 
// cliente, llamar al modelo para obtener los datos y 
// luego pasar esos datos a la vista para formatear la 
// respuesta. 
// o El servidor debe enviar la respuesta al cliente y cerrar la 
// conexión. 
// 2. Cliente TCP: 
// o El cliente debe conectarse al servidor y enviar un ID de libro. 
// o Debe recibir la respuesta del servidor y mostrarla en la 
// consola. 
// o El cliente debe permitir al usuario ingresar el ID del libro que 
// desea consultar. 
// Estructura del Proyecto: 
// • models/bookModel.js: Modelo para manejar la lista de libros. 
// • views/bookView.js: Vista para formatear la respuesta. 
// • controllers/bookController.js: Controlador para manejar las 
// solicitudes. 
// • server.js: Servidor TCP. 
// • client.js: Cliente TCP.


//el models es el encargado de interactuar con los datos de los libros 

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "boocks.json"); //ruta del archivo json de libros path.join(__dirname, "boocks.json") 

const bookModel = { 
    getBookId: (id) => { //metodo para obtener un libro por id
        const data = fs.readFileSync(dataPath); //leemos el archivo json de libros de manera sincrona
        const books = JSON.parse(data); //convertimos el archivo json a javascript
        return books.find((book) => book.id == id) || null; //buscamos el libro por el id cuyo id sea igual al id que recibimos como parametro si no se encuentra devolvemos null
    },
}

module.exports=bookModel; //exportamos el objeto bookModel para que pueda ser utilizado en otros archivos
