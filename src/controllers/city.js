const City = require("../../db/models/City");

class CityController {
  async addCity(req, res) {
    try {
      // Get variables from req body
      const { code, description, idState } = req.body;
      // Input validation
      if (!code || !description || !idState)
        return res.status(400).json("Missing input fields");

      // Add new row to city table
      const newCity = await City.query().insert({
        code,
        description,
        idState: idState,
      });

      return res.status(201).json(newCity);
    } catch (err) {
      console.error(err);
      return res.status(201).json(err);
    }
  }

  async getCities(req, res) {
    try {
      // Get query params from request
      const idState = parseInt(req.query?.idState);

      // Execute query depending on idState and return resulting array
      const cities = idState
        ? await City.query().where("idState", idState)
        : await City.query();

      return res.status(200).json(cities);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = new CityController();
