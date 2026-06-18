const readline = require('readline-sync');

// 1. Lê a entrada do usuário e converte para um número inteiro
const numeroInicial = parseInt(readline.question("Digite um numero para iniciar a contagem regressiva: "), 10);

// 2. Verifica se o usuário digitou um número válido
if (isNaN(numeroInicial) || numeroInicial < 1) {
  console.log("Por favor, insira um número inteiro maior ou igual a 1.");
} else {
  // 3. Faz o laço de contagem regressiva
  for (let i = numeroInicial; i >= 1; i--) {
    console.log(i);
  }
  
  // 4. Exibe a mensagem final
  console.log("Fim!");
}