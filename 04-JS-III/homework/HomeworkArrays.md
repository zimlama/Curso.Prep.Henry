# Arrays

Un array se defin unsando los breaket ejemplo `var array =[];`

Los "arrays" son lista de elementos, pueden ser diferentes tipos como:

1. Puede estar compuestos de `numbers` ejemplo: `var arreglo = [1, 2, 3, 4, 5];`
2. Puesde estar contener `strings` ejemplo: `var arreglo = ['a', 'b', 'cola'];`
3. O representaciones literales `null` o `undifined` ejemplo: `var arreglo = [null, undefined];`
4. Tambien puede contener `function` ejemplo: `var arreglo = [function() {console.log('hola')}, function Otra() {console.log('hola otra')}];`
5. En otros casos puede conter otros arrays ejemplo:  `var arreglo = [[1, 2, 3, 4], [a, b, c, d]];`
5. O combinacion de todos los elementos mencionados anteriormente ejemplo:
### let arreglo = [1, a, null,function() {console.log('hola')}, [1, 2, 3, 4]];

Para acceder a los elementos podemos en un `arrays` sabemos que cada posicion o casilla se enumera empezando desde desde cero ejemplo:

`var array = ['tony', 'emi', 'franco', 'jimmy'];`
`                0       1      2         3`

Para acceder a cada elemento los podemos llamar de la siguiente forma

`array[0]` // mostraria elemento contenido en la casilla 0 `tony`

Una forma para saber el tamaño del `array` es con el siguiente comando:

`array.length` 

Cuando accedemos a un elemento de la casilla va mantener su tipo de elemento (`numbers`, `strings`, etc.), esto nos permite hacer la operacio que deseemos hacer 

`var arreglo = [1, a, null,function() {console.log('hola')}, [1, 2, 3, 4]];`

### Operaciones matematicas

`arreglo[0] + 1`

`2`

### Concatenar Strings

`arreglo[1] + 'la'`

`'ala'`

### Responder con representaciones literales

`arreglo[2]`

`null`

### Ejecutar una funcion

`arreglo[3]()`

`'hola'`

### Invocar una casilla del array

`arreglo[4][1]`

`2`


## Como asignar o agregar valores a un array `arreglo`

Si tenemos un array vacio `var lista = [];` podemos asignarle valores de la siguiente forma

### Agregando valores por numero de casilla

`lista[0] = 'lo piso'`
`lista[1] = 2`
`lista[1] = 3`

```javascript
> lista
[ 'lo piso', 2, 3 ]
>
```
Una situacion interesante es que podemos agregar en un casilla que no sea secuencial ejemplo:

`lista[10] = 10`

```javascript
// esto indica que hay 7 campos undefined (que no se rrelleno con informacion)
> lista
[ 'lo piso', 2, 3, <7 empty items>, 10 ] 
>
```

### Asiganndo elementos usando funciones nativas: push(), pop()

Si tenemos un array vacio `var arrayVacio = [];` podemos agregar con `push()` de la siguiente forma:

`arrayVacio.push(1);`

`arrayVacio.push(2);`

```javascript
> arrayVacio
[ 1, 2 ]
> 
```
### la funcion POP saca el elemento de la lista y lo presenta

`var lista = [ 'lo piso', 2, 3, <7 empty items>, 10 ];`

Usando el array lista podemos sacar el ultimo elemento de la lista con con pop

```javascript
> lista
[ 'lo piso', 2, 3, <7 empty items>, 10 ]
> lista.pop();
10
> lista
[ 'lo piso', 2, 3, <7 empty items> ]
>
```

`Nota: si el valor de elemento que sacamos lo necesitamos para alguna operacion futura es necesario guardar el elemento en una variable para no perder la informacion del elemento ejemplo:`

`var elemento1 = lista.pop();`

```javascript
> lista
[ 'lo piso', 2, 3, <7 empty items>, 10 ]
> var elemento1 = lista.pop();
undefined
> elemento1
10
> 
```

### Si deseamos agregar un elemento al inicio de la fila lo podemos hacer de la siguiente forma

lista.unshift(elemento);

## Usando FOR o WHILE para recorrer un valor

Si tenemo el array(arreglo) `var array = [1, 3, 'tony', 'hola', 5]`, para recorrerlo lo podemos hacer de la siguiente forma:

```javascript
var array = [1, 3, 'tony', 'hola', 5]

for(var i = 0; i < array.length; i++){
	console.log(array[i]);
} 

// este es el resultado cuando lo ejecutamos
> var array = [1, 3, 'tony', 'hola', 5]
undefined
> array
[ 1, 3, 'tony', 'hola', 5 ]
> for(var i = 0; i < array.length; i++){
...     console.log(array[i]);
... } 
1
3
tony
hola
5
undefined
> 
```

### Otra forma es cuando usamos la funcion WHILE

```javascript
while(lista.length > 0){
    var mostrar = lista.pop(); 
	console.log(mostrar);
}
```