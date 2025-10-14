// Importando o módulo 
const conversoes = require('./023_conversoes');

//Celsius para Fahrenheit
const tempF = conversoes.celsius_para_fahrenheit(25);
console.log(`25°C equivalem a ${tempF}°F`);

//quilômetros para milhas
const milhas = conversoes.quilometros_para_milhas(10);
console.log(`10 km equivalem a ${milhas} milhas`);
