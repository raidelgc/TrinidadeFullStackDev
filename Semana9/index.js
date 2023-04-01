const express = require('express');
const connection = require('./src/database')
const Place = require('./src/models/place');
const app = express();
app.use(express.json());

connection.authenticate()
connection.sync({alter: true})

app.post('/places', async (req, res) => {
  try {
    const { name, telefone, openingHours, description, latitude, longitude } = req.body;
    const place = await Place.create({
      name,
      telefone,
      openingHours,
      description,
      latitude,
      longitude
    });
    res.status(201).json(place);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir local no banco de dados' });
  }
});

app.get('/places', async (req, res) => {
    try {
      const places = await Place.findAll();
      return res.json(places);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar locais no banco de dados' });
    }
  });

  app.delete('/places/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const place = await Place.findOne({ where: { id } });
      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }
      await place.destroy();
      return res.status(200).json({ message: "Place deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir local do banco de dados' });
    }
  });
  

app.put('/places/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, telefone, openingHours, description, latitude, longitude } = req.body;
    const place = await Place.findByPk(id);

    if (!place) {
      return res.status(404).json({ error: 'Local não encontrado' });
    }

    const updatedPlace = await place.update({
      name,
      telefone,
      openingHours,
      description,
      latitude,
      longitude,
    });

    res.json(updatedPlace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar local' });
  }
});

  app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333');
  });
  