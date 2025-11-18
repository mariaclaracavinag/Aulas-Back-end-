const express = require('express');
const rotas = express.Router();
const BD = require('../db'); // Aqui você conecta com o banco

// Rota para listar turmas
rotas.get('/listar', async (req, res) => {
    //Armazenando o valor do campo de busva em uma varivael
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_turma';

    const pg = req.query.pg || 1; //variavel que controla a pg atual
    const limite =  2; //qntd de registros por pagina, o intervalo 
    const offset = (pg-1) * limite; // por onde ele quer que comece

    const dados = await BD.query(`SELECT *,COUNT(*) OVER() AS total_itens FROM turmas 
        WHERE ativo = true and (nome_turma ilike $1)
        order by ${ordem}
         limit $2 offset $3`,
         ['%' + busca + '%', limite, offset]);
    console.log(dados.rows);

     const totalPgs = Math.ceil(dados.rows[0].total_itens / limite); 

    res.render('turmas/lista.ejs', {
         dadosTurmas: dados.rows,
        totalPgs: totalPgs,
        pgAtual: Number(pg),
        busca: busca, 
        ordem: ordem 
        }); 
});

rotas.get('/novo',async (req,res) => {
    res.render('turmas/novo.ejs')
}); 
rotas.post('/novo',async (req,res) => {
    //obtendo os dados do formulario de cadastro 
    const nome_turma = req.body.nome_turma;
// inserindo os dados recebidos no banco de dados 
    const sql = 'INSERT INTO turmas (nome_turma) Values ($1)'; 
    await BD.query(sql, [nome_turma])

    res.redirect('/turmas/listar'); 
});
rotas.post('/excluir/:id',async (req,res) => {
    const id = req.params.id;

    const sql = 'UPDATE turmas SET ativo= false WHERE id_turma = $1';
    await BD.query(sql, [id]);

    res.redirect('/turmas/listar')
    })
    rotas.get('/editar/:id',async (req,res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM turmas where id_turma = $1'; 
    const dados = await BD.query(sql,[id]); 
    console.log(dados.rows[0]); 
     res.render('turmas/editar.ejs', {turmas: dados.rows[0]});
}); 
rotas.post('/editar/:id',async (req,res) => {
    const id = req.params.id; 

    //obtendo os dados do formulario de cadastro 
    const nome_turma = req.body.nome_turma;
// inserindo os dados recebidos no banco de dados 
    const sql = `UPDATE turmas SET
    nome_turma = $1,
    WHERE id_turma = $2`; 
    await BD.query(sql, [nome_turma, id])

    res.redirect('/turmas/listar'); 
}); 

module.exports = rotas;
