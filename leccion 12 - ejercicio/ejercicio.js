class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProductos;
  }
  get idProducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }
  toString() {
    return `nombre: ${this._nombre} precio: ${this._precio} id: ${this._idProducto}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get maxProductos() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }
  get idOrden(){
      return this._idOrden;
  }

  agregarProducto(producto){
    if(this._productos.length < Orden.maxProductos) {
        this._productos.push(producto);
     //this._productos[this._contadorProductosAgregados++] = producto; otra manera de agregar el producto, usando el indice del array  
    } else {
        console.log('no se puede agregar más productos');
    }
    
  }
  calcularTotal(){
    let totalVenta = 0;
    for(let producto of this._productos) {
        totalVenta += producto.precio; // totalVenta = totalVenta + precio;
    }
    return totalVenta;
  }
  mostrarOrden(){
      let productosOrden = "";
      for(let producto of this._productos) {
          productosOrden = productosOrden + '\n' + producto.toString() + " ";
      }
      console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} productos: ${productosOrden}`)
  }
}

let producto1 = new Producto("coca-cola", 180);
let producto2 = new Producto('fernet', 200);
console.log(producto1.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();