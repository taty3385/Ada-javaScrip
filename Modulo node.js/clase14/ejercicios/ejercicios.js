// Actividades:

// Ejercicio 1: Uso Básico de readline-sync
// Crea un script en Node.js que utilice el módulo readline-sync para
// solicitar al usuario que ingrese su nombre y edad. Luego, muestra un
// mensaje de saludo personalizado que incluya el nombre y la edad del
// usuario.

const readline= require('readline-sync');
const cripto=require('crypto');



// const nombre =readline.question("ingrese  su nombre : ")
// const edad =readline.question("ingrese  su  edad : ")


// if(edad>=18){
//     console.log(`Hola ${nombre}, usted es mayor de edad.`);
    
// }else {
//     console.log(`Hola ${nombre}, usted es menor de edad.`);
    
// }
    



// Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de Node.js que muestre un menú de opciones usando
// readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
// ver un mensaje de bienvenida, generar un hash de un texto, o salir.

// const pelicuals=["thor","spiderman","batman","superman","hulk","ironman"]
//  const menuSeleccion=readline.keyInSelect(pelicuals,"seleccione una pelicula")
//  if(menuSeleccion===-1){
//     console.log("no has selecionado una pelicula");
    
//  }else{
//     console.log(`has selecionado ${pelicuals[menuSeleccion]}`)
    
//  }

 // Ejercicio 3: Cálculo de Hash Simple
// Escribe un script en Node.js que use el módulo crypto para generar un
// hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
// la consola.

//mensaje secreto
// const data= "hola soy un mensaje secreto"

// // creo el objeto hash usando el algoritmo sha256
// const hash=cripto.createHash('sha256')
// //actualizo el hash con los datos
// hash.update(data)
// //obtener el hash en formato hexadecimal
// const hashHex=hash.digest('hex')

// console.log(`El hash de sha256 mensaje es: ${hashHex}`);



// Ejercicio 4: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de
// números separados por comas. Ordena los números de menor a mayor y
// muestra la lista ordenada.

// const listaNumeros=readline.question("ingrese una lista de numeros separados por coma: ")
// const numeroOrdenados=listaNumeros.split(',')
// numeroOrdenados.sort((a,b)=>a-b)
// console.log(`los numeros ordenados de menor a mayor son: ${numeroOrdenados}`)

// DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto
// Crea un script en Node.js que permita al usuario ingresar un texto, luego
// lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
// resultado original. Usa el módulo crypto para el cifrado y descifrado.

// const data= readline.question("ingrese un mensaje secreto: ")
// const algoritmo='aes-256-cbc'
// const key=cripto.randomBytes(32)
// const iv=cripto.randomBytes(16)

// const cipher=cripto.createCipheriv(algoritmo,key,iv)
// let encriptado=cipher.update(data,'utf8','hex')
// encriptado+=cipher.final('hex')

// console.log(`Texto cifrado: ${encriptado}`)

// const decipher=cripto.createDecipheriv(algoritmo,key,iv)
// let desencriptado=decipher.update(encriptado,'hex','utf8')
// desencriptado+=decipher.final('utf8')
// console.log(`Texto descifrado: ${desencriptado}`)


// DESAFIO Ejercicio 6: Hash de Contraseña con Sal
// Crea un script en Node.js que permita al usuario ingresar una contraseña
// y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
// genera un hash de la contraseña combinada con el "sal" usando el
// algoritmo SHA-256. Muestra el hash generado.


// const password=readline.question("ingrese una contraseña: ")
// const sal=cripto.randomBytes(16).toString('hex') //genera un sal aleatorio
// const hash=cripto.createHash('sha256') //crea un objeto hash con el algoritmo sha256


// hash.update(password+sal) //actualiza el hash con la contraseña y el sal
// const hashHex=hash.digest('hex') //obtiene el hash en formato hexadecimal
// console.log(`El hash de la contraseña con sal es: ${hashHex}`)
// console.log(`El sal es: ${sal}`);

