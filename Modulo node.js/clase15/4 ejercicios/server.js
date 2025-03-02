// Ejercicio 4: Sistema de Autenticación con UUID y JSON
// Consigna:
// Crea un sistema de autenticación básico donde los usuarios puedan
// registrarse e iniciar sesión. Cada usuario debe tener un ID único
// generado con UUID y sus datos deben guardarse en un archivo JSON.
// Pasos:
// • Usa el módulo uuid para generar IDs únicos.
// • Usa fs para guardar y leer los usuarios en un archivo JSON.
// • Implementa funciones para registrar usuarios y validar
// credenciales.
const net = require("net");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const rutaUsuarios = path.join(__dirname, "usuarios.json");

if (!fs.existsSync(rutaUsuarios)) {
  fs.writeFileSync(rutaUsuarios, "[]", "utf-8");
}

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on("data", (data) => {
    const dataString = data.toString().trim();

    if (dataString === "registro") {
      registrarUsuario(socket);
    } else if (dataString === "login") {
      iniciarSesion(socket);
    } else {
      socket.write("Comando no reconocido");
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

function registrarUsuario(socket) {
  const id = uuidv4();
  socket.write("Ingrese su nombre de usuario: ");

  socket.once("data", (data) => {
    const nombre = data.toString().trim();
    socket.write("Ingrese su contraseña: ");

    socket.once("data", (data) => {
      const password = data.toString().trim();
      const usuarios = JSON.parse(fs.readFileSync(rutaUsuarios, "utf-8") || "[]");
      usuarios.push({ id, nombre, password });
      fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2), "utf-8");
      socket.write("Usuario registrado correctamente\n");
    });
  });
}

function iniciarSesion(socket) {
  socket.write("Ingrese su nombre de usuario: ");

  socket.once("data", (data) => {
    const nombre = data.toString().trim();
    socket.write("Ingrese su contraseña: ");

    socket.once("data", (data) => {
      const contraseña = data.toString().trim();
      const usuarios = JSON.parse(fs.readFileSync(rutaUsuarios, "utf-8") || "[]");
      const usuario = usuarios.find((usuario) => usuario.nombre === nombre && usuario.password === contraseña);
      if (usuario) {
        socket.write("Bienvenido\n");
      } else {
        socket.write("Usuario o contraseña incorrecta\n");
      }
    });
  });
}

server.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});