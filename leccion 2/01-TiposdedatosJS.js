//Tipos de datos JS

// Tipo de dato string
var nombre = "Emir";
console.log(nombre);

nombre = 10; 
console.log(typeof nombre);


//Tipo de dato Numerico
var number = 1;
console.log(number);

//Tipo de dato Objeto
var mascota = {
    nombre : "pupe",
    leg : 4,
    color : "negro",
    pesoKg : 10
}
console.log(mascota);

//Tipo boolean true or false
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato symbol
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function 
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);

// null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Cadena vacia
var z = '';
console.log(z);

// arrays
var autos = ['BMW', 'Audi', 'Peugeot', 'Toyota'];
console.log(autos);
console.log(typeof autos);