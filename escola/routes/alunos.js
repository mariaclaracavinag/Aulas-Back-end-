const express = require('express');
const rotas = express.Router();
const BD = require('../db'); // Aqui você conecta com o banco

// Rota para listar turmas
rotas.get('/listar', async (req, res) => {
    //Armazenando o valor do campo de busva em uma varivael
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome';

    const pg = req.query.pg || 1; //variavel que controla a pg atual
    const limite =  5; //qntd de registros por pagina, o intervalo 
    const offset = (pg-1) * limite; // por onde ele quer que comece

    //Buscando todos os professores do BD 
    const dados = await BD.query(`SELECT *,COUNT(*) OVER() AS total_itens
FROM alunos INNER JOIN turmas on alunos.id_turma = turmas.id_turma
WHERE alunos .ativo =  true and (nome ilike $1 or nome_turma ilike $1)
         order by ${ordem}
         limit $2 offset $3`,
         ['%' + busca + '%', limite, offset]);
    console.log(dados.rows);

     const totalPgs = Math.ceil(dados.rows[0].total_itens / limite); 
    //buscando o arquivo lista.ejs na pasta views/professores
    res.render('alunos/lista', { 
        dadosAlunos: dados.rows,
        totalPgs: totalPgs,
        pgAtual: Number(pg),
        busca: busca, 
        ordem: ordem
     });
});
rotas.get('/novo', async (req, res) => {
    const dadosturmas = await BD.query(`
        SELECT id_turma, nome_turma FROM turmas
        Where ativo = true
        ORDER by nome_turma`);
    res.render('alunos/novo.ejs', { dadosturmas: dadosturmas.rows });
});

rotas.post('/novo', async (req, res) => {
    //obtendo os dados do formulario de cadastro 
    const nome_aluno = req.body.nome_aluno;
    const id_turma = req.body.id_turma;
    const idade = req.body.idade
    const email = req.body.email
    const cpf = req.body.cpf
    const foto= req.body.foto
    const sexo = req.body.sexo
    // inserindo os dados recebidos no banco de dados 
    const sql = `INSERT INTO alunos (nome, id_turma,idade,email,cpf,foto,sexo) 
                  Values ($1, $2,$3,$4,$5,$6,$7)`;
    await BD.query(sql,[nome_aluno, id_turma,idade,email,cpf,foto,sexo]);

    res.redirect('/alunos/listar');
});
rotas.post('/excluir/:id', async (req, res) => {
    const id = req.params.id;

    const sql = 'UPDATE alunos SET ativo= false WHERE id_aluno= $1';
    await BD.query(sql, [id]);

    res.redirect('/alunos/listar')
})
rotas.get('/editar/:id', async (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM alunos where id_aluno = $1';
    const dados = await BD.query(sql, [id]);

    const dadosturmas = await BD.query(`
        SELECT id_turma, nome_turma FROM turmas
        Where ativo = true
        ORDER by nome_turma`);
    res.render('alunos/editar.ejs', { aluno: dados.rows[0], dadosturmas: dadosturmas.rows });
});
rotas.post('/editar/:id', async (req, res) => {
    const id = req.params.id;

      //obtendo os dados do formulario de cadastro 
    const nome = req.body.nome;
    const id_turma = req.body.id_turma;
    const idade = req.body.idade
    const email = req.body.email
    const cpf = req.body.cpf
    const foto= req.body.foto
    const sexo = req.body.sexo
    // inserindo os dados recebidos no banco de dados 
    const sql = `UPDATE alunos SET nome = $1,
     id_turma = $2,
     idade =$3,
     email =$4,
     cpf = $5,
     foto =$6,
     sexo = $7
                     WHERE id_aluno = $8`;
    await BD.query(sql,[nome, id_turma,idade,email,cpf,foto,sexo, id]);

    res.redirect('/alunos/listar');
});
rotas.get('/notas/:id', async (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM alunos where id_aluno = $1';
    const dados = await BD.query(sql, [id]);

    const dadosDisciplinas = await BD.query(`SELECT * From disciplinas Where ativo = true`);
    res.render('alunos/notas.ejs', { aluno: dados.rows[0], dadosDisciplinas: dadosDisciplinas.rows });
});
rotas.post('/notas/:id', async (req, res) => {
    const id = req.params.id;

      //obtendo os dados do formulario de cadastro 
    const id_disciplina = req.body.id_disciplina;
    const media = req.body.media;
    const nr_faltas = req.body.nr_faltas;

    let status ='APROVADO'; 
    if(media < 7 ||  nr_faltas > 25) {
        status = 'REPROVADO';
    }

    // inserindo os dados recebidos no banco de dados 
    const sql = `INSERT INTO aluno_disciplina 
    (id_aluno, id_disciplina, media, nr_faltas, status)
    VALUES ($1, $2, $3, $4, $5);`;
    await BD.query(sql,[id, id_disciplina, media, nr_faltas, status]);

    res.redirect('/alunos/listar');
});

module.exports = rotas;