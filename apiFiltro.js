const express = require("express");
const app = express();
const PORT = 3001; // Porta diferente para não conflitar com a outra

app.use(express.json());

let cadastros = [];

// Cadastrar nova pessoa
app.post("/cadastro", (req, res) => {
  const { nome, idade } = req.body;
  if (!nome || !idade) {
    return res.status(400).json({ erro: "Nome e idade são obrigatórios" });
  }
  cadastros.push({ nome, idade });
  res.status(201).json({ mensagem: "Cadastro adicionado com sucesso!" });
});

// Listar todos
app.get("/cadastro", (req, res) => {
  res.json(cadastros);
});

// Consulta com dois filtros: nome e idade
app.get("/cadastro/filtro", (req, res) => {
  const { nome, idade } = req.query;

  const resultado = cadastros.filter(c =>
    (!nome || c.nome.toLowerCase() === nome.toLowerCase()) &&
    (!idade || c.idade == idade)
  );

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`API com filtro rodando em http://localhost:${PORT}`);
});
