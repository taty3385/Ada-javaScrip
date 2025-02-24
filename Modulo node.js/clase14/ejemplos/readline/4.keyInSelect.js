const readline = require('readline-sync');

const lenguajes= ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'C++', 'Go', 'Swift', 'Kotlin'];
const indexSeleccionado = readline.keyInSelect(lenguajes, 'Seleccione el lenguaje de programacion que desea aprender?');

if(indexSeleccionado === -1){
    console.log(`no has selecionado un lenguaje de programacion`);
} else{
   console.log(`has selecionado ${lenguajes[indexSeleccionado]}`);
}                      