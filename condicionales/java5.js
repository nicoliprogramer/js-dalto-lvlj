/// DOM

// NODO
// hay diferentes tipos:
//-document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
//-element: nodos definidos por etiquetas html.
//-text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
//-attribute: los atributos de las etiquetas definen nodos, (en javascript no lo veremos como nodos)
//-comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera




// parrafo = document.getElementById("parrafo")
/*
parrafo = document.getElementsByTagName("p")
document.write(parrafo[0])
*/
/*
parrafo = document.querySelector(".parrafo")
document.write(parrafo)
*/


// Metodos para definir, obtener y eliminar atributos.
//-setAttribute() - Modifica el valor de un atributo.  y tambien los crea
//-getAttribute() - Obtiene el valor de un atributo
//-remove() - remueve el valor de un atributo (elimina)


// setAttribute()
/*
const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type", "color")  //primer indice es el atributo, el segundo indice el valor
*/

//getAttribute()
/*
const rangoEtario = document.querySelector(".rangoEtario");
valorDelAtributo = rangoEtario.getAttribute("type")

document.write(valorDelAtributo)
*/

//remove()
/*
const rangoEtario = document.querySelector(".rangoEtario");
valorDelAtributo = rangoEtario.removeAttribute("type")
*/




// Atributos Globales

//contentEditable  / indica si el elemento puede ser modificable por el usuario (bool)
/*
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", true)
*/

//dir  /indica la direccionalidad del texto
/*
const titulo = document.querySelector(".titulo");
titulo.setAttribute("dir", "rtl")
*/

//hidden  / indica si el elemento aun no es, o no es, relevante
/*
const titulo = document.querySelector(".titulo");
titulo.setAttribute("hidden", true)  // con solo definirla en el html este caso ya elimina(hidden=""), si aplicamos el hidden en html podemos volver activarlo en javascript.
*/

//tabindex  /  indica si el elemento puede obtener un focus de input
/*
const titulo = document.querySelector(".titulo");

titulo.setAttribute("tabindex", "0")
*/

//title  / contiene un texto con informacion relacionada al elemento al que pertenece.
/*
const titulo = document.querySelector(".titulo");

titulo.setAttribute("title", "jajajajjaja xd")  // apoyar el mouse
*/




// Atributos de Inputs

// const input = document.querySelector(".input-normal");

// input.accept = "image/gif"
/*
const input = document.querySelector(".input-normal");

input.setAttribute("minlength", "4  ")
*/
//placeholder
/*
const input = document.querySelector(".input-normal");

input.placeholder = "que pasa mami"  //tambien aplica como atributo
*/
// require
/*
const input = document.querySelector(".input-normal");

input.required = " "  //campo obligatorio, si o si tiene que tener un espacio
*/




//atributo style
/*
const titulo = document.querySelector(".titulo");

titulo.style.color = "red"
titulo.style.backgroundColor = "#48e" // se elimina el -, aplica el camel case
titulo.style.padding = "30px"
*/




//  clases, classList y metodos  de classlist

//classList

//add
/*
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande")  //css (.grande)
*/

//remove
/*
const titulo = document.querySelector(".titulo");

titulo.classList.remove("grande")  //quito lo anterior
*/

//item
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.item(1)
document.write(valor) //nos muestra la segunda clase
*/

//contains
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.contains("grande")

if (valor) {
    document.write("la clase existe")
} else {
    document.write("la clase no existe")
}*/

//toggle / en caso que tenga la clase la saca y si no la tiene la agrega
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.toggle("grande")
*/

//replace / reemplaza una clase por otra
/*
const titulo = document.querySelector(".titulo");

let valor = titulo.classList.replace("grande", "chico")
*/





// Obtención y modificación de Elementos


// textContent  /  devuelve el texto de cualquier nodo
/*
const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent;
let resultado2 = titulo.outerHTML;
let resultado3 = titulo.innerHTML;

alert(resultado)
alert(resultado2)
alert(resultado3)
*/

// innerText  /  devuelve el texto visible de un node element , obsoleto no se recomienda su uso
/*
const titulo = document.querySelector(".titulo");

let resultado = titulo.;

document.write(resultado)
*/





// Creación de elementos

//createElements() , createTextNode() y appendChild()
/*
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");  //createElement reconoce los elementos solammente en mayuscula

const textDelItem = document.createTextNode("Este es un item de la lista")
// item.innerHTML = textDelItem  //appendChild()
item.appendChild = (textDelItem)

console.log(item)
console.log(textDelItem)
*/

//createDocumentFragment()
/*
const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista"
    fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)
*/





// Obtención y modificación de Childs (hijos)

//firstChild y lastChild  / tira #text porque hay espacios en lo que empieza y termina los div
/*
const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.lastChild;

console.log(primerHijo);
*/

//firstElementChild y lastElementChild  / De esta forma los espacios no cuentan
/*
const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstElementChild; //directo al h2

console.log(primerHijo);
*/

//childNodes  / me duevuellve todos los hijos(nodos)
/*
const contenedor = document.querySelector(".contenedor");

const hijos = contenedor.childNodes; //todos

console.log(hijos);
*/

//children /lo mismo que el anterior pero solamente los elementos
/*
const contenedor = document.querySelector(".contenedor");

const hijos = contenedor.children; //todos

//console.log(hijos);
for (hijo of hijos) {
    console.log(hijo);
}
*/





//Metodos de Childs (hijos)

//replaceChild()  // reemplazo => "Un h2 común" a "titulo"
/*
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo, h2_antiguo)
*/

//removeChild()  / elimina
/*
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

contenedor.removeChild(h2_antiguo)
*/

//hasChildNodes()  / tiene hijos o no
/*
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

let respuesta = h2_antiguo.hasChildNodes(); //COMO TIENE texto tiene hijos (si se borra el texto no tiene hijos)

if (respuesta) {
    document.write("El elemento tiene hijos")
} else {
    ddocument.write("El elemento NO tiene hijos")
}
*/





// Propiedades de parents (Padres) / son ,los que estan por encima

//parentElement
//parentNode        // ambos son similares(muchas veces ambos significan lo mismo), parentNode selecciona solamente el padre de un elemento. Pero parentElement selecciona el padre elemento de un elemento
/*
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

console.log(contenedor.parentElement); // me va a dar el body porq el body lo contiene
console.log(contenedor.parentNode); // lo mismo que arriba, en caso hiperespecificos hay diferencia, mas adelante lo veremos.
*/




// Propiedades de Siblings (Hermanos)  / son lo que estan al lado

//nextSibling , previousSibling , previousNextSibling , nextElementSibling
/*
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextSibling);   //por que lo que le sigue al h2 es un texto(espacio que es un nodo text)
console.log(h2_antiguo.previousSibling);   //porque antes del h2 es un texto(espacio que es un nodo text)
console.log(h2_antiguo.previousNextSibling);   //undefined porque no hay elementos
console.log(h2_antiguo.nextElementSibling);   //porque el que le sigue es uel h4
*/





// Nodo - Extras

//closest()  / es seleccionar el elemento ascendente (arriba) más cercano que coincida con nuestro selector 
/*
const div = document.querySelector(".div-3");


console.log(div.closest(".div")); // me tira el "DIV 2" EN CONSOLA
*/