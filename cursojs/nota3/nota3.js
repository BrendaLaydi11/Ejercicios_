var num = 12345.6895;
document.write(num.toFixed(1, 6));

var navidad95 = new Date("December 25,1995")


function fec(){
  var fecha = new Date()
  document.write(fecha +"<br>");

  document.write(fecha.getHours()-12 +"<br>");
  document.write(fecha.getMinutes()+"<br>");
  document.write(fecha.getSeconds()+"<br>");
  document.write(fecha.getDay()+"<br>");
  document.write(fecha.getDate()+"<br>");
  document.write(fecha.getMonth()+"<br>");
  document.write(fecha.getFullYear()+"<br>");

};


var finDeAnio = new Date(2020, 01, 11, 23, 59, 59, 999);

document.write(finDeAnio +"<br>")

var msPorDia = 24 * 60 * 60 * 1000;
var hoy= new Date();
var diasFaltantes =(finDeAnio.getTime() - hoy.getTime())/msPorDia;
document.write(diasFaltantes+"<br>")

var diasFaltantes = Math.round(hoy);
document.write(diasFaltantes+"<br>")


var IPOdate = new Date ();
IPOdate.setTime(Date.parse("feb11, 2020"))
document.write(IPOdate+"<br>")


