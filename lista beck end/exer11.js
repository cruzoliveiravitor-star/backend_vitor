const readline = require('readline-sync');

// 1. Criação da função que valida a idade
function podeVotar(idade) {
  return idade >= 16;
}

// 2. Leitura da idade do usuário
const idadeUsuario = parseInt(readline.question("Digite a sua idade: "), 10);

// 3. Verificação se a entrada é um número válido
if (isNaN(idadeUsuario) || idadeUsuario < 0) {
  console.log("Por favor, insira uma idade válida.");
} else {
  // 4. Uso da função e exibição da mensagem apropriada
  if (podeVotar(idadeUsuario)) {
    console.log("Você já tem idade suficiente para votar!");
  } else {
    console.log("Você ainda não pode votar.");
  }
}