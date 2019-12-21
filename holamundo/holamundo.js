function saludar(nombre) {
    return "Hola" + nombre;

}
saludar("/n usuario")



function testNum(a) {
    if (a > 0) {
        return "positive";
    }
    else {
        return "NOT positive";
    }
}
console.log(testNum(-5));



var edad = prompt("Introduce tu edad ");
if (edad > 20) {
    console.log("Tienes mas 20 años")
}
if (edad <= 20) {
    console.log("Tines  20 o menos ")
}

var numero = prompt("introduce un numero")
if (numero > 5) {
    console.log("el numero es  mayor 5 ")
}
if
    (numero < 2) {
    document.write("el numero es menor que  2")
}


var horas = Number(prompt("Introducir las horas"));
var minutos = Number(prompt("Introduce  los  minutos"));
var segundos = Number(prompt("Introduccir los  segundos"));

if ((horas >= 0) && (horas <= 23) && (minutos >= 0) && (minutos <= 59) &&
    (segundos >= 0) && (segundos <= 59)) {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        if (minutos === 60) {
            minutos = 0;
            horas++;
            if (horass === 24) {
                horas = 0;
            }
        }
    }
    document.write("En un segundp, seran las " + horas + "horas," + minutos + "minutos y " + segundos + "segundos");
}
else {

    document.write("Hora incorrecta ")
}


///////////////////////
var estacion = prompt("¿Cual es  tu estacion del año preferida?");

switch (estacion) {
    case "primavera":
        console.log("La  primavera");
        break;
    case "verano":
        console.log("EL verano");

        break;
    case "otoño":
        console.log("El otoño");

        break;
    case "invierno":
        console.log("El invierno");

    default:
        document.write('no es una estacion del año');

}

////////////////////////////////////////7
var animal = prompt("¿Cual es tu animal favorito?");

switch (animal) {

    case "perro":
        console.log("El perro");
        break;

    case "gsto":
        console.log("El gato");
        break;

    case "caballo":
        console.log("El caballo ");
        break;



    default:
        console.log("esto no es  un animal favorito")
}
///////////////////////////////////////////////77

for(var cont=1; cont<=10; cont++){
    console.log(cont);
}


////////////////////////////////////////////7
for (var i=1; i<=30; i+=3){
console.log(i)
}
//////////////////////////////////////

for ( var i=1; i<=10; i++ ){

   document.write(8+"x " + + i + "="+ i * 8  );
}
/////////////////////////////////////////////////////

/////////////////////////////////////7
var Ventas ="Toyota";

function TiposCarro(nombre){
    if  (nombre == "Honda"){
        return nombre;
    }
    else {
        return "Lo siento, nosotros  no vendemos" + nombre +" .";

       }
    }

////////////////////////////////////////////////////7

    var carro = { miCarro: "Saturno", getCarro: TiposCarro("Honda") , especia:Ventas };
    console.log(carro.miCarro);  // Saturn
console.log(carro.getCarro); // Honda
console.log(carro.especial); // Toyota

var estaOk = false;

while (estaOk == false ) {
   var nombre = prompt ("introduce tu nombre");
   
   if  (nombre == ""){
      alert ("error")
   }else {
      var estaOk = confirm("los datos  intoducidos son correctos?");
   }
}
alert ("sigue con el formulario")

////////////////////////////////////////////////777