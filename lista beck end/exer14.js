function reverter(array) {
  let novoArray = [];
  
  // O laço começa no último elemento e vai até o índice 0
  for (let i = array.length - 1; i >= 0; i--) {
    novoArray.push(array[i]); // Adiciona o elemento atual ao novo array
  }
  
  return novoArray;
}

// Testando a função:
const original = [1, 2, 3, 4, 5];
const invertido = reverter(original);

console.log("Original:", original);   // Mantém o original intacto: [1, 2, 3, 4, 5]
console.log("Invertido:", invertido); // Retorna o novo array: [5, 4, 3, 2, 1]