/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("city", function (table) {
    table.increments("id").unique().primary();
    table.string("code", 20).notNullable();
    table.string("description", 50);
    table.integer("idState").notNullable().references("id").inTable("state");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("city");
};
