const catalogo = [
  { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
  { id: 2, nome: "Mouse Gamer", preco: 150.00 },
  { id: 3, nome: "Monitor 24'", preco: 850.00 },
  { id: 4, nome: "Headset USB", preco: 200.00 },
  { id: 5, nome: "Mousepad Grande", preco: 80.00 }
];

// Uso do método .filter() para filtrar preços maiores que 100
const produtosCaros = catalogo.filter(produto => produto.preco > 100);

// Exibindo a nova lista filtrada
console.log("Produtos com preço acima de 100:");
console.log(produtosCaros);