//função nomeada
const prompt = require ('prompt-sync')();

function CalArea(altura, base) {
    
    let area = altura * (base/2);
    return area;
}
let altura = Number(prompt('Qual a altura? '));
let base = Number(prompt('Qual a base? '));
let resultado = CalArea(altura, base);
console.log(`A área é de ${resultado} cm²`);
//função anonima 
const CalArea = function(altura, base) {
    
    let area = altura * (base/2);
    return area;
}
let alturaA = Number(prompt('Qual a altura? '));
let baseA = Number(prompt('Qual a base? '));
let resultadoA = CalArea(altura, base);
console.log(`A área é de ${resultado} cm²`);
//função arrow 
const CalArea = function(altura, base) {
    
    let area = altura * (base/2);
    return area;
}
let alturaR = Number(prompt('Qual a altura? '));
let baseR = Number(prompt('Qual a base? '));
let resultadoR = CalArea(altura, base);
console.log(`A área é de ${resultado} cm²`);