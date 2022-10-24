/*
dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Puedes comprar el helado de agua, Cofla")
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Puedes comprar el helado  de crema, Cofla")
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Puedes comprar el helado marca HELADIX, Cofla")
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Puedes comprar el helado marca HELADOVICH, Cofla")
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Puedes comprar el helado marca HELARDO, Cofla")
}
else if (dineroCofla >= 2.9) {
    alert("Puedes comprar el helado con confites o el pote de 1/4kg, Cofla")
} else {
    alert("No te alcanza para nada cofla pobre, Cofla")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Puedes comprar el helado de agua, Roberto")
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Puedes comprar el helado  de crema, Roberto")
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Puedes comprar el helado marca HELADIX, Roberto")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Puedes comprar el helado marca HELADOVICH, Roberto")
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Puedes comprar el helado marca HELARDO, Roberto")
}
else if (dineroRoberto >= 2.9) {
    alert("Puedes comprar el helado con confites o el pote de 1/4kg, Roberto")
} else {
    alert("No te alcanza para nada cofla pobre, Roberto")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Puedes comprar el helado de agua, Pedro")
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Puedes comprar el helado  de crema, Pedro")
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Puedes comprar el helado marca HELADIX, Pedro")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Puedes comprar el helado marca HELADOVICH, Pedro")
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Puedes comprar el helado marca HELARDO, Pedro")
}
else if (dineroPedro >= 2.9) {
    alert("Puedes comprar el helado con confites o el pote de 1/4kg, Pedro")
} else {
    alert("No te alcanza para nada cofla pobre, Pedro")
}
*/


/* Array

let frutas = ["banana", "manzana", "pera", 5, 9, "pedro"]


document.write(frutas[1]) indice es igual posición
*/



/* Array Asociativo
let pc = {
    nombre: "Daltopc",
    procesador: "Intel Core I7",
    Ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["Ram"]
let espacio = pc["espacio"]

frase = ` el nombre de la pc es: <b>${nombre}</b> <br>
          el procesador es: <b>${procesador}</b> <br>
          la memora ram es: <b>${ram}</b> <br>
          el espacio de disco es de <b>${espacio}</b>
`;

document.write(frase)
*/


/*
let numero = 0;

/*
while (numero <= 6) {

    numero++;


    document.write(numero + "<br>")
}
*/
/*
do {
    numero++;
    document.write(numero + "<br>")
} while (numero > 6)
*/
/*
while (numero < 1000) {
    numero++;
    document.write(numero)
    if (numero == 10) {
        break;
    }
}

document.write("fin")
*/



//el for es exactamente igual que el while(bucle indeterminado), pero es un bucle determinado
// se compone de tres partes: declaramose inicializamos; condición; iteracion(aumento o decremento)
/*
let i;

for (i = 6; i >= 0; i--) {
    document.write(i + "<br>")
}

document.write(i)
*/
/*
for (let i = 0; i < 20; i++) {
    if (i === 12) {
        break; //termina
    }
    document.write(i + "<br>")
}
*/
/*
for (let i = 0; i < 20; i++) {
    if (i === 12) {
        continue;  //saltea iteracion y pasa al siguente
    }
    document.write(i + "<br>")
}
*/
/*
animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales) { // indice o posicion
    document.write(animal + "<br>")
}

document.write("<br>");

for (animal of animales) { //nos muestra el valor 
    document.write(animal + "<br>")
}
*/
/*
array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1];

for (let array in array2) { //recorrimos el primer array
    if (array == 2) { //en caso de que estemos en la posicion 2 vamos a recorrer otro array
        for (let array of array1) { //recorre ese array
            document.write(array + "<br>") // mostrar en pantalla
        }
    } else {
        document.write(array2[array] + "<br>") //no hay tanta comnplejidad lo mostramos en pantalla
    }
}//reveer 2hs 59min
*/



//funciones

/*
function saludar() {
    return "todo okey" //hace lo mismo que el break, corta el codigo
    alert("hola");
}

let saludo = saludar()
document.write(saludo)
*/
/*
function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res)
    document.write("<br>")
}

suma(12, 32);// pasar parametros 
suma(22, 55);
*/
/*
function suma(num1, num2) {
    let res = num1 + num2;
    return res
}

let resultado = suma(20, 25)
document.write(resultado)

function saludar(nombre) {
    let frase = `Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase)
}
*/
/*
const saludar = function saludar(nombre) {
    let frase = `Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase)
}

const saludar = (nombre) => { //funcion con flecha remplaza al fuction por una flecha que va colocada despues
    let frase = `Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase)
}

saludar("Nico")  
*/




/*
//Historia de cofla 2

let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cuál es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free) {
            alert("podes pasar gratis porque sos la primer persona despues de las 2 AM")
            free = true;
        } else {
            alert(`Son las ${time}:00hs. y podes pasar, pero tenes que pagar la entrada`)
        }
    } else {
        alert("mira papu, sos menor de edad asique no vas a pasar")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/




//Historia de cofla 3
// su curso total son 19 alumnos, pero surgió un problema; se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podrán hacer registros de datos de ningun tipo, por ende las clases no podran comenzar hasta que esto este solucionado.
// - crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
// - Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
// - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen más aclarar que esta reprobado.

let cantidad = prompt("¿Cuántos alumnos son?")
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i + 1)), 0] // el 0 es la cantidad de asistencias 
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}


for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}


for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausentecias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>`;

    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style='color:red'> REPROBADO POR INASISTENCIA </b>"
    } else {
        resultado += "<br><br>"
    }
    document.write(resultado)
}