const express = require('express'); 
const ejs = require('ejs')
const path = require('path');
const app = express(); 

//configurando a sessão da pagina 
const session = require ('express-session'); 
app.use(session ({
    secret: 'sesisenai', //chave para criptografia 
    reave: false, //indica se a sessão deve ser salva mesmo se nenhum informaçoes 
    saveUninitialized: false //indica se a sessão deve ser criada mesmo se nenhuma informação foi criada 
}))

//middlware para verficicar se a um usuario autenticado
const verficicarAutenticacao = (req, res, next) => {
    //criando uma variavel global  para ser utilizada em todas as viewa
    if(req.session.usuario){
        res.locals.usuario= req.session.usuario|| null; 
        //continua a execução da rota
        next();
    } else {
        res.redirect ('/admin/login'); 
    }
}

app.set('views', path.join(__dirname, 'views'))// configura a parta de vies 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))); //configurando a pasta para os arquivos estáticos 
app.use(express.urlencoded ({extended:true}));//para processar e receber os dados do formulario 
app.use(express.json());//para utilizar os dados em formato json

app.get('/admin', verficicarAutenticacao, (req,res) => {
    res.render('admin/dashboard')
}); 

//rota da /pagina principal "landing page"
app.get('/',(req,res) => {
    res.render ('landing/index');   
})


//importando as rodas do admin 
const adminRotas= require('./routes/admin')
app.use('/admin', adminRotas); //todas as rotas do admin começam com admin 

//importando as rotas de professoras
//busca do arquivo routes/professores.js
const professoresRotas = require('./routes/professores')
app.use('/professores', verficicarAutenticacao, professoresRotas); 

const turmasRotas = require('./routes/turmas'); // Caminho correto
app.use('/turmas',verficicarAutenticacao, turmasRotas); // Caminho base

const disciplinasRotas = require('./routes/disciplinas'); // Caminho correto
app.use('/disciplinas',verficicarAutenticacao, disciplinasRotas); // Caminho base

const alunosRotas = require('./routes/alunos'); // Caminho correto
app.use('/alunos',verficicarAutenticacao, alunosRotas); // Caminho base

const porta = 3000
app.listen(porta,()=> {
    console.log(`Servidor http://localhost:${porta}`); 
})