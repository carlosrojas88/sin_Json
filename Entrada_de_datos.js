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
    console.log('error: debes ingresar un numero valido.')
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
    console.log('error: debes ingresar un numero valido.')
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
    console.log('error: debes ingresar un numero valido.')
} else {
    if (promedio >= 8 || ingresof === true) {
        console.log('Felicidades, has sido aceptado en la beca')
    } else if (promedio >=9){
        console.log('Felicidades, has sido aceptado en la beca')
    } else {
        console.log('No ha sido aceptado en la beca')
    }
}

// ejercicio 4 simulador de cajero

let saldo = 20000;
let entrada = prompt(`Bienvenido al cajero. Su saldo actual es de ${saldo}. ¿Cuánto dinero desea retirar? `);
let monto = Number(entrada);

if (isNaN (monto)){
    console.log('error: debes ingresar un numero valido.')
} else {
    if (monto <= 0) {
        console.log("Error: El monto debe ser mayor a 0.");
    } else if (monto > saldo) {
        console.log("Error: Fondos insuficientes.");
    } else if (monto % 100 !== 0) {
        console.log("Error: El cajero solo entrega billetes de $100. El monto debe ser múltiplo de 100.");
    } else {
        saldo -= monto;
        console.log(`Retiro exitoso. Ha retirado ${monto}. Su nuevo saldo disponible es: ${saldo}.`);
    }
}

// ejercicio 5 control de acceso

let hrs = Number(prompt('Buenas, ¿podria decirme que hora es? Favor usar el formato de 24 hrs. '))
console.log(`Asi que son las ${hrs} hrs.`)
let rol = prompt('Cual es su rol (Admin/Invitado/Sin_rol)')
let entrar = rol === 'Admin'
let entrar2 = rol === 'Invitado'

if (isNaN (hrs)){
    console.log("error: debes ingresar un numero valido.");
} else {
   if (hrs >= 1 && hrs <= 24 && entrar === true){
        console.log('puede entrar sr Admin')
    } else if (hrs >= 8 && hrs <= 18 && entrar2 === true){
        console.log('puede entrar sr Invitado')
    } else {
        console.log('No puede entrar')
    }
}

//ejercicio 6 cotizador de seguros de automovil

let años = Number(prompt('¿Cuál es la edad del conductor? '));
let antiguedad = Number(prompt('¿Cuántos años de antigüedad tiene el vehículo? '));

if (isNaN(edad) || isNaN(antiguedad)) {
    console.log('Error: debes ingresar números válidos.');
} else {
    if (años < 21) {
        console.log('No es posible cotizar a menores de 21 años.');
    } else {
        let precio = 15000;
        if (antiguedad < 5) {
            precio += 5000;
        }
        if (años >= 65) {
            precio -= 2000;
        }
        console.log(` Precio final: ${precio}`);
    }
}

