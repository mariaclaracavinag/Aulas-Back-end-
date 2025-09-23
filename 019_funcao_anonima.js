//funçao nomeada
function saudacao (nome) {
    console.log(`tenha um bom dia${nome}!`)
}
saudacao("joao")

//função anonima 
const saudacaoAnonima = function (nome) {
    console.log (`tenha um bom dia ${nome}!`);
}
saudacaoAnonima("maria"); 

    function soma (v1,v2){
    console.log(v1+ v2);
}
soma(4,8); 
 const somaAnonima = function (v1,v2) {
    console.log (v1 + v2);
 }
 somaAnonima(4,8);