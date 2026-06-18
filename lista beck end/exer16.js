// 1. Criação do array original de alunos
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.2 },
  { nome: "Daniela", nota: 5.5 },
  { nome: "Eduardo", nota: 9.0 }
];

// 2. Uso do .map() para adicionar a propriedade 'situacao'
const boletim = alunos.map(aluno => {
  return {
    ...aluno, // Copia as propriedades existentes (nome e nota)
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado" // Adiciona a nova propriedade
  };
});

console.log("Boletim da Turma:");
console.log(boletim);

// 3. Uso do .filter() para pegar apenas os aprovados e contar o total
const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

// 4. Cálculo da média geral da turma
let somaNotas = 0;
alunos.forEach(aluno => {
  somaNotas += aluno.nota;
});
const mediaGeral = somaNotas / alunos.length;

// 5. Exibição dos resultados finais
console.log("\n--- Resumo Final ---");
console.log(`Quantidade de alunos aprovados: ${quantidadeAprovados}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);