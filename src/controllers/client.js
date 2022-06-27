const Client = require("../../db/models/Client");

class ClientController {
  async addClient(req, res) {
    try {
      // Get variables from req body
      const { code, name, idCity, idState } = req.body;
      // Input validation
      if (!code || !name || !idCity || !idState)
        return res.status(400).json("Missing input fields");

      // Add new row to client table
      const newClient = await Client.query().insert({
        code,
        name,
        idCity,
        idState,
      });

      // Return the newly created client
      return res.status(201).json(newClient);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }

  async getClients(req, res) {
    try {
      // Get all the active clients and return the resulting array
      const clients = await Client.query()
        .where("isActive", true)
        .withGraphFetched("state")
        .withGraphFetched("city");

      return res.status(200).json(clients);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }

  async deleteClient(req, res) {
    try {
      // Get client id from req body
      const { id } = req.body;
      if (!id) return res.status(400).json("Missing input fields");

      const deletedClient = await Client.query().updateAndFetchById(id, {
        isActive: false,
      });

      return res.status(200).json(deletedClient);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }

  async updateClient(req, res) {
    try {
      // Get variables from req body
      const { id, name, code, idState, idCity } = req.body;
      if (!id || !name || !code || !idState || !idCity)
        return res.status(400).json("Missing input fields");
      // Update the client
      const updatedClient = await Client.query().updateAndFetchById(id, {
        name,
        code,
        idState,
        idCity,
      });
      return res.status(200).json(updatedClient);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = new ClientController();
