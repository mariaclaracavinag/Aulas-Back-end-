const prompt = require ('prompt-sync')();

function CalArea(altura, base) {
    
    let area = altura * (base/2);
    return area;
}
let altura = Number(prompt('Qual a altura? '));
let base = Number(prompt('Qual a base? '));
let resultado = CalArea(altura, base);
console.log(`A área é de ${resultado} cm²`);
