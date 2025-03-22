//Encontrar a Média de um Array
//Escreva uma função mediaArray(arr) que receba um array de números e
//retorne a média dos valores.

function mediaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++){
        soma += arr[i]
}
return soma / arr.length
}
//test
console.log(mediaArray([1,2,3,4,5]));