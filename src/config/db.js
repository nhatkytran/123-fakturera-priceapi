import { Sequelize } from 'sequelize';

/** Setup sequelize instance. */
export const setupSequelize = fastify => {
  return new Sequelize(fastify.config.SUPABASE_URL, {
    host: 'supabase_host',
    dialect: 'postgres',
  });
};
