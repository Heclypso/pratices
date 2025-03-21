import {somar} from './package.js'

const button = document.getElementById('btn-calc')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('first-number').value
    const secondNumber = document.getElementById('second-number').value

    console.log(firstNumber)
    console.log(secondNumber)

    try {
        console.log(somar(Number(firstNumber), Number(secondNumber)))
    } catch(e) {
        console.log("Ocorreu um erro", e)
    }
})