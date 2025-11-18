const express = require('express');
const rotas = express.Router();
const BD = require('../db'); // Aqui você conecta com o banco

// Rota para listar turmas
rotas.get('/listar', async (req, res) => {
    //Armazenando o valor do campo de busva em uma varivael
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_disciplina';

    const pg = req.query.pg || 1; //variavel que controla a pg atual
    const limite =  2; //qntd de registros por pagina, o intervalo 
    const offset = (pg-1) * limite; // por onde ele quer que comece

    //Buscando todos os professores do BD 
    const dados = await BD.query(`SELECT *,COUNT(*) OVER() AS total_itens 
FROM disciplinas INNER JOIN professores on disciplinas.id_professor = professores.id_professor
WHERE disciplinas.ativo = true and (nome_disciplina ilike $1 or nome_professor ilike $1)
         order by ${ordem}
         limit $2 offset $3`,
         ['%' + busca + '%', limite, offset]);
    console.log(dados.rows);

    const totalPgs = Math.ceil(dados.rows[0].total_itens / limite); 
    //buscando o arquivo lista.ejs na pasta views/professores
    res.render('disciplinas/lista', {
         dadosDisciplinas: dados.rows,
        totalPgs: totalPgs,
        pgAtual: Number(pg),
        busca: busca, 
        ordem: ordem 
        });
});

rotas.get('/novo',async (req,res) => {
    const dadosProfessores = await BD.query(`
        SELECT id_professor, nome_professor FROM professores 
        Where ativo = true
        ORDER by nome_professor`); 
    res.render('disciplinas/novo.ejs', {dadosProfessores: dadosProfessores.rows}); 
}); 
rotas.post('/novo',async (req,res) => {
    //obtendo os dados do formulario de cadastro 
    const nome_disciplina = req.body.nome_disciplina;
    const id_professor = req.body.id_professor;
// inserindo os dados recebidos no banco de dados 
    const sql = `INSERT INTO disciplinas (nome_disciplina, id_professor) 
                  Values ($1, $2)`; 
    await BD.query(sql, [nome_disciplina, id_professor]); 

    res.redirect('/disciplinas/listar'); 
});
rotas.post('/excluir/:id',async (req,res) => {
    const id = req.params.id;

    const sql = 'UPDATE disciplinas SET ativo= false WHERE id_disciplina = $1';
    await BD.query(sql, [id]);

    res.redirect('/disciplinas/listar')
    })
    rotas.get('/editar/:id',async (req,res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM disciplinas where id_disciplina = $1'; 
    const dados = await BD.query(sql,[id]); 

     const dadosProfessores = await BD.query(`
        SELECT id_professor, nome_professor FROM professores 
        Where ativo = true
        ORDER by nome_professor`); 

    console.log(dados.rows[0]); 
     res.render('disciplinas/editar.ejs', {disciplina: dados.rows[0], dadosProfessores: dadosProfessores.rows});
}); 
rotas.post('/editar/:id',async (req,res) => {
    const id = req.params.id; 

    //obtendo os dados do formulario de cadastro 
    const nome_disciplina = req.body.nome_disciplina;
    const id_professor = req.body.id_professor;
// inserindo os dados recebidos no banco de dados 
    const sql = `UPDATE disciplinas SET
    nome_disciplina = $1,
    id_professor =$2
    WHERE id_disciplina = $3` 
    await BD.query(sql, [nome_disciplina, id_professor, id])

    res.redirect('/disciplina/listar'); 
}); 

module.exports = rotas;