const { Model } = require("objection");

class Client extends Model {
  static get tableName() {
    return "client";
  }

  static get relationMappings() {
    const State = require("./State");
    const City = require("./City");
    // Foreign keys in this model
    return {
      state: {
        relation: Model.BelongsToOneRelation,
        modelClass: State,
        join: {
          from: "client.idState",
          to: "state.id",
        },
      },
      city: {
        relation: Model.BelongsToOneRelation,
        modelClass: City,
        join: {
          from: "client.idCity",
          to: "city.id",
        },
      },
    };
  }
}

module.exports = Client;
