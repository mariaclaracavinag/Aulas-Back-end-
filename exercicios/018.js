let joia = {
    nome: "anel", 
    preco: 120,
    colecao: "bicolor", 
    quebrdo: false
}
console.log(produto); 
console.log(produto.nome); //celular 
console.log(produto.preco); //120

console.log(produto['nome']); //anel

produto.preco = 180; //alterando preco
console.log(produto); 
produto.colecao = "natal"
console.log(produto); 