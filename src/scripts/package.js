// cep de teste = '01001000';

export const chamarApi = async () => { 
    const cep = document.getElementsByName('cep')[0].value;
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    const state = document.getElementsByName('state')[0]
    const city = document.getElementsByName('city')[0]
    const street = document.getElementsByName('street')[0]

    try { 
        const resp = await fetch(endpoint)

        if (resp.status === 200) {
            const obj = await resp.json();
            state.value = obj.estado
            city.value = obj.localidade
            street.value = obj.logradouro
            console.log(obj)

        }

    } catch (error) { 
        console.log('Ocorreu um erro', error)
    }
}

export function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma
}