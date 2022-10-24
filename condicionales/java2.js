// calculadora
/*
const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Qué operación deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: división, 4:multiplicación")

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1, numero2); //const
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multipliar");
    resultado = multiplicar(numero1 + numero2)
    alert(`tu resultado es ${resultado}`)
}
*/




/*
// POO


class Animal {
    constructor(especie, edad, color) { //parametro
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} `;
    }
    verInfo = () => {
        document.write(this.info + "<br>") //metodo
    }

    // ladrar() {
    //     if (this.especie == "perro") {
    //         document.write("!WOW! <br>")
    //     } else {
    //         document.write("no puede ladrar, ya que es un " + this.especie + "<br>")
    //     }
    // }

}

class Perro extends Animal { //perro => clase
    constructor(especie, edad, color, raza) {
        super(especie, edad, color, raza)
        this.raza = raza;
    }
    ladrar() {
        alert("!WAW!")
    }
}

let perro = new Perro("perro", 5, "rojo", "doberman"); //perro => objeto
let gato = new Animal("gato", 3, "crema"); //herencia
let pajaro = new Animal("pajaro", 1, "verde")
// console.log(perro)

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

// perro.verInfo(); //este metodo remplaza a la linea 68 y 69
// gato.verInfo();
// pajaro.verInfo();

perro.ladrar(); //polimorfismo
gato.ladrar(); //NO ES una funcion error no se encuentra en la extension

// let perro = new Perro("perro", 5, "rojo", "doberman");


// KGET Y SET
// setRaza = modifica el valor, pasar de null a algo(perro.setRaza = "Pedro")
// getRaza = obtenemos un valor, document.write(document.write(getRaza))
//ambos se ocupa en datos encapsulados(propiedades privadas)
*/


/*
//Historia de cofla 4 pero sale 3 en el video
//-crear un sismtema para mostrarle a cofla las particularidades de los 3 celulares.
//- cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria RAM
// -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar. (se aplicarian los metodos)


class Celular {
    constructor(color, peso, tamaño, redc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = redc;
        this.memoriaRam = ram;

        this.encendido = false;
    }

    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular Prendido")
            this.encendido = true;
        } else {
            alert("El celular Apagado")
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando Celular ")
        } else {
            alert("El celular está apagado")
        }
    }
    tomarFotos() {
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`grabando video en: ${this.resolucionDeCamara}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Camara: <b>${this.redc}</b></br>
        Resolución de Video: <b>${this.redc}</b></br>
        Memoria RAM: <b>${this.memoriaRam}</b></br>
        Resolución de Video: <b> ${this.resolucionDeCamara}</b></br>
        `;
    }
}



class celularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento() {
        alert("Estas grabando video en camara lenta ")
    }
    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolución de Cámara Extra: ${this.resolucionDeCamaraExtra}`
    }
}







// celular1 = new Celular("rojo", "150g", "5´", "hd", "1GB");
// celular2 = new Celular("negro", "155g", "5.4´", "full hd", "2GB")
// celular3 = new Celular("blanco", "150G", "5.9´", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar()
// celular1.presionarBotonEncendido()


celular1 = new celularAltaGama("rojo", "130g", "5.2", "4K", "3GB", "full hd");
celular2 = new celularAltaGama("negro", "142g", "6", "4K", "4GB", "hd");

document.write(`
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}< br >
`)
*/





/*
// otra historia de cofla
//crear un sistema que ayude  a cofla a decidir que app descargar.
// la informacion de los instaladores debe contener la cantidad de descargas, puntuacion y peso
// las Apps se deben poder instalar, abrir, cerrar y desintalar.

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false
    }


    instalar() {
        if (this.iniciada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }

    desinstalar() {
        if (this.iniciada == false) {
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("1.000", "4 estrellas", "400mb");
app3 = new App("6.000", "4.5 estrellas", "100mb");
app4 = new App("23.000", "4.8 estrellas", "1gb");
app5 = new App("900", "5 estrellas", "250mb");
app6 = new App("17", "3.7 estrellas", "522mb");
app7 = new App("42.981", "2.9 estrellas", "723mb");


document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`)

// app.instalar()
// app.abrir()
// app.cerrar()
// app.desinstalar()
*/




