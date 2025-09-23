//função nomeada
function clientes (nome, sobrenome) {
    console.log(`Seja bem vindo ${nome} ${sobrenome}`);
}
clientes ("maria clara","cavina");
clientes ("larissa","siqueira");
clientes ("douglas","camata");
//função anonima 
const clientes = function (nome, sobrenome) {
    console.log(`Seja bem vindo ${nome} ${sobrenome}`);
}
clientes ("maria clara","cavina");
clientes ("larissa","siqueira");
clientes ("douglas","camata");
//arrow 
const clientes = (nome, sobrenome) => {
    console.log(`Seja bem vindo ${nome} ${sobrenome}`);
}
clientes ("maria clara","cavina");
clientes ("larissa","siqueira");
clientes ("douglas","camata");