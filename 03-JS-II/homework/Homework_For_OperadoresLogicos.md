# Bucle FOR

El bucle FOR busca como objetivo permitir repetir un conjunto de instrucciones con un numero finito de veces, esto nos ayuda a evitar tener que realizar el codigo repetitivo.

### FOR incrementado

El statement (declaracion) se compone de tres partes:

1. El campo de `var i = 0` cuando escribimos la condicion de esta forma, defnimos desde donde inicia a contar, ejemplo si tenemos una lista de 100 filas podemos decirle que empieze desde la fila 65 esto descartaria las filas de 0 a 64.
2. El campo de `i <= 10` de esta forma definimos la condicion de frenado y podemos definir hasta donde queremos que se ejecute, ejemplo si tenemos una lista de 100 filas podems decirle que cuente hasta 70 esto descartaria las filas de 71 a 100.
3. El campo de `i++` al definir la cantidad de esta forma, incrementamos la variable que nos permite repetir el codigo incrementado de forma secuencial.

## for (var i = 0; i <= 10; i++) {
##     console.log(i);
## }

### FOR decrementado 

El statement (declaracion) se compone de tres partes:

1. El campo de `var i = 100` lo podemos iniciar desde un valor alto para ir decrementando el valor.
2. El campo de `i > 0` esta es la condicion de frenado y podemos definir hasta donde queremos que se ejecute.
3. El campo de `i--` definimos la cantidd con la que va incrementar la variable, tambien podemos crear un condicion que decremente con `i--` 

## for (var i = 100; i > 0; i--) {
##    console.log(i);
## }


# Operadores lógicos

Los operadores logicos nos permiten realizar una operacion entre dos valores booleanos, un tipo booleano sólo puede tener dos valores: `true` (verdadero) y `false` (falso).

|  |  | AND | OR | NOT |
| --- | --- | --- | --- | --- |
| "p" | "q" | "p && q" | "p || q" | "!p" |
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

### && AND

El operador `&&` nos permite comparar los dos valores booleanos y solo se trenda una respuesta `true` cuando los dos valores booleanos son `true`.

### || OR

El operador `||` nos permite comparar los dos valores booleanos y solo se trenda una respuesta `false` cuando los dos valores booleanos son `false`.

### ! NOT

El operador `!` nos permite comparar los dos valores booleanos, cuando el primer valor booleano en este caso `p` es `true` se trenda una respuesta como `false` y cuandocuando el segundo valor booleano en este caso `q` es `false` se trenda una respuesta como `true`.