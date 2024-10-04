exports.up = function (knex) {
  return knex.schema.createTable("palettes", function (table) {
    table.increments("id");

    const NUM_COLORS = 5;

    for (let i = 0; i < NUM_COLORS; i++) {
      table.tinyint(`red${i + 1}`).unsigned();
      table.tinyint(`green${i + 1}`).unsigned();
      table.tinyint(`blue${i + 1}`).unsigned();
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("greetings");
};
