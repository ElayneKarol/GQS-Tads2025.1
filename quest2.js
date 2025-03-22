//Crie uma função numeroPrimo(num) que receba um número inteiro e
//retorne true se ele for primo, ou false caso contrário.
//Exemplo: numeroPrimo(7) deve retornar true.

function numeroPrimo(num) {
    if (num <= 1) {
          return false;
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false;
            }
        }
    }
    return true;
}

console.log(numeroPrimo(10));