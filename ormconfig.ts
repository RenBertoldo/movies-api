module.exports = [
  {
    name: 'default',
    type: process.env.DB_TYPE || 'mongodb',
    host: process.env.DB_HOST || 'mongodb',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'test_ilia',
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
