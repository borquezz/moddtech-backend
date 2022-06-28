/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("table_name").del();
  await knex("city").insert([
    { code: "Hermosillo", description: "The city of the sun", idState: 1 },
    { code: "Guaymas", description: "It has an amazing beach", idState: 1 },
    { code: "Nogales", description: "Close to the border", idState: 1 },
    { code: "Guadalajara", description: "The great capital", idState: 2 },
    { code: "Zapopan", description: "Good place to live", idState: 2 },
    {
      code: "Puerto Vallarta",
      description: "The one with the beach",
      idState: 2,
    },
    { code: "Phoenix", description: "The capital", idState: 3 },
    { code: "Tucson", description: "Close to the border", idState: 3 },
    { code: "Flagstaff", description: "The one with snow", idState: 3 },
  ]);
};
