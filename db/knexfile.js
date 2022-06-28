const path = require("path");
require("dotenv").config({ path: "../.env" });
const { knexSnakeCaseMappers } = require("objection");

// Update with your config settings.
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      // change to your db user
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/seeds"),
    },
    ...knexSnakeCaseMappers({ underscoreBetweenUppercaseLetters: true }),
  },
};
