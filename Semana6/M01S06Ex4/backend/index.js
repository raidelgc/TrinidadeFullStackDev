const express = require('express');
const app = express();

app.get('/api/:nome', function(req, res) {
  const nome = req.params.nome;
  console.log(`Rota de API criada pelo(a): ${nome}`);
  res.send(`Olá, ${nome}!`);
});

app.listen(3000, function() {
  console.log('O servidor está rodando na porta 3000!');
});
