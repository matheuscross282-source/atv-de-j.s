
const prompt = require('prompt-sync')();

let janeiro = parseInt(prompt("Informe suas vendas no mês de janeiro: "));
let fevereiro = parseInt(prompt("Informe suas vendas no mês de fevereiro: "));
let marco = parseInt(prompt("Informe suas vendas no mês de março: "));

let valortotal = janeiro + fevereiro + marco;

console.log("O valor total das vendas foi: " + valortotal);

if (valortotal >= 17000) {
    console.log("Parabéns, você bateu a meta!");
} else {
    console.log("Infelizmente, você não bateu a meta.");
}

