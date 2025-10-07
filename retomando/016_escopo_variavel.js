let variavelGlobal = "sou global"

function minhafuncao(){
    let variavellocal = "Sou local";
    console.log (variavelGlobal); //acessa a variavel global 
    console.log (variavellocal); //acessa a variavel local 
}

minhafuncao(); 
console.log(variavelGlobal) // aq acessa
console.log(variavellocal) // aq da red 