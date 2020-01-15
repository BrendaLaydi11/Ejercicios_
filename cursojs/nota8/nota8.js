var numbers2 = [1, 2, 3, 4, 5, 6, 7, 10]

const remoDuplicate = numbers2 => [...new Set(numbers2)]
for (let i = 0; i < numbers2.length; i++)
    document.write((numbers2[i]))
for (let element of numbers2) {
    document.write(element + '<br>')
}
let teacher = ['Juan', 'Pedro', 'Mariano', 'juena']
for (let teachers of teacher) {
    document.write(teacher[3] + '<br>')
    break
}

teacher.forEach((el, i, teachers) => {
    document.write((el) + '<br>')
    document.write(teachers + '<br>')
    document.write(i + '<br>')
});
let maestros = []

teacher.forEach(el => {
    maestros.push(el * el)
})
document.write(teacher.every(el => el.length >= 3) + '<br>')
let newNum = document.write(numbers2.map(el => el * el + '<br>'))
let other = document.write(numbers2.filter(el => el > 49 + '<br>'))
