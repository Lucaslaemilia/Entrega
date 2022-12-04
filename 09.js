/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  let productos = [{
    precio: 10000,
    nombre: 'tv'
  }, {
    precio: 5000,
    nombre: 'celular'
  }, {
    precio: 30,
    nombre: 'lampara'
  }];
  

  Array.prototype.filtrar = function(cb) {
    // Crear el arreglo que se va a devolver
    let nuevaArray = [];
    // Recorrer elementos actuales
    this.forEach(item => {
        // Analizar el resultado de la función de retorno o "callback"
        if(cb(item)) {
            // Si devuelve verdadero, agregar elemento
            nuevaArray.push(item);
        }
    });
    // Devolver arreglo filtrado
    return nuevaArray;
  };
  
  // Ejecutar método de filtro proporcionando función de retorno o "callback"
  let filtrado = productos.filtrar(function(p) {
    // Incluir solo productos que cumplen esta condición
    return p.price >= 50;
  });

};

// No modifiques nada debajo de esta linea //

module.exports = filtrar