// Arquivo de rotas

const express = require("express");
const router = express.Router();
const controlador = require("./controlador");

function middlewareCargo(req, res, next) {
  const { cargo } = req.body;

  if (cargo !== "líder") {
    return res.status(400).json({ mensagem: "Usuário não possui cargo suficiente" });
  }

  next();
}

router.post("/usuarios", middlewareCargo, controlador.enviarNovoUsuario);
router.delete("/usuarios/:id", controlador.deletarUsuario);

module.exports = router;
