
const sumarTodos= (...numeros)=>{
    let resultado=0
     for (let i=0; i<numeros.length; i++){
       resultado += numeros[i]
     }
    return resultado
 }
 console.log(sumarTodos(2,4,6,8,10))
 
 
const c = console.log

const doSomething = x => y => x * y

const a = doSomething(2)(2) //
const b = doSomething(3)
c(doSomething(a)(b(3)))

var l = 'Hola'
const saludo = persona => {
  l = a + ' ' + persona
  return a
}
c(saludo('Pedro'))
c(a)


{
const arr=[1,2,3,4,6]
document.write(arr.push(5+ "<br>"))
document.write(arr.pop(1)+"<br>")
document.write(arr.unshift('nuevo'))
document.write(arr.shift()+ "<br>")

arra = ['Peru', 'Colombia', 'Mexico', 'Bolovia']
document.write(arra.splice('Chile', 'Ecuador ') + "<br>")
document.write(arra + "<br>")
c(arra.splice(0, 1))
document.write(arra+"<br>")
arr.slice(2, 4)
 document.write(arra+"<br>")
}
var numbers = [0, 1, 2, 3, 4]
document.write(numbers.join('-') + "<br>")

var numbers2 = [1, 2, 3, 4, 5, 6, 7, 10]
document.write(numbers.concat(numbers2).concat(arra).join('  ') + "<br>")
let [p1, p2, p3, p4, p5, p6] = arra
var palindromo = ['anita lava la tina']

document.write(palindromo.reverse('anita lava la tina') + "<br>")