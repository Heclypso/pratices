import {chamarApi, somarComRest} from './package.js'

const button = document.querySelector('#btn-submit')
button.addEventListener('click', e => {
    e.preventDefault();

    chamarApi() 
})

console.log(somarComRest(20,50,30))

const carroDaAna = {
    modelo: 'ka',
    fabricante: 'ford',
    motor: 1.8
}

const carroDaJulia = {
    ...carroDaAna,
    motor: 2.0
}

carroDaJulia.motor 

const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaJulia)

let mapDeFrutas = new Map([
    ["maça", 200],
    ["banana", 400],
    ["maça-verde", 100]
])

console.log(mapDeFrutas)

for (let [chave, valor] of mapDeFrutas.entries()) {
    console.log(`${chave}, ${valor}`)
}

const array = ['Banana', 'Maça', 'Banana', 'Maça']

const set = new Set([...array])

const arraySemItensDuplicados = [...set]

console.log(arraySemItensDuplicados)