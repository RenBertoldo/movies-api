module.exports = [
  {
    name: 'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test_ilia',
    useUnifiedTopology: true,
    entities: ['./src/entities/**/*.ts'],
    migrations: ['./src/database/migrations/**/*.ts'],
    subscribers: ['./src/subscriber/**/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
      entitiesDir: './src/entities',
    },
  },
];
