import fp from 'fastify-plugin';
import { Sequelize } from 'sequelize';

/** Register database connection. */
export const registerDb = fp(async fastify => {
  const sequelize = new Sequelize(fastify.config.SUPABASE_URL, {
    host: 'supabase_host',
    dialect: 'postgres',
  });

  fastify.decorate('sequelize', sequelize);

  try {
    await sequelize.authenticate();
    fastify.log.info('Database connected successfully.');
  } catch (error) {
    fastify.log.error('Unable to connect to the database:', error);
    process.exit(1);
  }
});
