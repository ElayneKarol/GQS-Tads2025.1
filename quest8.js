//Ordenar um Array em Ordem Crescente
//Escreva uma função ordenarArray(arr) que receba um array de números e
//o retorne ordenado em ordem crescente.

function ordenarArray(arr){
    return arr.sort((a, b) => a - b);
}
//test
console.log(ordenarArray([3,1,4,2,5]));