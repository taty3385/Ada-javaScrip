// Ejercicio 5: Aplicación de Notas con Módulo Path y FS
// Consigna:
// Crea una aplicación de notas donde cada nota se guarde en un archivo
// de texto dentro de una carpeta específica. Usa el módulo path para
// manejar rutas y fs para crear y leer archivos.
// Pasos:
// • Usa path.join para crear rutas dinámicas a la carpeta de notas.
// • Usa fs para crear, leer y eliminar archivos de notas.
// • Implementa un menú interactivo con readline-sync.

const net = require("net");
const path = require("path");
const fs = require("fs");

const ruta = path.join(__dirname, "notas.txt");

if (!fs.existsSync(ruta)) {
  fs.writeFileSync(ruta, "", "utf-8");
}

const server = net.createServer((socket) => {
  console.log("cliente conectado");

  socket.on("data", (data) => {
    const comando = data.toString().trim();
    switch (comando) {
      case "crear":
        socket.write("Ingrese la nota: ");
        socket.once("data", (nota) => {
          crearNotas(socket, nota.toString().trim());
        });
        break;
      case "leer":
        leerNotas(socket);
        break;
      case "eliminar":
        eliminarNotas(socket);
        break;
      default:
        socket.write("Comando no reconocido");
    }
  });

  const crearNotas = (socket, nota) => {
    fs.appendFileSync(ruta, nota + "\n", "utf-8");
    socket.write("Nota creada correctamente\n");
  };

  const leerNotas = (socket) => {
    const notas = fs.readFileSync(ruta, "utf-8");
    socket.write(notas);
  };

  const eliminarNotas = (socket) => {
    fs.unlinkSync(ruta);
    socket.write("Nota eliminada correctamente\n");
  };
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});