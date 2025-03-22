//Inverter uma String
//Escreva uma função inverterString(str) que receba uma string e retorne
//essa string invertida.

function inverterString(str){
    return str.split("").reverse().join("");
}
//test
console.log(inverterString("ola mundo"));