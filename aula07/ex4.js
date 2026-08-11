const express = require("express");
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 100 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

app.post("/produtos", (req, res) => {
    const { nome, preco } = req.body;

    const erros = [];

    if (!nome) {
        erros.push("O nome é obrigatório");
    }

    if (preco === undefined || isNaN(preco)) {
        erros.push("O preço deve ser um número");
    } else if (preco < 0) {
        erros.push("O preço não pode ser negativo");
    }

    if (erros.length > 0) {
        return res.status(400).json({ erros });
    }

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

app.put("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const indice = produtos.findIndex(p => p.id == req.params.id);

    if (indice == -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produtos.splice(indice, 1);

    res.json({ mensagem: "Produto removido" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});