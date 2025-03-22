//Verificar Palíndromo
//Desenvolva uma função palindromo(str) que receba uma string e retorne
//true se a string for um palíndromo (lê-se da mesma forma de frente para
//trás), ou false caso contrário

function palindromo(str) {
    //remov
    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    //comp
    return str === str.split('').reverse().join('');
}
//tes
console.log(palindromo('radar'));