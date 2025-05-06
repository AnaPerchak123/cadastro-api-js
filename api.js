// api.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let cadastros = [];

app.get("/cadastro", (req, res) => {
    res.json(cadastros);
});

app.post("/cadastro", (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || !idade) {
        return res.status(400).json({ erro: "Nome e idade são obrigatórios" });
    }

    cadastros.push({ nome, idade });
    res.status(201).json({ mensagem: "Cadastro adicionado com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
