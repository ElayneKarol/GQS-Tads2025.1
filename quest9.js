//Contar Ocorrências de um Caractere em uma String
//Crie uma função contarOcorrencias(str, char) que conte quantas vezes um
//caractere específico aparece em uma string.

function contarOcorrencias(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    return str.split(char).length - 1;
}
//test
console.log(contarOcorrencias("Hello, word" , "o"));
