

var a = {

    A: 0,
    B: 0,
    C: 0,
    D: 0,


    resultado: function () {

        if (a.C > a.B &&
            a.D > a.B &&
            a.D > a.C &&
            a.D < a.A) {

            return true;

        }
        return false;

    },
    intervalo: setInterval(function () {
        a.A = Math.ceil(Math.random() * 4)
        a.B = Math.ceil(Math.random() * 4)
        a.C = Math.ceil(Math.random() * 4)
        a.D = Math.ceil(Math.random() * 4)

        if (a.resultado()) {

            clearInterval(a.intervalo);
            console.log("Atleta A", a.A)
            console.log("Atleta B", a.B)
            console.log("Atleta C", a.C)
            console.log("Atleta D", a.D)

        }

    }, 10)
}
// CASO 2. CABALLOS

// El caballo de  Mac es más oscuro que el de  Smith, pero  más rápido y más viejo que el de jack, que es aun 
// mas  lento que el de Willy, que es  más joven que el de Mac, que es  más viejo que el de Smith, que es  más claro que  el de Willy,
//  aunque el de jack es más  lente y más oscuro que el de smith  .¿Cual es el más viejo, cuál es el más lento y cual es el más claro?



function caballo() {

    var Mac = { edad: 5, velocidad: 5, tono: 1 },
        Smith = { edad: 7, velocidad: 4, tono: 2 },
        Jack = { edad: 4, velocidad: 3, tono: 3 },
        Willy = { edad: 1, velocidad: 1, tono: 6 }

    if (Mac.edad > Smith.edad &&
        Mac.edad > Jack.edad &&
        Mac.edad > Willy.edad ||
        Mac.velocidad > Smith.velocidad &&
        Mac.velocidad > Jack.velocidad &&
        Mac.velocidad > Willy.velocidad ||
        Mac.tono > Smith.tono &&
        Mac.tono > Jack.tono &&
        Mac.tono > Willy.tono) {
        {

        }
        console.log('Mac')
    }

    if (Smith.edad > Mac.edad &&
        Smith.edad > Jack.edad &&
        Smith.edad > Willy.edad ||
        Smith.velocidad > Mac.velocidad &&
        Smith.velocidad > Jack.velocidad &&
        Smith.velocidad > Willy.velocidad ||
        Smith.tono > Mac.tono &&
        Smith.tono > Jack.tono &&
        Smith.tono > Willy.tono) {
        console.log('Smith')
    }
    if (Jack.edad > Mac.edad &&
        Jack.edad > Smith.edad &&
        Jack.edad > Willy.edad ||
        Jack.velocidad > Mac.velocidad &&
        Jack.velocidad > Smith.velocidad &&
        Jack.velocidad > Willy.velocidad ||
        Jack.tono > Mac.tono &&
        Jack.tono > Smith.tono &&
        Jack.tono > Willy.tono) {
        console.log('Jack')
    }
    if (Willy.edad > Mac.edad &&
        Willy.edad > Smith.edad &&
        Willy.edad > Jack.edad ||
        Willy.velocidad > Mac.velocidad &&
        Willy.velocidad > Smith.velocidad &&
        Willy.velocidad > Jack.velocidad ||
        Willy.tono > Mac.tono &&
        Willy.tono > Smith.tono &&
        Willy.tono > Jack.tono) {
        console.log('Willy')
    }
}

caballo();



// //Caso 3. PERROS 

// //Tenemos  cuatro perros , un galgo , un dogo , un alano y un podenco. este  
// //ultimo como mas que el galgo; el alamo come mas  que el galgo y menos que 
// //el dogo, pero este  come mas  que el podenco ¿cual de  los cuatro perros come menos?


function perro() {
    var Galgo = 2,
        Podenco = 6,
        Alamo = 4,
        Dogo = 3



    if (Galgo < Podenco &&
        Galgo < Alamo &&
        Galgo < Dogo ||
        Podenco > Galgo &&
        Podenco < Alamo &&
        Podenco < Dogo ||
        Alamo > Galgo &&
        Alamo < Podenco &&
        Alamo < Dogo ||
        Dogo > Galgo &&
        Dogo < Alamo &&
        Dogo < Podenco) {

        console.log("Galgo")
    }
    else {
         return falso
    }
}
perro()



// //Caso 4. SEIS  AMIGOS DE VACACIONES

// // Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes 
// //medios de  transporte; sabemos que Alejandro no utiliza el coche ya que éste  acompaña a
// // Benito que no van en avión. Andrés viaja en avion. Si Carlos no va acompañado de Darío 
// // ni hace  uso del avión, podría Usted podria decirnos en qué medio de transporte llega
// // a su destino Tomás.





function viaje() {

    var Alejandro = { Carro: 1, Avion: 0 },
        Benito = { Carro: 1, Avion: 0 },
        Andres = { Carro: 3, Avion: 2 },
        Dario = { Carro: 4, Avion: 2 },
        Carlos = { Carro: 5, Avion: 0 },
        Tomas = { Carro: 6, Avion: 0 }

    if (Alejandro.Carro > Benito.Avion 
        ) {
        console.log("Alejandro llego con Benito " + "Carro")
    }
    if (Andres.Carro > Dario.Avion) {

        console.log("Andres  llego con Dario en " + "avion")
    }

    if (Tomas.Carro > Carlos.Avion 
    ) {
        console.log("Tomas llego con Carlos en " + "Carro")
    }
}
viaje();


//  CASO 5. SILENCIO

// //Si angela habla más bajo que  Rosa y 
// //cecilia habla más alto que rosa . 
// //¿habla Angela más alto o más bajo que celia?

// // angela    mas  bajo 
// //rosa  mas bajo
// //celia  mas alto 
// // angela habla mas  bajo

function silencio (){
    var Angela = 1;
         Rosa = 2;
         Celia =3;


    if ( Angela < Rosa &&
       Angela < Celia){
        console.log("Angela");
    }



  }
  silencio();



