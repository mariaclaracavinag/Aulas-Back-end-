const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('bem vindo a Cavina Joias !' )
});
const produtos = ['Aneis', 'Pulseiras', 'Colares', 'Brincos'];
app.get('/produtos', (req, res) => {
    let html = '<h1>lista de protudos: </h1>';
    html += '<ul>'; //html = html + '<ul>'
    for (let produtoAtual of produtos) {
        html += `<li> ${produtoAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
});
app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    const produtoSel = produtos[id];
    if (produtoSel == undefined) {
        res.send('Produto não encontrado')
    } else {
        res.send(`Visualizando o perfil do ${id} nome ${produtoSel}`)
    }
})
app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id = Number(req.params.id_produto);
    const preco = Number(req.params.preco);
    const qtde = Number(req.params.qtde);

    const produtoSel = produtos[id];
    if (produtoSel == undefined) {
        res.send('produto não encontrado');
        return;
    }

    const total = preco * qtde;
    res.send(`Produto: ${produtoSel} <br> Preço: ${preco} <br> Quantidade: ${qtde} <br> Total: ${total}`);
});
app.get('/menu', (req, res) => {
    let html = `
    <h1>📌 Menu Cavina Joias</h1>
    <a href="/">🏠 Principal</a> <br>
    <a href="/produtos">📜 Lista de Produtos</a> <br>
    <a href="/produto/1"> 🎀produto 1 </a> <br>
    <a href="/produto/7"> 🎀produto 7 </a> <br>
    <a href="/total/2/300/2"> ✨final✨ </a> <br>

    `;
    res.send(html);
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
}) 