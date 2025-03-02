SIMULACRO de Trabajo Práctico Integrador: 
Modulo 3 – Fundamentos de NodeJs. 
¡Hola Chicas!            
Para este simulacro, vamos a desarrollar un sistema para 
gestión de registro de vehículos utilizando un servidor TCP 
implementado con Node.js. 
Este proyecto recomiendo hacerlo siguiendo los pasos. Una vez 
terminado pueden si desean colocarlo dentro de su carpeta 
“ADA_TRABAJOS” 
1. Configuración del Proyecto  
o Objetivo: Inicializar y configurar el proyecto Node.js. 
o Instrucciones:  
▪ Crea una carpeta para tu proyecto llamada 
"vehicle-api". 
▪ Dentro de esta carpeta, inicializa un proyecto 
Node.js usando el comando npm init y sigue las 
instrucciones para configurar tu package.json. 
▪ Instala las dependencias necesarias, incluyendo 
uuid para manejar identificadores únicos (npm 
install uuid). 
▪ Asegúrate de que tu package.json esté 
correctamente configurado y que el proyecto 
pueda ser iniciado con el comando npm start. 
2. Estructura y Modularización del Proyecto  
o Objetivo: Organizar el proyecto utilizando el patrón 
MVC. 
o Instrucciones:  
▪ Organiza tu proyecto en carpetas siguiendo la 
estructura del patrón MVC:  
▪ controllers/ - Controladores para manejar 
la lógica de la aplicación. 
▪ models/ - Modelos para la gestión de 
datos y la lógica de negocio. 
▪ views/ - Vistas para la presentación de 
datos (en este caso, el formato de 
respuesta). 
▪ Asegúrate de que cada carpeta tenga un 
propósito claro y esté utilizada correctamente 
en el proyecto. 
3. Manejo de Datos con JSON  
o Objetivo: Crear y gestionar archivos JSON para 
vehículos, marcas y modelos. 
o Instrucciones:  
▪ En la carpeta data, crea un archivo JSON: 
vehicles.json,  
▪ El archivo debe contener datos iniciales para 
vehículos, marcas y modelos, respectivamente. 
▪ Implementa en el modelo la lógica para leer y 
escribir datos desde y hacia estos archivos 
usando el módulo FS. 
4. Implementación del Servidor TCP  
o Objetivo: Implementar un servidor TCP utilizando el 
módulo NET. 
o Instrucciones:  
▪ En el archivo server.js, implementa el servidor 
TCP utilizando el módulo NET. 
▪ Configura el servidor para escuchar conexiones 
en el puerto 8080 y para recibir comandos de 
los clientes. 
▪ Asegúrate de manejar correctamente múltiples 
conexiones y de devolver respuestas claras a los 
clientes. 
▪ Implementa el manejo de errores para asegurar 
que el servidor responda de manera adecuada a 
diferentes situaciones. 
5. Desarrollo del Cliente TCP  
o Objetivo: Implementar un cliente TCP para interactuar 
con el servidor. 
o Instrucciones:  
▪ En el archivo client.js, implementa un cliente TCP 
que se conecte al servidor en el puerto 8080. 
▪ Implementa comandos para interactuar con la 
API del servidor, como GET VEHICLES, ADD 
VEHICLE {}, etc. (puedes agregar mas si deseas, 
pero con estos dos como mínimo basta) 
▪ Asegúrate de que el cliente pueda enviar 
comandos y recibir respuestas correctamente 
desde el servidor. 