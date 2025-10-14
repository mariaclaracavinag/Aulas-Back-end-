//importando o arquivo 
const funcoesJuros = require('./027_modulo_juros');

//utilizando a função de juro simples no modulo
const resultosJurosSimples = funcoesJuros.juros_simples (800,3,12);
console.log = {resultosJurosSimples};

//utilizando a função juros_composto do modulo
const resJurosComposto = funcoesJuros.juros_composto(500,4,24);
//Desestruturando o objeto de retorno da função 
const {juros, total} = resJurosComposto; 

console.log(`o juros foi de R${juros} e o total foi de R${total}`);