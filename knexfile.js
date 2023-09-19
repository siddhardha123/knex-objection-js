// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const dotenv = require('dotenv')
const {knexSnakeCaseMappers} = require('objection')
dotenv.config();

module.exports = {
  development : {
    client: 'postgresql',
    connection: {
      database: 'testdb',
      user:     'postgres',
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    ...knexSnakeCaseMappers,
    seeds : {
       directory : './seed'
          
    }
  },

};
