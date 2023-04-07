const Place = require('../../models/place');

async function deletePlaces (req, res) {
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
}

module.exports = deletePlaces