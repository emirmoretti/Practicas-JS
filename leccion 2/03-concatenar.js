var nombre = 'Emir';
var apellido = 'Moretti';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

//contexto string
x = 2 + 4 + nombre; //primero va de izquierda a derecha, debido a que primero encuentra un nro toma todo como un nro primero no arriba como un string
console.log(x); 