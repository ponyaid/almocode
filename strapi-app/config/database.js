module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'almocode_db'),
      user: env('DATABASE_USERNAME', 'almocode'),
      password: env('DATABASE_PASSWORD', 'almocode'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
