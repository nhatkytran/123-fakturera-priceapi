import Fastify from 'fastify';

/** Handle uncaught exceptions. */
process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

import { loggerConfig } from './config/logger.js';
import { registerEnv } from './config/env.js';
import { registerCors } from './config/cors.js';
import { registerDb } from './config/db.js';
import { productRoutes } from './routes/productRoutes.js';

const fastify = Fastify({ logger: loggerConfig() });

await registerEnv(fastify);
await registerCors(fastify);
await registerDb(fastify);

fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Hello World' });
});

fastify.register(productRoutes, { prefix: '/api/v1/products' });

fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  reply.status(error.statusCode || 500).send({ status: 'error', message: error.message });
});

(async () => {
  try {
    fastify.sequelize.sync();
    await fastify.listen({ port: fastify.config.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();

/** Handle unhandled rejections. */
process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(err.name, err.message);
  if (fastify.server) {
    fastify.server.close(() => {
      if (fastify.sequelize) {
        fastify.sequelize.close();
      }
      process.exit(1);
    });
  }
});

/** Handle SIGTERM. */
process.on('SIGTERM', () => {
  console.error('SIGTERM RECEIVED. Shutting down gracefully.');
  if (fastify.server) {
    fastify.server.close(() => {
      console.error('Process terminated!');
      if (fastify.sequelize) {
        fastify.sequelize.close();
      }
    });
  }
});
