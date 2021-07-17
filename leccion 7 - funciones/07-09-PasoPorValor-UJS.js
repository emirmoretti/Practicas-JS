//Tipos primitivos
let x = 10;
// Se realizo una copia del valor de X y se lo paso al parametro A por eso no cambia el valor
function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);
