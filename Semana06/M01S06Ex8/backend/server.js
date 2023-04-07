// Controlador de usuários

const usuarios = [
  { id: 1, nome: "João", idade: 25, cargo: "pleno", senha: "12345678" },
  { id: 2, nome: "Maria", idade: 18, cargo: "junior", senha: "87654321" },
  { id: 3, nome: "Pedro", idade: 30, cargo: "senior", senha: "qwertyui" },
];

function enviarNovoUsuario(req, res) {
  const { nome, idade, cargo, senha } = req.body;

  if (!nome || !idade || !cargo || !senha) {
    return res.status(406).json({ mensagem: "Está faltando dados para concluir a operação" });
  }

  if (idade < 21) {
    return res.status(400).json({ mensagem: "Usuário não possui idade suficiente" });
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    idade,
    cargo,
    senha,
  };

  usuarios.push(novoUsuario);

  return res.status(200).json({ mensagem: "Criado com sucesso" });
}

function deletarUsuario(req, res) {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(406).json({ mensagem: "Está faltando dados para concluir a operação" });
  }

  const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id);

  if (indexUsuario < 0) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  usuarios.splice(indexUsuario, 1);

  return res.status(200).json({ mensagem: "Deletado com sucesso" });
}

module.exports = { enviarNovoUsuario, deletarUsuario };
