//Numeros hexadecimales   esto se  utiliza  0xF - 0x123 0xFFFF 



function convertir() {
    var n1 = document.getElementById("num1").value,
        n2 = document.getElementById("num1").value,
        n3 = document.getElementById("num1").value,
        n4 = document.getElementById("num1").value;
    if (isNaN(n1)) {
        document.getElementById("resul").innerHTML =
            document.getElementById('num1').value + "Calcular";

    } else {
        n1 = parseInt(n1);

        document.getElementById("resul").innerHTML =  "Hexadecimal"+ " - " +n1.toString(16) ;
    }
    {
        document.getElementById("resul1").innerHTML =
            document.getElementById('num1').value + "Calcular";
    }
    {
        n2 = parseInt(n2);
        document.getElementById("resul1").innerHTML =   "Octal"+ " - " + n2.toString(8);

    }
    {
        document.getElementById("resul2").innerHTML =
            document.getElementById('num1').value + "Calcular";

        {
            n3 = parseInt(n3);
            document.getElementById("resul2").innerHTML =   "Decimal"+ " - " + n3.toString(10);
        }

        {
            document.getElementById("resul3").innerHTML =
                document.getElementById('num1').value + "Calcular";

            {
                n4 = parseInt(n4);
                document.getElementById("resul3").innerHTML =   "Binario"+ " - " + n4.toString(2);
            }
        }

    }
}