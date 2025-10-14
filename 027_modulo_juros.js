const juros_simples = (capital,taxa,tempo) => {
    const juros = capital * (taxa / 100) * tempo; 
    const objRetorno = {
        capital: capital,
        taxa: taxa,
        tempo: tempo,
        juros: juros, 
        total: capital + juros,
    }
    return objRetorno; 
}

const juros_composto = (capital,taxa,tempo) => {
    const montante = capital * ((1 + taxa / 100) ** tempo); 
    const objRetorno = {
        capital: capital,
        taxa: taxa,
        tempo: tempo,
        juros: montante - capital, 
        total: montante ,
    }
    return objRetorno; 
}

Module.exports = { juros_simples, juros_composto};