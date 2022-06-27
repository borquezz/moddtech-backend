const State = require("../../db/models/State");

class StateController {
  async addState(req, res) {
    try {
      // Get variables from req body
      const { code, description } = req.body;
      // Input validation
      if (!code || !description)
        return res.status(400).json("Missing input fields");

      // Add new row to state table
      const newState = await State.query().insert({
        code,
        description,
      });

      return res.status(201).json(newState);
    } catch (err) {
      console.error(err);
      return res.status(201).json(err);
    }
  }

  async getStates(req, res) {
    try {
      // Get all states and return resulting array
      const states = await State.query();

      return res.status(200).json(states);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = new StateController();
