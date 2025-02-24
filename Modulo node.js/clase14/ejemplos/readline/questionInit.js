const readline = require('readline-sync');
// solicitamos el numero entero al usuario y si no los da sigue preguntando hasta que le de un numero entero 
const  edad = readline.questionInt('ingrese  su  edad? ');
console.log(` tienes ${edad} años`);


if (edad >= 18) {
    console.log('Eres mayor de edad');
} else{
    console.log('Eres menor de edad , no puedes ingresar');
}

//permite los numeros decimales y numeros enteros 
const edadFloat = readline.questionFloat('ingrese  su  edad? ');
console.log(` tienes ${edadFloat} años`);
