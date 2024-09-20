const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let respostas = {};

app.post('/respostas', (req, res) => {
  respostas = req.body;
  res.status(200).json({ message: 'Respostas recebidas com sucesso' });
});

app.get('/respostas', (req, res) => {
  res.status(200).json(respostas);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

