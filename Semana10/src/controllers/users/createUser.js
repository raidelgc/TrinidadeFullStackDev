const User = require('../../models/users');

async function createUser (request, response) {
    try {
        const newUser = {
            name: request.body.name,
            cpf: request.body.cpf,
            password: request.body.password
        }
        const user = await User.create(newUser)
        response.status(201).json(user)
    } catch (error) {
      response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
  }
  
}

module.exports = createUser
  