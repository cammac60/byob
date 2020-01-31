const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);


app.get('/api/v1/teams', async (req, res) => {
  try {
    const teams = await database('teams').select();
    res.status(200).json(teams);
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.get('/api/v1/teams/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const teams = await database('teams').select();
    const selectedTeam = teams.filter(team => team.id === parseInt(id));
    if (selectedTeam.length) {
      res.status(200).json(...selectedTeam);
    } else {
      res.status(404).send(`Error: No team could be found with an id of ${id}.`);
    }
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.get('/api/v1/teams/:id/roster', async (req, res) => {
  const { id } = req.params;
  try {
    const players = await database('players').select();
    const selectedPlayers = players.filter(player => player.team_id === parseInt(id));
    if (selectedPlayers.length) {
      res.status(200).json(selectedPlayers);
    } else {
      res.status(404).send(`Error: No players could be found with on a team with an id of ${id}.`);
    }
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.get('/api/v1/players', async (req, res) => {
  try {
    const players = await database('players').select();
    res.status(200).json(players);
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.get('/api/v1/players/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const players = await database('players').select();
    const selectedPlayer = players.filter(player => player.id === parseInt(id));
    if (selectedPlayer.length) {
      res.status(200).json(...selectedPlayer);
    } else {
      res.status(404).send(`Error: No player could be found with an id of ${id}.`);
    }
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.get('/api/v1/players/:id/team', async (req, res) => {
  const { id } = req.params;
  try {
    const teams = await database('teams').select();
    const players = await database('players').select();
    const selectedPlayerId = players.find(player => player.id === parseInt(id)).team_id;
    const selectedTeam = teams.filter(team => team.id === selectedPlayerId);
    if (selectedTeam.length) {
      res.status(200).json(...selectedTeam);
    } else {
        res.status(404).send(`Error: No team could be found with an id of ${id}.`);
    }
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.post('/api/v1/teams', async (req, res) => {
  const team = req.body;
  for (let requiredParameter of ['name', 'venue', 'abbreviation']) {
    if (!team[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, venue: <String>, abbreviation: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }
  try {
    const id = await database('teams').insert(team, 'id');
    res.status(201).json({ team, id })
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post('/api/v1/players', async (req, res) => {
  const player = req.body;
  for (let requiredParameter of ['name', 'country', 'points', 'team_id']) {
    if (!player[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, country: <String>, points: <Int>, team_id: <Int> }. You're missing a "${requiredParameter}" property.` });
    }
  }
  try {
    const id = await database('players').insert(player, 'id');
    res.status(201).json({ player, id })
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.delete('/api/v1/players/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const players = await database('players').select();
    const removedPlayer = players.find(player => player.id === parseInt(id));
    const updatedPlayers = players.filter(player => player.id !== parseInt(id));
    if (!removedPlayer) {
      return res
        .status(404)
        .send({error: `No player was found with an id of ${id}.`});
    } else {
      await database('players').where('id', id).del();
      res.status(200).json(updatedPlayers);
    }
  } catch(error) {
    res.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on http://localhost:${app.get('port')}.`);
});
