const catalogo = [
  { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
  { id: 2, nome: "Mouse Gamer", preco: 150.00 },
  { id: 3, nome: "Monitor 24'", preco: 850.00 },
  { id: 4, nome: "Headset USB", preco: 200.00 },
  { id: 5, nome: "Mousepad Grande", preco: 80.00 }
];

// Uso do .forEach() para exibir cada produto com uma formatação personalizada
catalogo.forEach(produto => {
  console.log(`[ID ${produto.id}] - ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
});