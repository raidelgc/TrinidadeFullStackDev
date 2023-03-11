// Arquivo de rotas

const express = require("express");
const router = express.Router();
const controlador = require("./controlador");

router.post("/usuarios", controlador.enviarNovoUsuario);
router.delete("/usuarios/:id", controlador.deletarUsuario);

module.exports = router;
