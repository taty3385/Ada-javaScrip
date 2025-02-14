const path = require('path');
//ejemplo 1 resoluccion de una ruta relativa del directorio 
 const resolvePath1=path.resolve('file.txt');
 console.log("ejemplo 1 resoluccion de una ruta relativa del directorio actual :",resolvePath1);
 
 //ejemplo 2 resolucion de multiples segmentos de rutas en una una ruta absoluta

    const resolvePath2=path.resolve('home/user' ,'docs' , 'file.txt');
console.log("ejemplo 2 resolucion de multiples segmentos de rutas en una una ruta absoluta:",resolvePath2);

//ejemplo 3  rutas relativas que suben varios niveles de directorio
const resolvePath3=path.resolve('home/user/docs','/..images', 'file.jpg');
console.log("ejemplo 3 rutas relativas que suben varios niveles de directorio:",resolvePath3);
   