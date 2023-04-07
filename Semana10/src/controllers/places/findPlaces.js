const Place = require('../../models/place');

async function findPlaces (req, res) {
    try {
      const places  = await Place.findAll();
      return res.json(places);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar locais no banco de dados' });
    }
  
}
  

module.exports = findPlaces