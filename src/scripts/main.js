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

const array = ['Facebook', 'Instagram', 'Facebook', 'Facebook']

const set = new Set([...array])

const arraySemItensDuplicados = [...set]

arraySemItensDuplicados.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} possui uma conta na rede social ${nomeDaRedeSocial}`)
})

let tempoOffline = '2 Dias';

const itensDetalhados = arraySemItensDuplicados.map(function(itemAtual){
    return itemAtual = {
        nome: itemAtual,
        tempoOffline: `${tempoOffline}`,
        verificado: true
    }
})
console.log(itensDetalhados)

const contaDoFacebook = redeSocial => redeSocial.nome === 'Facebook';

const possuiContaNoFacebook = itensDetalhados.find(contaDoFacebook)
console.log(possuiContaNoFacebook)

const indiceDoItem = itensDetalhados.findIndex(contaDoFacebook)
console.log(indiceDoItem)



const redeSocialEstaVerificada = redeSocial => redeSocial.verificado === true;
// itensDetalhados[0].verificado = false;

const todasAsContasEstaoVerificadas = itensDetalhados.every(redeSocialEstaVerificada)
console.log(todasAsContasEstaoVerificadas)

const filtraContasVerificadas = itensDetalhados.filter(redeSocialEstaVerificada)
console.log(filtraContasVerificadas)