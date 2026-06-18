// 1. Função que cria o array contendo o intervalo de números
function range(inicio, fim) {
  let resultado = [];
  
  for (let i = inicio; i <= fim; i++) {
    resultado.push(i); // Adiciona o número atual ao final do array
  }
  
  return resultado;
}

// 2. Função que recebe um array e soma todos os seus elementos
function soma(array) {
  let total = 0;
  
  for (let i = 0; i < array.length; i++) {
    total += array[i]; // Adiciona o elemento atual do array ao total
  }
  
  return total;
}

// 3. Testando a combinação das duas funções
const meuRange = range(1, 10);
console.log("Array gerado:", meuRange); // Deve exibir: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const resultadoFinal = soma(meuRange);
console.log("Soma do range (1 a 10):", resultadoFinal); // Deve exibir: 55