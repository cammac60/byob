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

app.get('/api/v1/players', async (req, res) => {
  try {
    const players = await database('players').select();
    res.status(200).json(players);
  } catch(error) {
      res.status(500).json({ error });
    }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
