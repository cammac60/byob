const environment = process.env.NODE_ENV || 'development'; // Sets our environment to production or development
const configuration = require('./knexfile')[environment]; // Connects our knexfile to our environment so we know where to look for seeds and migrations
const database = require('knex')(configuration); // Connects our database to knex
const cors = require('cors'); // imports cors
const express = require('express'); // imports express
const app = express(); // tells our app to use express

app.use(express.json()); // sets our default response type to json
app.use(cors()); // Allows use of cors with no restrictions on origins

app.set('port', process.env.PORT || 3000); // Tells out app to check for a production port, else it defaults to 3000


app.get('/api/v1/teams', async (req, res) => { // Sets up a get request to the specified url
  try {
    const teams = await database('teams').select(); // Fetches our teams database
    res.status(200).json(teams); // returns the database with the successful status and the array of teams
  } catch(error) {
      res.status(500).json({ error }); // catches any database errors and returns the error object with the 500 status code
    }
});

app.get('/api/v1/teams/:id', async (req, res) => { // sets up a get request for a specific team
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const teams = await database('teams').select(); // returns the database of teams
    const selectedTeam = teams.filter(team => team.id === parseInt(id)); // filters the teams to match the team that the client specified
    if (selectedTeam.length) { // Checks to make sure a team was found
      res.status(200).json(...selectedTeam); // Returns the 200 status with the team objects
    } else {
      res.status(404).send(`Error: No team could be found with an id of ${id}.`); // Sends a 404 error with a message if the id provided does not match a team in the database.
    }
  } catch(error) {
      res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
    }
});

app.get('/api/v1/teams/:id/roster', async (req, res) => { // Sets up a get request to get all of the players on a specific team
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const players = await database('players').select(); // returns the database of players
    const selectedPlayers = players.filter(player => player.team_id === parseInt(id)); // Filters the player array to only include players who have the matching team_id property
    if (selectedPlayers.length) { // Check to make sure players where found with the provided id
      res.status(200).json(selectedPlayers); // Returns a response with the 200 status code and the array of players
    } else {
      res.status(404).send(`Error: No players could be found with on a team with an id of ${id}.`); // Returns a 404 error with a message if no players were found on the selected team
    }
  } catch(error) {
      res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
    }
});

app.get('/api/v1/players', async (req, res) => {
  // Sets up a get request to the specified url
  try {
    const players = await database('players').select(); // returns the database of players
    res.status(200).json(players); // Returns a response with a 200 status code and the array of players
  } catch(error) {
      res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
    }
});

app.get('/api/v1/players/:id', async (req, res) => {
  // Sets up a get request for a specified player
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const players = await database('players').select(); // returns the database of players
    const selectedPlayer = players.filter(player => player.id === parseInt(id)); // filters the players to only include the queried player
    if (selectedPlayer.length) { // Checks to see if a player was found
      res.status(200).json(...selectedPlayer); // Returns a response with a 200 status code and the selected player
    } else {
      res.status(404).send(`Error: No player could be found with an id of ${id}.`); // Returns a response with a 404 error and message if a player with a matching id could not be found
    }
  } catch(error) {
      res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
    }
});

app.get('/api/v1/players/:id/team', async (req, res) => { // sets up a get request to get the team that a specified player belongs to
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const teams = await database('teams').select(); // returns the database of teams
    const players = await database('players').select(); // returns the database of players
    const selectedPlayerId = players.find(player => player.id === parseInt(id)).team_id; // Find the player with the selected id and grabs their team_id property
    const selectedTeam = teams.filter(team => team.id === selectedPlayerId); // Filters the teams to only include the selected player's team
    if (selectedTeam.length) { // Checks to make sure a team was found
      res.status(200).json(...selectedTeam); // Returns a response with the 200 status and the selected team
    } else {
        res.status(404).send(`Error: No team could be found with an id of ${id}.`); // Returns a response with a 404 status and a message if a team couldn't be found
    }
  } catch(error) {
      res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
    }
});

app.post('/api/v1/teams', async (req, res) => {
  // Sets up a post method so clients can add a new team to the database
  const team = req.body; // grabs the body included in the client's request
  for (let requiredParameter of ['name', 'venue', 'abbreviation']) { // Checks to make sure all of the required parameters are included in the request body
    if (!team[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, venue: <String>, abbreviation: <String> }. You're missing a "${requiredParameter}" property.` }); // If a property is missing a response with a 422 status is returned with an error message indicating which field is missing
    }
  }
  try {
    const id = await database('teams').insert(team, 'id'); // Adds the new team to the database
    res.status(201).json({ team, id }) //
  } catch (error) {
    res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
  }
});

app.post('/api/v1/players', async (req, res) => {
  // Sets up a post method so clients can add a new player to the database
  const player = req.body; // grabs the body included in the client's request
  for (let requiredParameter of ['name', 'country', 'points', 'team_id']) { // Checks to make sure all of the required parameters are included in the request body
    if (!player[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, country: <String>, points: <Int>, team_id: <Int> }. You're missing a "${requiredParameter}" property.` }); // If a property is missing a response with a 422 status is returned with an error message indicating which field is missing
    }
  }
  try {
    const id = await database('players').insert(player, 'id'); // Adds the new player to the database;
    res.status(201).json({ player, id }) // Returns a response with the 201 status and the added player object with it's id
  } catch (error) {
    res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
  }
});

app.delete('/api/v1/players/:id', async (req, res) => {
  // Sets up a delete endpoint so that a client can delete a specified player
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const players = await database('players').select(); // returns the database of players
    const removedPlayer = players.find(player => player.id === parseInt(id)); // Find the specified player in the database data
    const updatedPlayers = players.filter(player => player.id !== parseInt(id)); // Creates a shallow copy of the database with the selected player removed
    if (!removedPlayer) { // Checks to see if a player matched the specified id
      return res
        .status(404)
        .send({error: `No player was found with an id of ${id}.`}); // Returns a response with a 404 error if the player was not found in the database
    } else {
      await database('players').where('id', id).del(); // Deletes the player from the database whose id matches the specified id
      res.status(200).json(updatedPlayers); // Returns a response with the 200 status and the updated array of players
    }
  } catch(error) {
    res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
  }
});

app.delete('/api/v1/teams/:id', async (req, res) => { // Sets up a delete endpoint so that a client can delete a specified team
  const { id } = req.params; // Destructures the client's request parameters to retrieve the id
  try {
    const teams = await database('teams').select(); // returns the database of teams
    const removedTeam = teams.find(team => team.id === parseInt(id)); // Find the specified team from the database data
    const updatedTeams = teams.filter(team => team.id !== parseInt(id)); // Creates a shallow copy of the database with the selected team removed
    if (!removedTeam) { // Checks to see if a team matched the specified id
      return res
        .status(404)
        .send({error: `No team was found with an id of ${id}.`}); // Returns a response with a 404 error if the team was not found in the database
    } else {
      await database('teams').where('id', id).del(); // Deletes the team from the database whose id matches the specified id
      res.status(200).json(updatedTeams); // Returns a response with the 200 status and the updated array of teams
    }
  } catch(error) {
    res.status(500).json({ error }); // Catches any errors in our async calls and returns the 500 status code and error object
  }
});

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on http://localhost:${app.get('port')}.`);
});
