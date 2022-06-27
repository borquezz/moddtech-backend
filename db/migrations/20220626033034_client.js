/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("client", function (table) {
    table.increments("id").unique().primary();
    table.string("name", 50).notNullable();
    table.string("code", 20).notNullable();
    table.integer("idCity").notNullable().references("id").inTable("city");
    table.integer("idState").notNullable().references("id").inTable("state");
    table.boolean("isActive").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("client");
};
