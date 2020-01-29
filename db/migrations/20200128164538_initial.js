
exports.up = knex => {
  return knex.schema
    .createTable('teams', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('venue');
      table.string('abbreviation');
      table.timestamps(true, true);
    })
    .createTable('players', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('country');
      table.integer('points').unsigned();
      table.foreign('team_id').references('teams.id');
      table.timestamps(true, true);
    })
};

exports.down = knex => {
  return knex.schema
  .dropTable('teams')
  .dropTable('players')
};
