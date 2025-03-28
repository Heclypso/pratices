import {chamarApi, somarComRest} from './package.js'

const button = document.querySelector('#btn-submit')
button.addEventListener('click', e => {
    e.preventDefault();

    chamarApi() 
})

console.log(somarComRest(20,50,30))