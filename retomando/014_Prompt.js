const prompt = require ('prompt-sync')();

let nome = prompt('qual é o seu nome ');
console.log (`seja bem vindo, ${nome}`);
let ano = prompt(`${nome} que ano voce nasceu ?`)
let idade =( 2025 - ano);
console.log (`voce tem ${idade} anos`)
let aniversario = prompt(`${nome} voce ja fez aniversario ? (s/n)`)
if (aniversario == 's') {
    console.log (`voce tem ${idade} anos`)
} else {
    idade -- 
    console.log (`voce tem ${idade} anos`)
}

