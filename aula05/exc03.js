app.get("/status", (req, res) => {

    res.status(200).json({
        online: true,
        mensagem: "Servidor funcionando normalmente"
    });
});