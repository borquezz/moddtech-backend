/* This file links the knex structure to objection */
require("dotenv/config");
const environment = process.env.NODE_ENV;

const { Model } = require("objection");

const knex = require("knex");
const config = require("./knexfile")[environment];
const db = knex(config);

function dbSetup() {
  Model.knex(db);
}

module.exports = dbSetup;
