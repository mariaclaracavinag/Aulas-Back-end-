//importando o modulo 'fs' para ler arquivos 
const fs = require('fs'); 

//lendo o arquivo JSON
const dados = fs.readFileSync('./024_JSON.json', 'utf8'); 

//Convertendo o JSON para um objeto JavaScript utilizando json.parse
const pessoa = JSON.parse(dados); 
console.log(pessoa);
console.log(pessoa.nome);
