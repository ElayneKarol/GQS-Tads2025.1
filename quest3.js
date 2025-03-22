//Contar Vogais em uma String
//Desenvolva uma função contarVogais(str) que conte e retorne o número de
//vogais (a, e, i, o, u) em uma string fornecida

function contarVogais(str){
    let vogais = 'aeiouAEIOU'
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (vogais.includes(str[i])){
            count++
        }
    }
    return count;
}

console.log(contarVogais('palavra'));