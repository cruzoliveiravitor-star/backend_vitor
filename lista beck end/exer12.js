// 1. Definição da função principal que aceita o callback (operacao)
function calcular(a, b, operacao) {
  return operacao(a, b); // Executa a função que foi passada por parâmetro
}

// 2. Testando a calculadora com diferentes Arrow Functions passadas diretamente

// Teste de Soma
const resultadoSoma = calcular(10, 5, (x, y) => x + y);
console.log("Soma (10 + 5):", resultadoSoma); // Retorna 15

// Teste de Subtração
const resultadoSubtracao = calcular(10, 5, (x, y) => x - y);
console.log("Subtração (10 - 5):", resultadoSubtracao); // Retorna 5

// Teste de Multiplicação
const resultadoMultiplicacao = calcular(10, 5, (x, y) => x * y);
console.log("Multiplicação (10 * 5):", resultadoMultiplicacao); // Retorna 50

// Teste de Divisão (Bônus!)
const resultadoDivisao = calcular(10, 5, (x, y) => x / y);
console.log("Divisão (10 / 5):", resultadoDivisao); // Retorna 2