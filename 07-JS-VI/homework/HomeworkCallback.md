# Callback

Primero hay que entender una cosa de JavaScript con las funciones, no todos los lenguajes de programacion son iguales, hay unas condiciones de diseño que cambian y como se usa finalmente.

JavaScript tiene una caracteristica que basicamente trata las funciones como el nombre de `First Class Function` , las funciones son iguales a cualquier otro objeto (se puede pasar por argumento, retornar una funcion en otra funcion, se puede guardar en variables, un objeto o un arreglo, tambien guardar funcines en las propiedades, pasar funciones como argumento hace que podamos tener un abanico de cosas que podamos hacer

Esto caracteristica nos permite crear `callback`

```javascript
// Creamos las funciones que vamos a usar en el callback
function decirHolaUsuario(usuario) {
	return 'Hola ' + usuario + '!';
}

function decirAdiosUsuario(usuario) {
	return 'Adios ' + usuario + '!';
}

// Creamos la funcion Callback que vamos a usar
function crearSaludo(usuario, cb) {
	return cb(usuario);
}

// Y ejecutamos la funcion Callback de la siguiente forma
crearSaludo('Dan', decirHolaUsuario); // 'Hello! Dan!'
crearSaludo('Dan', decirAdiosUsuario); // 'Goodbye! Dan!'

// Cuando una funcion es el argumento de otra function se llama callback

// Si yo paso invocada al funcion me genera un error ejemplo
> crearSaludo('Dan', decirAdiosUsuario());
Uncaught TypeError: cb is not a function
    at crearSaludo (REPL89:2:9)
>
// Se convierte en lo que devuelve esta expresion `decirAdiosUsuario()`

> crearSaludo(15, function(a) {return a * 2})
30
>
```

### Arreglos 

Una forma mas rapida de expresar el codigo necisatmos hacer operaciones con los arreglos `array` es usando Callbacks

Cuando usamos la funcion `.forEach` es una funcion que nos permite recorrer en el arreglo `array` es importante tener en cuenta que `.forEach` no retorna un valor

```javascript
// creamos un arreglo
var alumnos = ['mati', 'leo', 'tincho', 'emi', 'jimmy', 'franco'];

// sin callbacks (esto es una forma imperativa)
for (var i = 0; i < alumnos.length; i++) {
 console.log(alumnos[i]);
}

// con callbacks (esto se llama declarativa)
alumnos.forEach(function(elemento, indice){
	console.log(elemento);
})
```

### Maps

`.map` es muy parecido a Callback `Cb` , `.map` es una funcion que si retona algo 

```javascript
// Creamos el arreglo
var numbers = [1, 5, 10, 15]

// Ejecutamos la funcion que queremos aplicar en cada elemento del arreglo
var doubles = numbers.map(function(x) {
	return x * 2;
});

// obtenemos el resultado del elemento
> doubles
[ 2, 10, 20, 30 ]
>

// Otro ejemlpo usando callback con `.map`
// Creamos el arreglo
var alumnos = ['mati', 'leo', 'tincho', 'emi', 'jimmy', 'franco'];

// Creamos el metodo asociandolo a constructor `String`
String.prototype.capitalize = function(){
 return this.charAt(0).toUpperCase() + this.slice(1)
}

// Como se ejecutaria el metodo con callbacks
var nuevoAlumnos = alumnos.map(function(elemento, indice) {
	return elemento.capitalize();
})

// Como se ejecutaria el metodo sin callbacks
var nuevoArray = [];
for(var i = 0; i < alumnos.length; i++) {
 nuevoArray.push(alumnos[i],capitalize());
}
```
### Reduce

Con el metodo `.reduce` lo que hacemos es tomar un arreglo y convertilo en un solo valor ejemplo:

```javascript
// Creamos el arreglo
var nums = [1,2,3,4,5,6,7];

// Como se ejecutaria el metodo sin callbacks
var suma = 0;
for(var i = 0; i < nums.length; i++){
	suma = suma + nums[i];
}

// Como se ejecutaria el metodo con callbacks
var sumaReduce = nums.reduce(function(acumulador, elemento) {
	return acumulador + elemento;
}, 0);

// obtenemos el resultado del elemento
> sumaReduce
28
>

// como lo hace internament
acumulador = 0;
return 0 + 1;   -> Guarda en el acumulador
acumulador = 1;
return 1 + 2;   -> Guarda en el acumulador
                -> Se ejecuta hasta llegar al ultimo elemento del arreglo

// Ojo si vamos a tener el acumulador en 0 y es una operacion de *
// no va funcionar ya que es necesario usar el acumulador en 1 

// Ejemplo con el error
var sumaReduce = nums.reduce(function(acumulador, elemento) {
	return acumulador * elemento;
}, 0);

// Resultado con el error
> sumaReduce
0
>
// La forma correcta es:
var sumaReduce = nums.reduce(function(acumulador, elemento) {
	return acumulador * elemento;
}, 1);

// obtenemos el resultado
> sumaReduce
5040
>
```
