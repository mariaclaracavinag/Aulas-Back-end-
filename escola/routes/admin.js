const express = require('express'); 
const rotas =  express.Router(); 
const BD = require('../db');
//rota para o painel administrativo
//localhost:3000/admin/dashboard

rotas.get('/login', (req,res) => {
    res.render('admin/login.ejs')
}); 

rotas.post('/login', async (req, res) => {
   const email = req.body.email; 
   const senha = req.body.senha; 

   const sql = 'SELECT * FROM usuarios where email = $1 AND senha = $2'; 
   const dados = await BD.query(sql, [email, senha] )

   if(dados.rows.leght ==0 ){
    res.render ('admin/login.ejs', {mensagem: 'email ou senha incorretos'}); 
   }else{
    req.session.usuario = dados.rows[0]; 
    res.redirect('/admin');
   }
})
rotas.get('/logout', (req,res) => {
    req.session.destroy(); 
    res.redirect('/admin/login'); 
}); 


module.exports = rotas; 