function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Testando a função:
console.log(min(5, 10)); // Retorna 5
console.log(min(20, 3));  // Retorna 3
console.log(min(7, 7));   // Retorna 7 (se forem iguais, tanto faz qual retornar)