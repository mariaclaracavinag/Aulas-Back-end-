let produto = {
    nome: "celular",
    preco: 2000,
    marca:"samsung", 
    quebrado: false
}

//exibindo todos os dados do objeto
console.log(produto); 
console.log(produto.nome); //celular 
console.log(produto.marca); //samsung 
console.log(produto.modelo); //undefined 

console.log(produto['nome']); //celular 

produto.preco = 1900; //alterando preco
console.log(produto); 
produto.modelo = 'galazy s24'
console.log(produto); 

//ITERANDO SOBRE AS CHAVES DO OBJETO UTILIZANDO O FOR 
for (let chave in produto){
    console.log(`chave : ${chave} seu valor é ${produto[chave]}`); 

}
let aluno = {
    nome: 'joaquim',
    sexo: 'M', 
    idade: 16,
    dados_mae: {
        nome: "maria", 
        telefone: '18 99999999'
    }, 
    boletim: [
        {materia: "portugues", nota: 10, faltas: 6},
        {materia: "matematica", nota: 8, faltas: 3}
    ]
}
console.log(aluno); 
console.log(aluno.dados_mae.telefone); 
console.log(aluno.notas[1].disciplina); 