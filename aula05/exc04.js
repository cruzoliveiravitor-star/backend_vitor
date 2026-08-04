app.get("/produtos/caros", (req, res) => {

    const produtos = [
        {
            id: 1,
            nome: "Mouse Gamer",
            preco: 100.90
        },
        {
            id: 2,
            nome: "Teclado Mecânico",
            preco: 249.90
        },
        {
            id: 3,
            nome: "Monitor 24 Polegadas",
            preco: 999.90
        },
        {
            id: 4,
            nome: "Fone Bluetooth",
            preco: 150.90
        }
    ];
    const produtosCaros = produtos.filter(produto => {
        return produto.preco > 100;
    });
    res.json(produtosCaros);
});