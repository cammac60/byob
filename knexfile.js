module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/nhlteams',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
