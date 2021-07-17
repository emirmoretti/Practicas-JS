"use strict";

let x = 10; // x = 10; es imposible en modo estricto 
console.log(x);

miFuncion();

function miFuncion(){
    "use strict"  // se puede usar el modo stricto en una funcion también
    let y = 15;
    console.log(y);
}