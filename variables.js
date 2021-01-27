const PAIS_NACIMIENTO = 'España' //Constantes no cambian
let persona //declaracion variable
persona = {
    persona: 'pepe',
    trabajos: ['albañil', 'policia'],
    casado: false
}
console.log(persona['trabajos'] + " " + "\ntipo de datos persona: " + typeof persona)
let i = 5
document.write(`El ultimo valor ${i}`)
let nombre = String(prompt('Escriba su nombre:'))
document.write(nombre)
let num01 = Number(prompt('Escribe un numero:'))
document.writeln(num01)
let num02 = String(prompt('Teclea un nuevo numero:'))
document.writeln(num02 + 10)
let a = 10
a++
console.log(a)