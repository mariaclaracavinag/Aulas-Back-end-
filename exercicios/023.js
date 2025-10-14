// Função que converte Celsius para Fahrenheit
const celsius_para_fahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

// Função que converte quilômetros para milhas
const quilometros_para_milhas = (quilometros) => {
    return quilometros * 0.621371;
}
module.exports = {
    celsius_para_fahrenheit, quilometros_para_milhas};
