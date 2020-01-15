
// console.log(FLT_SIGNBIT)
// console.log(FLT_EXPONENT)
// console.log(FLT_MANTISSA)

// Esta es la sintaxis de numeros  binarios 
//Hexadecimales 
// octales

function numeros() {
    var FLT_SIGNBIT = 0b10000001;
    var FLT_EXPONENT = 0b1111110000000000000000;
    var FLT_MANTISSA = 0B0000000000000111111111111;

    var m = 0644,
        x = 0755,
        a = 0o10,
        n = document.getElementById("agenda2").textContent;
    document.getElementById('agenda').innerHTML = n + '<br>' + a + '<br>' + m + '<br>' + x + '<br>'+
     (a*m );

    var resultado = document.getElementById("tabla").innerHTML += FLT_SIGNBIT + '<br>' +
        FLT_EXPONENT + '<br>' + FLT_MANTISSA +  '<br>' +(a + x);


      

        
    


}

