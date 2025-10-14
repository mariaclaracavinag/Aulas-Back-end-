let funcionario = {
    nome: 'reinaldo', 
    salario: 5000,
    idade: 40,
    setor: 'RH' 
}

//atribuindo a variveis os valores das propiedades do objeto
//let salario = funcionario.salario * 1.1; 
//let nome = funcionario.salario; 
//let nome = funcionario.nome; 
//let nome = funcionario.idade; 
//let nome = funcionario.setor; 

// Desestruturando o objetoooooooooooooo
//declarando e atribuindo os valores automaticamente do objeto 
let { salario,nome,idade, setor } = funcionario; 
console.log(salario);
console.log(nome);
console.log(idade );
