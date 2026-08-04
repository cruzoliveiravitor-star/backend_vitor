app.get("/produtos", (req, res) => {

    const produtos = [
        {
            id: 1,
            nome: "Mouse Gamer",
            preco: 100.00
        },
        {
            id: 2,
            nome: "Teclado Mecânico",
            preco: 249.99
        },
        {
            id: 3,
            nome: "Monitor 24 Polegadas",
            preco: 899.90
        },
        {
            id: 4,
            nome: "Fone Bluetoth",
            preco: 1.99
        }
    ];
    res.json(produtos);
});