// OBJETO METODO Math   -   BASICO



//------------------ Metodos


//sqrt()  / devuelve la raiz cuadrada positiva de un numero
/*
numero = Math.sqrt(25)

document.write(numero)
*/

//cbrt()   / devuelve la raiz cúbica de un número.
/*
numero = Math.cbrt(27)

document.write(numero)
*/

// max()   / devuelve el mayor de cero o más numero.
/*
numero = Math.max(4, 1, 22, 33, 5, 8, 675, 432, 222);  //el numero mayor

document.write(numero)
*/

//min()    / devuelve el menor
/*
numero = Math.min(4, 1, 22, 33, 5, 8, 675, 432, 222); // por logica devuelve el menor

document.write(numero)
*/

//random()     / devuelve un número pseudo-aleatorio entre 0 y 1.  ALEATORIO
/*
numero = Math.random() * 100;
numero = numero.toString();
num = numero[0] + numero[1];
if (numero[1] == ".") { // le saco el . al final
    num = numero[0];
}
document.write(num)
*/

//round()  /   devuelve el valor de un numero redondeado al numero entero más cercano
/*
let numero = Math.random() * 99;
numero = Math.floor(numero + 1); //devuelve el valor al menor, redondea para abajo 4.9 = 4
// ahora es imposible que salga el 0 y el 100(99, +1)

document.write(numero)
//ahora lo hagamos con for
for (let i = 0; i < 100; i++) {  // logramos numeros entre el 0 al100
    let numero = Math.random() * 99;
    numero = Math.floor(numero + 1);

    document.write(numero + "<br>")
}
*/

//fround()    /  devuelve la representacion flotante  de precision simple más cercana de un número
/*
let numero = Math.fround(9.7599999999)

document.write(numero)
*/

// trunc()   /  elimina los digitos despues del punto
/*
let numero = Math.trunc(9.7599999999)

document.write(numero)
*/



//------------------ Propiedades


// PI()     / ratio de la circunferencia de un circlo respecto a su diametro, aproximadamente 3.14159
/*
let numero = Math.PI;

document.write(numero)
*/

// SQRT1_2     / raiz cuadrada de un 1/2 ; equivalente , 1 sobre la raiz
// SQRT2  / raiz cuadrada de 2, aproximadamente 1.414

// E  /  constante de Euler, la base de los logaritmos naturales
// LN2  /  logaritmo natural de 2, aproximadamente 0.693
// LN10  /  logaritmo natural de 10, aproximadamente 2.303
//  LOG2E  / logaritmo de E con base 2, aproximadamente 1.443
//  LOG1OE  / logaritmo de E con base 10, aproximadamente 0.434






//  Historia de cofla
//
/*
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "pedro", "juan", "pepito", "cofla", "maria"],
        programacion: ["Rodriguez", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito"],
        quimica: ["Marini", "cofla", "maria"]
    }

    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias]
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia)

    if (informacion !== false) {
        let profesor = obtenerInformacion(materia)[0][0];
        let personas = obtenerInformacion(materia)[0]
        personas.shift() //elimina el primer elemento del array
        document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b><br>
    Los personas son <b style="color:blue">${personas}</b><br><br>
        `)
    }
}



const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++
            clasesPresentes.push(" " + info)
        }
    }
    return `<b style="color:blue">${alumno}</b> está en <b>${cantidadTotal} clases: <b style= "color:green">${clasesPresentes}</b><br>

    `;
}


mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria"))
document.write(cantidadDeClases("pepito"))
document.write(cantidadDeClases("pedro"))
*/



//otra historia
// - crear una funcion para preguntarle a cofla en que materia se quiere inscribir
// - si hay 20 personas anotados en la materia negarle la inscripcion
// - si hay menos de 20 personas inscribir a cofla y añadirlo a la lista de personas
/*
let materias = {
    fisica: ["Perez", "pedro", "juan", "pepito", "cofla", "maria"],
    programacion: ["Rodriguez", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "juan", "pepito"],
    quimica: ["Marini", "cofla", "maria"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21) { //esta el profe
        document.write(`lo siento <b>${alumno}</b>, las clases de<b> ${materia}</b> ya estan llenas <br>`)
    } else {
        personas.push(alumno)

        if (materia == "fisica") {  //redefinimos
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["programacion"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["programacion"],
                programacion: materias["logica"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materias["programacion"],
                programacion: materias["logica"],
                logica: materias["logica"],
                quimica: personas
            }
        }
        document.write(`Felicidades ${alumno}! Te has inscripto a ${materia} correctamente. <br>`)
    }

}

document.write(materias["fisica"] + "<br>")

inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")
inscribir("pedrito", "fisica")
inscribir("jorge", "fisica")
inscribir("andres", "fisica")

document.write("<br>" + materias["fisica"] + "<br>")
*/


// HISTORIA COFLA con consola
//- solicitar los datos y decirle si aprueba o no
//- mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
//- todo esto estructurado como tabla
/*
const materias = {
    fisica: [90, 6, 3, "fisica"],  //asistencia, promedio y cant de trabajos
    matematica: [84, 8, 2, "matematica"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 6, 3, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]
}


const aprobo = () => {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%c   Asistencias en orden", "color:green");
        } else {
            console.log("%c   Falta de asistencias", "color:red");
        }
        if (promedio >= 7) {
            console.log("%c   Promedio en orden", "color:green");

        } else {
            console.log("%c   Promedio desaprobado", "color:red");

        }
        if (trabajos >= 3) {
            console.log("%c   Trabajos practicos en Orden", "color:green");
        } else {
            console.log("%c   Faltan trabajos practicos ", "color:red");
        }
    }
}

aprobo()
*/




// OTRA HISTORIA COFLITA (RUTINA DIARIA)
//-organizzar las actividades diariamente
//-utilizar la consola para organizar todo
//-el tiempo por tarea no debe superar las 4 horas
// 30 las cosas del la casa, 100 min de trabajo, 10 min de descanso, 100 min estudio, 240 min de trabajo
/*
let trabajo = "240 minutos de trabajo";
let estudio = "100  minutos de estudio";
let tp = "100 minutos hacer trabajos prácticos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");


for (let i = 0; i < 14; i++) {  //bucle
    if (i == 0) {
        console.group("semana 1")
    }

    console.groupCollapsed("dia " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 7) {

        console.groupEnd();
        console.groupCollapsed("semana 2")

    }
}

console.groupEnd();
console.groupEnd();
*/



