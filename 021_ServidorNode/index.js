//criando constante para receber o modulo express
const express = require('express');
//criando uma aplicação express
const app = express();

//rota principal
app.get('/', (req, res) => {
    res.send('bem vindo ao servidor node.js com Express!')
});
//rota sobre
app.get('/sobre', (req, res) => {
    res.send('bem vindo ao servidor sobre!')
});
const usuarios = ['mauro', 'Alice', 'Juliana', 'Roger'];
app.get('/usuarios', (req, res) => {
    let html = '<h1>lista de usuarios: </h1>';
    html += '<ul>'; //html = html + '<ul>'
    for (let usuarioAtual of usuarios) {
        html += `<li> ${usuarioAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
});
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    if (usuarioSel == undefined) {
        res.send('usuario não valido')
    } else {
        res.send(`Visualizando o perfil do ${id} seu nome é ${usuarioSel}`)
    }
})
app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}`);
})
app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a href = "/" >🤸‍♀️ principal </a> <br>
    <a href = "/sobre"> 👀sobre </a> <br>
    <a href = "/usuarios"> 👨‍💻 usuarios </a> <br>
    <a href = "/usuario/1"> 👨‍💻 usuarios 1 </a> <br>
    <a href = "/usuario/7"> 👨‍💻 usuario invalido </a> <br>
    <a href = "/soma/16/48"> 🧮 soma </a> <br>
    `;
    res.send(html);
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})  