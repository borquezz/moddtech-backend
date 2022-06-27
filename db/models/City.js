const { Model } = require("objection");

class City extends Model {
  static get tableName() {
    return "city";
  }

  static get relationMappings() {
    const State = require("./State");
    // Foreign keys in this model
    return {
      state: {
        relation: Model.BelongsToOneRelation,
        modelClass: State,
        join: {
          from: "city.idState",
          to: "state.id",
        },
      },
    };
  }
}

module.exports = City;
