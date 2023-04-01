(async () => {
    const database = require("./db.js");
    const Clients = require("./clients");
    await database.sync(); //verifica os modelos do projeto e tabelas no banco, cria a tabela caso nao exista
  
    /*//adicionar itens
    const novoClient = await Clients.create({
      nome: "Yandiel",
      sobrenome: "Gonzalo",
      idade: 27,
    }); */
  
    //encotrar
    const clientsPK = await Clients.findByPk(2); // Encontra o cliente com id = 2
    clientsPK.nome = 'Raul'; // Atualiza o nome do cliente
    await clientsPK.save(); // Salva as alterações no banco de dados
  
    //excluir
    await Clients.destroy({
        where: {
          nome: "Yandiel"
        }
      });
      
      
  })();