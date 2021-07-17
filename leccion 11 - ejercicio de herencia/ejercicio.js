class Persona {
    
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(number){
        this._edad = number;
    }
    informacionCompleta(){
        return  this._nombre + " , " + this._apellido + " , " + this._edad + " , ID PERSONA: " + this._idPersona;
    }
    toString(){
        this.informacionCompleta();
    }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre,apellido, edad);  //! llama al constructor de la clase padre
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado () {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return super.informacionCompleta() + " , SUELDO: " + this._sueldo + ". ID EMPLEADO :" + this._idEmpleado;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = Date();
    }
    get idCLiente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(Date) {
        this._fechaRegistro = Date;
    }
    toString(){
        return super.informacionCompleta() + ", ID CLIENTE: " + this.idCLiente + ", " + this._fechaRegistro;
    }
}



let persona1 = new Persona('Emir', 'Moretti', '24');

console.log(persona1)

let empleado1 = new Empleado('Facu', 'Rivero', '24', '100000');

console.log(empleado1)

let cliente1 = new Cliente('Enzo', 'iamonik', '24');

console.log(cliente1.toString())