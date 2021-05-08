require('dotenv').config({ path: '../.env'});

module.exports = [
  {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: [__dirname + '/dist/src/**/*.entity.{ts,js}'],
    migrations: ['dist/src/db/migrations/*.{ts,js}'],
    cli: {
      'migrationsDir': 'src/db/migrations',
    },
  },
  {
    name: 'seed',
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: [__dirname + '/dist/src/**/*.entity.{ts,js}'],
    migrations: ['dist/src/db/seeds/index.js'],
    cli: {
      'migrationsDir': 'src/db/seeds',
    },
  }
]