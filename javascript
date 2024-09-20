const express = require('express');
const cors = require('cors');

const app = express();

// Permitir requisições de cartromform.vercel.app
app.use(cors({
    origin: 'https://cartromform.vercel.app',
}));

// Outros middlewares e rotas
app.use(express.json());

app.post('/api/responses', (req, res) => {
    // Lógica para armazenar a resposta
    console.log(req.body); // Apenas para verificar os dados recebidos
    res.status(200).json({ message: 'Resposta recebida com sucesso!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
