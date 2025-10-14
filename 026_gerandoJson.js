const fs = require('fs'); 

const pessoa = {
    nome: 'Maria clara', 
    idade: 16, 
    hobbies: ['viajar','ler','editar video']
}

//convertendo um objeto JavaScript para JSON
const json = JSON.stringify(pessoa); 

//gravando o arquivo json 
fs.writeFileSync('./026.json',json); 