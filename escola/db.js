const {Pool} = require ('pg'); 

const BD = new Pool (
    {
         user: 'postgres', //usuaro cadastronno banco de dados
         host: 'localhost', //endereço do servidor do BD
         database: '_2025_escola', //nome de bd a ser cancelado
         password: 'admin', //senha do usuario
         port: 5432 //porta de conexao 
    }
);

module.exports = BD;