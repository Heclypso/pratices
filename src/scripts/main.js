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

for (let keys of mapDeFrutas.keys()) {
    console.log(keys)
}

for (let values of mapDeFrutas.values()) {
    console.log(values)
}

for (let entries of mapDeFrutas.entries()) {
    console.log(entries)
}