// var  FLT_SIGNBIT = 0b1000000000000000000000000000;
// var  FLT_EXPONENT= 0b1111110000000000000000;
// var FLT_MANTISSA = 0B0000000000000111111111111111;

// console.log(FLT_SIGNBIT)
// console.log(FLT_EXPONENT)
// console.log(FLT_MANTISSA)


// var n= 0755;
// var m=0644
// var a = 0o10

// document.write(a +  "<br>")


// var i= 0xFFFFFFFFFFFFFFFFF 

// console.log(i)

// var p=1E3
// document.write(p+ "<br>");


// var biggestNum = Number.MAX_VALUE;
// var smallestNum = Number.MIN_VALUE;
// var infiniteNum = Number.POSITIVE_INFINITY;
// var negInfiniteNum = Number.NEGATIVE_INFINITY;
// var empsiloNum = Number.EPSILON;


// console.log(biggestNum)
// console.log(smallestNum)
// console.log(infiniteNum) + console.log(negInfiniteNum)
// console.log(empsiloNum);


// var  age = 4;

// age = parseFloat(document.write(5+"<br>"));

// var s=a
// var n = parseInt(s);
// console.log(n);

// var sBin ="1010101010";
// var nBin = parseInt(sBin, 2);
// console.log(nBin )

// //Muestra como convertir  
// //una cadeba a  un entero, 
// //primero se  convierte eñ 
// //ascii a un digito valido (0-9)
// // y se desplaza a la izquierda el acumulador 
// // (en nuestro sistema  esto se  hace //
// // mulptipicado por  10) finalmente se  suma
// //el digito, repetir hasta que noqueden caracteres

// function  analizarEntero(cadena){

//     var r = 0
//     for(var i =0; i<cadena.length; i++)
//     {
//         var c= cadena.charCodeAt(i)-0x30
//         if (c<0 || c<9)
//           throw new Error("se esperan solo digitos")
//           r=r *10+c
//     }
//     return r

// }
// // console.log(analizarEntero('1234'))
// console.log(Number.parseInt('F',16));


// // a = parseFloat(" 100 ")
// // document.write('parsetFloat("  100  ") =' +a+"<br>");

//  //base 10 
//  a = parseInt("100",10); 
//  document.write('parseInt("100",10) = ' + a + "<br>"); 

//  //base 8 
//  b = parseInt("8",8); 
//  document.write('parseInt("8",8) = ' + b + "<br>"); 

//  //base 8 
//  c = parseInt("15",8); 
//  document.write('parseInt("15",8) = ' + c + "<br>"); 

//  //base 16 
//  d = parseInt("16",16); 
//  document.write('parseInt("16",16) = ' + d + "<br>"); 

//  // Leading and trailing spaces are ignored in parseInt() function 
//  e = parseInt(" 100 "); 
//  document.write('parseInt(" 100 ") = ' + e + "<br>"); 

//  //base 16(hexadecimal) 
//  f = parseInt("0x16"); 
//  document.write('parseInt("0x16") = ' + f + "<br>"); 


// //  Number.isFinite = Number.isFinite || function(value) {
// //     return typeof value === 'number' && isFinite(value);
// // }


// function fits(x, y) {
//     if (Number.isInteger(y / x)) {
//       return 'Fits!';
//     }
//     return 'Does NOT fit!';
//   }

//   console.log(fits(5, 10));


//   function milliseconds(x) {
//     if (isNaN(x)) {
//       return 'Not a Number!';
//     }
//     return x * 1000;
//   }

//   console.log(milliseconds('100F'));
//   // expected output: "Not a Number!"

//   console.log(milliseconds('0.0314E+2'));
//   // expected output: 3140

//   for(var i=0; i<10; i++){
//     document.write(i+"<br>")
// //   }

// for (var i = 1; i <= 100; i++) {
//   if (i % 7 === 0)
//     document.write(i + "<br>")

// }

// for (var j = 1; j <= 100; j++) {
//   if (j % 8 === 0)
//     document.write(j + "<br>")
// }

// var num = 12345.6895;
// document.write(num.toFixed(1, 6));

// var navidad95 = new Date("December 25,1995")



// (function (){
//   var fecha = new Date()
//   document.write(fecha +"<br>");

//   document.write(fecha.getHours()-12 +"<br>");
//   document.write(fecha.getMinutes()+"<br>");
//   document.write(fecha.getSeconds()+"<br>");
//   document.write(fecha.getDay()+"<br>");
//   document.write(fecha.getDate()+"<br>");
//   document.write(fecha.getMonth()+"<br>");
//   document.write(fecha.getFullYear()+"<br>");
// }());



// function JSClock() {
//   var tiempo = new Date();
//   var hora = tiempo.getHours();
//   var minutos = tiempo.getMinutes();
//   var segundos = tiempo.getSeconds();
//   var temp = "" + ((hora > 12) ? hora - 12 : hora);
//   if (hora == 0)
//     temp = "12";
//   temp += ((minutos < 10) ? ":0" : ":") + minutos;
//   temp += ((segundos < 10) ? ":0" : ":") + segundos;
//   temp += (hora >= 12) ? " P.M." : " A.M.";
//   return temp;
//   document.write(temp)
// }

// var finDeAnio = new Date(1994, 01, 11, 23, 59, 59, 999);

// document.write(finDeAnio +"<br>")

// var msPorDia = 24 * 60 * 60 * 1000;
// var hoy= new Date();
// var diasFaltantes =(finDeAnio.getTime() - hoy.getTime())/msPorDia;
// document.write(diasFaltantes+"<br>")

// var diasFaltantes = Math.round(hoy);
// document.write(diasFaltantes+"<br>")

// var IPOdate = new Date ();
// IPOdate.setTime(Date.parse("Aug 9, 1995"))
// document.write(IPOdate+"<br>")


// var casimiro='\u0094'
// console.log(casimiro)


// var s = new String ("Tengo hambre"+casimiro);
// console.log(s);
// typeof s;

// var s1= "2+2";
// var s2= new String ("2+2");
// eval (s1);console.log(eval(s2))

// var mystring = "Hello, world!";
// var x= mystring.length;
// console.log(mystring[12]);

// var cualquierCadena="Brave new world";

// console.log("El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'")
// console.log("El carácter en el índice 1 es '" + cualquierCadena.charAt(1) + "'")
// console.log("El carácter en el índice 2 es '" + cualquierCadena.charAt(2) + "'")
// console.log("El carácter en el índice 3 es '" + cualquierCadena.charAt(3) + "'")
// console.log("El carácter en el índice 4 es '" + cualquierCadena.charAt(4) + "'")
// console.log("El carácter en el índice 999 es '" + cualquierCadena.charAt(999) + "'")

// var l="ABC".charCodeAt(0)
//  console.log(l)

//  var k = 'ABC'.codePointAt(1)
//  console.log(k)




// let numero = 4

// let nombre = `Edteam tiene  tres años ${numero + 1}`

// console.log (typeof numero)
// console.log( typeof nombre)
// // let div = ` <div class="container"> ${nombre} </div> `
// let data ={
//     nombre:"pedro",
//     apellid:"perez"
// }
// // document.body.innerHTML = div 

// const agend = document.getAnima

// const despertar = new  Promise ((resolve,reject ))
// // resuelve lo primero que encuenntre 

// // ejercicio de  promesas  
// //
// let age = prompt('Dime tu edad')

// let isAdult =  age >= 18
//                 ? 'Eres mayor de edad ' : 'aun eres un niño'
//                 alert ( isAdult)

// let fruta = prompt ('ingrese una fruta ')

// let isgrupo =  a<b           ? 'esas letrs no existen ' : 'esta correcto'
// //              alert (isgrup)
// let  ansewer = prompt ('¿Cual es la captal del Peru').toUpperCase().trim()

// let message=ansewer === 'LIMA'
//     ? 'correcto!'
//     :'!tequivocaste la respuesta es Lima '
//     alert(message)


// var  frutas =["Manzana","Durazno","Sandia"];
// var amigos = ["ana" , "casimiro", "anastacio"]

// document.write("tienes"+frutas.length);
// // var comer = frutas.concat(amigos);

// document.write(amigos.join("-"));
// var ordenados = frutas.sort();
// document.write(ordenados);

// var  nombre ="Eduardo",
//          edad = 20;

//       if (nombre == "Carlos"){

//         document.write("Bienvenudo " + nombre);

//       } 
//       else {
//           document.write("Bienvenido Jose" );
// //       }  
// var number = 5

// document.write((number + number).toFixed(2) + "\n");

// var text = 20

// var textToNumber = parseInt(text, 10);

// document.write(textToNumber + '\n');

// var texto = 20.12
// // parseFloat(texto)
// parseInt(texto, 10)
// document.write(texto)


// document.write((number + number) / Math.ceil(Math.random() * 20)) + '\n';

// document.write('\n' + 'Eduardo'.length)
// var nombre = '  Brenda   '
// document.write(nombre.toUpperCase())

// var answer = prompt('¿Cual es la  capital de veracrz?').toUpperCase().trim()
// var message = answer === 'XALAPA'
//     ? '¡Correcto!'
//     : '¡Te equivocaste la respuestas es  Xalapa';

// alert(message)

// document.write(answer +'\n' );



// // document.write(nombre.indexOf('r')+'\n' )

// // document.write('Hola amigos'.indexOf('o',2))

// document.write('Hola amigos'.lastIndexOf('o'))

// document.write('https://ed.team/blog'.includes('-'))




// document.write('message'.replace('message','Pedro tiene ambre ') +'\n')

// document.write('Maximus'.split('i') +'\n' )

// document.write('5 numero'.split(' ')[1] +'\n')

// document.write('Brenda'.split('') +'\n')
// document.write('Brenda'.split('')[5])
// document.write('brenda')[4]
// document.write('Hola mundo'.slice(2,-1))



// console.log("hola")

// if (10>8) console.log('Te quiero ')//en una sola linea 
// if (''==='')


// console.log('mucho')

// //en bloque
// if ('a'== 'a'){
//     document.write('Me ejecute')
// }

// {
//     var  empresa ='EDteam'

// }
// document.write(empresa)

// var empresa = 8;

// if(8>9){
//     document.write(empresa)
// }
// else 
// if(8<4){
//     document.write(' Correcto')
// }
// else 
// {
// document.write('Tu puedes')
// }



// if (empresa<5 && empresa>6){
//     document.write('vamos')
// }
// else {
//     document.write(empresa)
// }


// var age = parseInt(prompt ('Dime tu edad'),10)

// if(age){
//  if(age >=18){
//      document.write('Eres  mayor de edad ')
//     }
//  else {
//   document.write('te faltan años ')
//  }
// }

// else {
//     age = parseInt(prompt('tue edaddebe ser  un numero '),10)
// }

// document.write(age )
// // var message = age >= 18 ? 'Eres mayor de edad'
// //                      : 'Te falta años'


// // document.write(message + age)
// var  answer= prompt('Escoge un numero')

// switch (answer) {
//     case 1:
//         alert("Eres timido")
//         break;
//      case 2:
//          alert('Eres estrovertido')
//          break;
//          case 3:
//              alert('Eres muy feliz')
//              break;
//     default:
//        document.write('Por favor escribe un numero del 1 al 3 ')
//        break
// }


// var answer = prompt(`La capital de  colombia es :
//  a.Bogota
//  b.Lima
//  c.Madrid
//  d.Mexico
//  e.La Paz

//   escriba la letra derespuesta `).toUpperCase().trim()

//   switch (answer) {
//       case 'A':
//           alert('¡Correcto!')
//           break;
//         case 'B':
//             alert('¡Respuesas  incorrecta!')

//       default:
//           alert('No has escrito una respuesta correcta')
//           break;
//   }

// const Despertar = 2000
// const agenda = document.getElementById('agenda');
// const despertar = new Promise((resolve, reject) => {
//     document.write('Esperando')
//    setTimeout(()=> {
//         resolve(desayunar)
//     },2000);    

//     setTimeout(()=> {
//         reject('Agenda')
//     },Despertar); 
//     setTimeout(()=> {
//         resolve('bañarse')
//     },4000); 
// });



// despertar.then((response) => {
//     document.write(`Despertar ,${response}`)
// })
//     .catch((error) => {
//         document.write(`Error,${error}`
//         )
//     })

// const Despertar = 2000

// const agenda = document.getElementById('agenda');

// const despertar = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Despertar')
//     }, Despertar)


// });
// function deberes() {

//       return new Promise ((resolve, reject)=>{
//           setTimeout(()=>{
//               resolve('Ducharse')
//           },)
//       })


//     // dia = ["Vestirse", "Desayunar", "salir"]
//     // var i=0;

//     // setTimeout(() => {
//     //  if(i<3){
//     //     console.log(dia[i]);
//     //      i++;
//     //  }
//     //  else {break;}
//     //  },2000);

//     }

// despertar.then((message) => {
//         document.write(`Hoy es un buen dia ${message}`)
//     })
//         .catch((message) => {
//             document.write(`Error, ${message}`)
//         })