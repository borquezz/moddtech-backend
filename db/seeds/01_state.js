/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("city").del();
  await knex("state").del();
  await knex("state").insert([
    { code: "Sonora", description: "Located in the north" },
    { code: "Jalisco", description: "The one with tequila" },
    { code: "Arizona", description: "South of USA" },
  ]);
};
