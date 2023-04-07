const Place = require('../../models/place');

async function updatePlaces (req, res) {
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
}

module.exports = updatePlaces