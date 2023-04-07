const Place = require('../../models/place');

async function createPlaces(req, res) {
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
}

module.exports = createPlaces;
