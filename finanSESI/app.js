const express = require('express'); 
const ejs = require('ejs')
const expressLayouts = require ('express-ejs-layouts'); 

const app = express(); 

//configurando o motor de visualização EJS 
app.set('view engine', 'ejs');
//configurando a pasta para os arquivos estáticos 
app.use(express.static('public')); 

//definindo o layout padrão da nossa pagina
app.use(expressLayouts); 
app.set('layout', 'layouts/principal'); 

//para processar e receber os dados do formulario 
app.use(express.urlencoded ({extended:true})); 

//rota principal do site 
app.get('/',(req,res) => {
    //buscando arquvio index.ejs na pasta views 
    res.render('index'); 
});

app.get('/sobre',(req,res) => {
    //buscando arquvio index.ejs na pasta views 
    res.render('sobre'); 
});
app.get('/jurosSimples',(req,res) => {
    //buscando arquvio index.ejs na pasta views 
    res.render('jurosSimples'); 
});
app.get('/jurosComposto',(req,res) => {
    //buscando arquvio index.ejs na pasta views 
    res.render('jurosComposto'); 
});

app.post('/jurosSimples', (req,res) =>{
    //recebendo os dados do campos do formulario
    const capital = req.body.capital; 
    const taxa = req.body.capital; 
    const tempo = req.body.capital; 
    const juros = (capital * taxa * tempo) / 100; 
    const total = Number(capital) + Number (juros); 

    res.render('jurosSimples', {capital,taxa,tempo,juros,total});
})
app.post('/jurosComposto', (req, res) => {
    const capital = (req.body.capital);
    const taxa = Number (req.body.taxa) / 100;
    const tempo = (req.body.tempo);

    const total = capital * (1 + taxa) ** tempo;
    const juros = total - capital;

    res.render('jurosComposto', { capital, taxa: req.body.taxa, tempo, juros, total });
});

const porta = 3000;
app.listen(porta,() => {
    console.log(`servido http://localhost:${porta}`); 
});