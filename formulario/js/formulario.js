
function Persona(nombre, App, Apm, ed, numeroTar, correo, rfc) {
    this.nombre = nombre;
    this.App = App;
    this.Apm = Apm;
    this.ed = ed;
    this.numeroTar = numeroTar; this.correo = correo; this.rfc = rfc;

}
function addPerson() {

    var formulario = document.getElementById('formulario').value;



    var nom = document.getElementById('nombre').value;


    var App = document.getElementById('APaterno').value;

    var Apm = document.getElementById('AMaterno').value;


    var ed = document.getElementById('edad').value;
   

    var numeroTar = document.getElementById('numeroTarjeta').value;


    var correo = document.getElementById('email').value;

    var rfc = document.getElementById('rfc').value;





    if (add("agregar correctament")) {
        formulario.reset

    }
    else {
        alert("se agrego correctamente")
    }



    newPerson = new Persona(nom, App, Apm, ed, numeroTar, correo, rfc)
    console.log(newPerson);
    add();


}




var baseDatos = [];
function add() {
    baseDatos.push(newPerson);

    document.getElementById("tabla").innerHTML += '<tbody><td>' + newPerson.nombre + '</td><td>' + newPerson.App +
        '</td><td>' + newPerson.Apm + '</td><td>' + newPerson.ed + '</td><td>' + newPerson.numeroTar + '</td><td>' + newPerson.correo +
        '</td><td>' + newPerson.rfc;



}

