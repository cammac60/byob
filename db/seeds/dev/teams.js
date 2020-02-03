const nhlTeams = require('../../../nhlTeams');

const createTeam = async (knex, team) => {
  let { name, venue, abbreviation, roster } = team;
  const teamId = await knex('teams').insert({
    name,
    venue,
    abbreviation
  }, 'id');
  let playerPromises = roster.map(player => {
    return createPlayer(knex, {
      name: player.name,
      country: player.country,
      points: player.points,
      team_id: teamId[0]
    })
  });
  return Promise.all(playerPromises);
};

const createPlayer = (knex, player) => {
  return knex('players').insert(player);
};


exports.seed = async knex => {
  try {
    await knex('teams').del()
    await knex('players').del()

    let teamPromises = nhlTeams.map(team => {
      return createTeam(knex, team);
    });

    return Promise.all(teamPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
