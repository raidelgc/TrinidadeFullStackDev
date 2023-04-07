const express = require('express');
const router = express.Router();

// Rota para criar um novo usuário
router.post('/', (req, res) => {
  // Adicionar código para criar um novo usuário no banco de dados
  res.send('Usuário criado com sucesso!');
});

// Rota para deletar um usuário
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  // Adicionar código para deletar o usuário do banco de dados
  res.send(`Usuário ${userId} deletado com sucesso!`);
});

module.exports = router;
