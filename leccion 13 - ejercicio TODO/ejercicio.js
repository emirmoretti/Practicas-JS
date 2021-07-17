class DispotivoEntrada {
    
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `Tipo Entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}

class Raton extends DispotivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get _idRaton(){
        return this._idRaton
    }
    toString(){
        return `${super.toString()} Id: ${this._idRaton}`
    }
}

class Teclado extends DispotivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    toString(){
        return `${super.toString()} id: ${this._idTeclado}`;
    }
}