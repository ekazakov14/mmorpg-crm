require('dotenv').config();

module.exports = [
  {
    name: "seed",
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    migrations: ["dist/db/seeds/index.js"],
    cli: {
      "migrationsDir": "src/db/seeds"
    }
  }
]