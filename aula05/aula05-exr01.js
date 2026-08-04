app.get("/sobre", (req, res) => {
    res.json({
        nome: "andre stein",
        disciplina: "Desenvolvimento de sistemas com Node.js",
        ano: 2026
    });
});