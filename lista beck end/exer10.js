function contarLetra(texto, letra) {
  let contador = 0;

  // O laço percorre o texto do primeiro caractere (índice 0) até o último
  for (let i = 0; i < texto.length; i++) {
    // Compara a letra atual do texto com a letra que estamos procurando
    if (texto[i] === letra) {
      contador++; // Se for igual, aumenta o contador em 1
    }
  }

  // Retorna o total de vezes que a letra foi encontrada
  return contador;
}

// Exemplos de uso / Testes:
console.log(contarLetra("banana", "a"));       // Retorna 3
console.log(contarLetra("JavaScript", "J"));   // Retorna 1
console.log(contarLetra("Computador", "x"));   // Retorna 0 (não encontrou)