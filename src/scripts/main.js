import {chamarApi} from './package.js'

const button = document.querySelector('#btn-submit')
button.addEventListener('click', e => {
    e.preventDefault();

    chamarApi() 
})
