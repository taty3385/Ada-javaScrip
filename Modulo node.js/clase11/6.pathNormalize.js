const path=require('path');
//normalizacion de una ruta con barras redundantes y puntos de navegacion

const rawPath1='home/user/docs/./file.txt';
const normalizePath1=path.normalize(rawPath1);//devuelve /home/user/docs/file.txt
console.log('ejemplo 1 normalizacion de una ruta con barras redundantes y puntos de navegacion:',normalizePath1);


//ejemplo normalizacion de una ruta con navegacion hacia arriva
const rawPath2='/home/user/docs/../images/file.jpg';
const normalizePath2=path.normalize(rawPath2);
console.log('ejemplo2 ruta normalizadas:');
console.log(normalizePath2); // /home/user/images/file.jpg

// ejemplo normalizacion de una ruta con multiples puntos de navegacion

const rawPath3='/home/user/docs/../.././file.txt';
const normalizePath3=path.normalize(rawPath3); // /home/file.txt
console.log('ejemplo3 ruta normalizadas:');
console.log(normalizePath3);