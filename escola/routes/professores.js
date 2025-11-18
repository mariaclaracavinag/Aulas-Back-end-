const express = require('express');
const rotas = express.Router();
const BD = require('../db');

//listar professores (R-read)
//localhost:3000/professores/listar
rotas.get('/listar', async (req, res) => {
    //Armazenando o valor do campo de busva em uma varivael
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_professor';

    const pg = req.query.pg || 1; //variavel que controla a pg atual
    const limite =  2; //qntd de registros por pagina, o intervalo 
    const offset = (pg-1) * limite; // por onde ele quer que comece

    //Buscando todos os professores do BD 
    const dados = await BD.query(`
         SELECT *,COUNT(*) OVER() AS total_itens FROM professores
         WHERE ativo =  true and (nome_professor ilike $1 or formacao ilike $1)
         order by ${ordem}
         limit $2 offset $3`,
         ['%' + busca + '%', limite, offset]);
    console.log(dados.rows);

    const totalPgs = Math.ceil(dados.rows[0].total_itens / limite); 

    //buscando o arquivo lista.ejs na pasta views/professores
    res.render('professores/lista', { 
        dadosProfessores: dados.rows,
        totalPgs: totalPgs,
        pgAtual: Number(pg),
        busca: busca, 
        ordem: ordem 
     });
});

rotas.get('/novo', async (req, res) => {
    res.render('professores/novo.ejs')
});
rotas.post('/novo', async (req, res) => {
    //obtendo os dados do formulario de cadastro 
    const nome_professor = req.body.nome_professor;
    const telefone = req.body.telefone;
    const formacao = req.body.formacao;
    // inserindo os dados recebidos no banco de dados 
    const sql = 'INSERT INTO professores (nome_professor,telefone, formacao) Values ($1, $2,$3)';
    await BD.query(sql, [nome_professor, telefone, formacao])

    res.redirect('/professores/listar');
});
//Criando rota para excluir o professor passando i id ( d-delete)
rotas.post('/excluir/:id', async (req, res) => {
    const id = req.params.id;

    const sql = 'UPDATE professores SET ativo = false WHERE id_professor = $1';
    await BD.query(sql, [id]);

    res.redirect('/professores/listar')
})
rotas.get('/editar/:id', async (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM professores where id_professor = $1';
    const dados = await BD.query(sql, [id]);
    console.log(dados.rows[0]);
    res.render('professores/editar.ejs', { professor: dados.rows[0] });
});
rotas.post('/editar/:id', async (req, res) => {
    const id = req.params.id;

    //obtendo os dados do formulario de cadastro 
    const nome_professor = req.body.nome_professor;
    const telefone = req.body.telefone;
    const formacao = req.body.formacao;
    // inserindo os dados recebidos no banco de dados 
    const sql = `UPDATE professores SET
    nome_professor = $1,
    telefone = $2, 
    formacao = $3
    WHERE id_professor = $4`;
    await BD.query(sql, [nome_professor, telefone, formacao, id])

    res.redirect('/professores/listar');
});

module.exports = rotas;


