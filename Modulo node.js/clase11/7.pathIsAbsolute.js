const path = require('path');

//ejemplo 1 veroficacion  de una ruta absolita en unix
const ruta1='/home/user/docs/file.txt';
const isAbsolute1=path.isAbsolute(ruta1);
console.log('ejemplo 1 verficacion  de una ruta absoluta ',isAbsolute1);


//ejemplo 2 veroficacion  de una ruta absoluta en windows
const ruta2='C:\\Users\\user\\docs\\file.txt';
const isAbsolute2=path.isAbsolute(ruta2);
console.log('ejemplo 2 verficacion  de una ruta absoluta ',isAbsolute2);