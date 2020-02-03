# BYOB API

### Setup 

1. Clone this repo and run `npm install`
2. If you do not have nodemon installed, install it in your root directory using `npm i -g nodemon`
3. Cd into the byob directory and run `nodemon server.js`.

----------

### Data

  The data contains a table for NHL teams as well as 2 players from each team. The teams objects are laid out as followed: 
  
```
  {
    id: 19,
    name: "Colorado Avalanche",
    venue: "Pepsi Center",
    abbreviation: "COL",
    created_at: "2020-02-03T06:53:20.772Z",
    updated_at: "2020-02-03T06:53:20.772Z"
  }
```

And the players objects apear as follows: 

```
  {
    id: 41,
    name: "Nathan MacKinnon",
    country: "CAN",
    points: 72,
    team_id: 19,
    created_at: "2020-02-03T06:53:20.906Z",
    updated_at: "2020-02-03T06:53:20.906Z"
  }
```
----------

### Endpoints
| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all players | `https://byob-nhl-api.herokuapp.com/api/v1/players` | GET | N/A | `[{}, {}, {}...]` |
| Get all teams | `https://byob-nhl-api.herokuapp.com/api/v1/teams` | GET | N/A | `[{}, {}, {}...]` |
| Get a specific player | `https://byob-nhl-api.herokuapp.com/api/v1/players/:id` | GET | N/A | `{id: 1, ...}` |
| Get a specific team | `https://byob-nhl-api.herokuapp.com/api/v1/teamss/:id` | GET | N/A | `{id: 1, ...}` |
| Get all players on a specific team | `https://byob-nhl-api.herokuapp.com/api/v1/teamss/:id/roster` | GET | N/A | `[{}, {}, ...]` |
| Get the team that a player is currently assigned to | `https://byob-nhl-api.herokuapp.com/api/v1/players/:id/team` | GET | N/A | `{id: 1, ...}` |
| Add a new player | `https://byob-nhl-api.herokuapp.com/api/v1/players` | POST | `{ name: <String>, country: <String>, points: <Int>, team_id: <Int> }` | The added player: `{id: 1, ...}` |
| Add a new team | `https://byob-nhl-api.herokuapp.com/api/v1/teams` | POST | `{ name: <String>, venue: <String>, abbreviation: <String> }` | The added team: `{id: 1, ...}` |
| Delete a player | `https://byob-nhl-api.herokuapp.com/api/v1/players/:id` | DELETE | N/A | The new array of players: `[{}, {}, ...]` |
| Delete a team | `https://byob-nhl-api.herokuapp.com/api/v1/teams/:id` | DELETE | N/A | The new array of teams: `[{}, {}, ...]` |













