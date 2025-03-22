//Encontrar o Maior Número em um Array
//Crie uma função maiorNumero(arr) que receba um array de números e
//retorne o maior valor presente nesse array.

function maiorNumero(arr){
    let maior = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maior){
            maior = arr[i]
        } 
    }
    return maior;
}

//test
console.log(maiorNumero([10,5,8,20,3]))

