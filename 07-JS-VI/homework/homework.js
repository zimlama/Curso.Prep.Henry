// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  return nombre.capitalize();
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  // Ya tenemos una funcion que se llama invocarCallback, los que vamos a hacer es llamar
  // otra funcion dentro invocarCallback y esto ya seria un callback
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumarReduce = numeros.reduce(function(acumulador,elemento){
    return acumulador + elemento;
  })
  cb(sumarReduce);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var pasaArray = array.forEach(function(elemento){
    cb(elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:  
  var nuevoArray = array.map(function(elemento){
    return cb(elemento);
  })
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  array.map(function(elemento){
    if(elemento[0] == 'a'){
      nuevoArray.push(elemento)
    }
  })
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
