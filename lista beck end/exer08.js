const readline = require('readline-sync');

// 1. Lê o tamanho do tabuleiro (ex: se o usuário digitar 8, será um tabuleiro 8x8)
const tamanho = parseInt(readline.question("Digite o tamanho do tabuleiro: "), 10);

// Verifica se o usuário digitou um número válido
if (isNaN(tamanho) || tamanho < 1) {
  console.log("Por favor, insira um número válido maior que 0.");
} else {
  let tabuleiro = "";

  // 2. O primeiro laço controla as LINHAS
  for (let linha = 0; linha < tamanho; linha++) {
    
    // 3. O segundo laço controla as COLUNAS de cada linha
    for (let coluna = 0; coluna < tamanho; coluna++) {
      // Se a soma dos índices for par, adiciona espaço. Se for ímpar, adiciona #
      if ((linha + coluna) % 2 === 0) {
        tabuleiro += " ";
      } else {
        tabuleiro += "#";
      }
    }
    
    // 4. Ao final de cada linha, adiciona uma quebra de linha (\n)
    tabuleiro += "\n";
  }

  // 5. Exibe o tabuleiro completo no console
  console.log(tabuleiro);
}