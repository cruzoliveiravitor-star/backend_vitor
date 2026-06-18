// 1. Criação do array com 5 produtos (objetos)
const catalogo = [
  { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
  { id: 2, nome: "Mouse Gamer", preco: 150.00 },
  { id: 3, nome: "Monitor 24'", preco: 850.00 },
  { id: 4, nome: "Headset USB", preco: 200.00 },
  { id: 5, nome: "Mousepad Grande", preco: 80.00 }
];

// 2. Uso do método .find() para buscar o produto com id igual a 3
const produtoEncontrado = catalogo.find(produto => produto.id === 3);

// 3. Exibindo o resultado no console
console.log("Produto encontrado:", produtoEncontrado);