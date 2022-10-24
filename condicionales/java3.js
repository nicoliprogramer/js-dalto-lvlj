// METODOS DE CADENA


// concat()
/*
let cadena = "cadena de prueba"
let cadena2 = " cadena2"

resultado = cadena.concat(cadena2)

document.write(resultado);
*/

// startsWith()
/*
let cadena = "cadena de prueba"
let cadena2 = "cadena"

resultado = cadena.startsWith(cadena2)

document.write(resultado);
*/

//endsWith()
/*
let cadena = " cadena de prueba"
let cadena2 = "ba"

resultado = cadena.endsWith(cadena2)

document.write(resultado);
*/

//includes()
/*
let cadena = "sigo a dalto en instagram"
let cadena2 = "en"

resultado = cadena.includes(cadena2)

document.write(resultado);
*/

// indexOf() es lo mismo que includes pero esta revela su indice u ubicacion
/*
let cadena = "cadena de prueba"
let cadena2 = "adena"

resultado = cadena.indexOf(cadena2)

document.write(resultado); //si no se encuentra nos devuelve -1
*/

//lastIndexOf() lo mismo que arriba pero la ult. posicion
/*
let cadena = "cadena de prueba de prueba de prueba de prueba"
let cadena2 = ""

resultado = cadena.lastIndexOf("prueba")

document.write(resultado); //si no se encuentra nos devuelve -1
*/




//padStart()
/*
let cadena = "abc"
let cadena2 = ""

resultado = cadena.padStart(6, "a") //que la cadena la rellene con 6 caracteres y que se rellebe con a

document.write(resultado);
*/

//padEnd() es lo mismo pero al final
/*
*/

//repeat
/*
let cadena = "123 "
let cadena2 = ""

resultado = cadena.repeat(2)

document.write(resultado);
*/




//split()
/*
let cadena = "Hola, como, estas "

resultado = cadena.split(",")

document.write(resultado[1]); //divide en partes
*/

//substring()
/*
let cadena = "ABCDEFG"

resultado = cadena.substring(1, 3) //el primer parametro es donde empieza y el segundo es donde termina

document.write(resultado);
*/

// toLowerCase() / pasa de mayuscula a minuscula
/*
let cadena = "ABCDEFG"

resultado = cadena.toLocaleLowerCase(cadena)

document.write(resultado);
*/

//toUpperCase() pasa de minuscula a mayuscula
/*
*/

//toString()
/*
let cadena = "50"

resultado = cadena.toString(); //pasa cadena a un string por lo tanto se le agrega un 2 delante

document.write(2 + resultado);
// el toString tambien pasa los array a cadena de texto juntando todo
*/

//trim() elimina los espacios   / trimStart y trimEnd elimina los espacios del inicio y los del final
/*
let cadena = "     pedro     "

resultado = cadena.trim()

document.write(resultado.length); //el length cuantas letras hay
*/






// -------------------------------------------------------------------------
// METODOS DE ARRAY

// ------ Transformadores

//pop()  / elimina el ultimo elemento de un array y lo devuelve
/*
let nombres = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombres + "<br>")
let resultado = nombres.pop()

document.write(resultado + "<br>")

document.write(nombres)
*/

//shift()  / elimina el primer elemento de un array y lo devuelve
/*
let nombres = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write("Array Original: <b>" + nombres + "<br></br>")
let resultado = nombres.shift()

document.write("Elemento removido: <b style='color:red'>" + resultado + "</b><br>")

document.write("Resultado: <b>" + nombres + "</b>")
*/

// push()  / agrega un elemento al array al final de la lista (es lo contrario al pop)
/*
let nombres = ["pedro", "maria", "jorge"];
// let cadena2 = "";

document.write(nombres + "<br>")

let resultado = nombres.push("juancito", "robert")

document.write(nombres)
document.write(resultado) //la cant. en numero de elementos que tiene ahora
*/

// reverse()  / invierte el orden de los elementos de un array
/*
let numeros = [1, 2, 3, 4, 5]

document.write(numeros + "<br>");

numeros.reverse();

document.write(numeros)
*/

// unShift()   / agrega uno o mas elementos al inicio de un array y devuelve la nueva longitud  del array (es como push pero al principio y tambien se puede decir que es lo contrario a shift)
/*
let numeros = [3, 4, 5];

document.write(numeros + "<br>");

numeros.unshift(0, 1, 2);

document.write(numeros);
*/

//sort()   / ordena los elementos de un arreglo (array) localmente y devuelve el arrreglo ordenado, puede ser los numeros de menor a mayor y palabras tambien segun su orden alfabetico(abecedario)
/*
let numeros = [1, 5, 3, 7, 4, 8]

document.write(numeros + "<br>");

numeros.sort();

document.write(numeros)
*/

// splice()    / cambia el contenido de un array eliminando los elementos existentes y/o agregando nuevos elemenos
/*
let numeros = ["abecedatio", "manzana", "negro", "messi", "jek"]

document.write(numeros + "<br>");

numeros.splice(1, 3, "cr7"); //arranca en la posicion tal, elimina la cantidad y reemplazo

document.write(numeros)
*/


// ------ Accesores

//join()   / une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
/*
let numeros = ["abecedatio", "manzana", "negro", "messi", "jek"]

document.write(numeros + "<br>");

let resultado = numeros.join(" - ");  // lo pasa a una cadena de texto

document.write(resultado)
*/

//slice()    / devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
/*
let numeros = ["abecedatio", "manzana", "negro", "messi", "jek"]

document.write(numeros + "<br>");

resultado = numeros.slice(0, 2); // si se coloca (0, -1) excluye solamente al ultimo

document.write(resultado)
*/

// Metodos ya vistos en cadena: toString(), indexOf(), lastIndexOf(), includes()
/*
funcionan exacctamente igual
*/


//------------- De repeticion

//filter()   /  crea un nuevo array con todos los elementos que cumplan la condición. es mas completo que un forEach()
/*
let numeros = ["abecedatio", "manzana", "negro", "messi", "jek"]

// let resultado = numeros.filter(numero => document.write(numero + "<br>"))
//funciona igual a estA FUNCION FLECHA
// let resultado = numeros.filter((numero) => { document.write(numero + "<br>") })

let resultado = numeros.filter(numero => numero.length > 6) //segun la cant de letra en los string(length), que numero tenga mmas cant de letras 
document.write(resultado)

*/





