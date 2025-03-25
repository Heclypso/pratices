// const endpoint = 'https://dummyjson.com/products'; // url da requisição ao servidor
const cep = '01001000';
const endpoint = `https://viacep.com.br/ws/${cep}/json/`; // url da requisição ao servidor


export const chamarApi = async () => { // convertido a função chamarApi para arrow function
    try { // a função vai tentar executar esse bloco
        const resp = await fetch(endpoint)

        if (resp.status === 200) {
            const obj = await resp.json();
            console.log(obj)
            console.log(obj.localidade)
            console.log(obj.logradouro)
        }

    } catch (error) { // se o bloco anterior (try) falhar esse bloco será executado
        console.log('Ocorreu um erro', error)
    }
}

