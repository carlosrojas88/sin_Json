//Usando una entrada de datos

const prompt = require('prompt-sync')();
let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola, ${nombre}. Bienvenido a la clase 3.`);

//entrada de datos numéricos

let entradaedad = prompt('Ingresa tu edad: ');
let edad = Number(entradaedad);
if (isNaN(edad))
{
    console.log('Error: Debes ingresar un numero válido.');
} else {
    console.log(`Tu edad ingresada es: ${edad}`);
}

//entrada anidada

let edad2 = Number(prompt('Ingresa tu edad: '));

if (isNaN(edad2)) {
    console.log('Error: Debes ingresar un numero válido.');
} else {
    if (edad2 >= 18) {
        console.log('Acceso concedido: sos mayor de edad.');
    } else {
        console.log('Acceso denegado: sos menor de edad.');
    }
}

//ejercicio 1 tarifa de transporte

let edad3 = Number(prompt('Ingresa tu edad: '));
let estudiante = prompt(`tienes carnet (si/no): `);
let carnet = estudiante === 'si'
let tarifa = 1000;

if (isNaN (edad3)){
    console.log('error: debes ingresar un numero valido')
} else {
    if (edad3 >= 65 || carnet === true) {
        tarifa = tarifa / 2;
        console.log(`Tu tarifa con descuento es: ${tarifa}`);
    } else if (edad3 < 6) {
        tarifa = 0;
        console.log(`Tu tarifa es: ${tarifa}`);
    } else {
        console.log(`Tu tarifa es: ${tarifa}`);
    }
}

//ejercicio 2 clasificador de calificaciones con validacion

let nota = Number(prompt('ingresa la nota asignada: '))

if (isNaN (nota)){
    console.log('error: debes ingresar un numero valido: ')
} else {
    if (nota <=5){
        console.log('Reprobado')
    } else {
        if (nota <=6) {
        console.log('Aprobado')
    } else if (nota <=8) {
        console.log('sobresaliente')
    } else {
        console.log('Excelente')
    }
    }
}

// ejercicio 3 becado

let promedio = Number(prompt('Ingrese el promedio general: '))
let money = prompt(`ingresos mensuales (si/no): `);
let ingresof = money === 'si'
if (isNaN (promedio)){
    console.log('error: debes ingresar un numero valido: ')
} else {
    if (promedio >= 8 || ingresof === true) {
        console.log('Felicidades, has sido aceptado en la beca')
    } else if (promedio >=9){
        console.log('Felicidades, has sido aceptado en la beca')
    } else {
        console.log('No ha sido aceptado en la beca')
    }
}

