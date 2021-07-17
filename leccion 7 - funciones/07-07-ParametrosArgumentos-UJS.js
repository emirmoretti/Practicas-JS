//Declaración Función de tipo Expresión
// Los argumentos son los valores que se les pasan a los parametros N, a es parametro y 3 es el argumento(valor)
let sumar = function (a = 4, b = 5){ //Parametros
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar(3, 6, 7); //Argumentos
 // en js no es requerido que coincidan el numeros de argumentos con el numero de parametros (Solo hay A y B)
console.log(resultado);