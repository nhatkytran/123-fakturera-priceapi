import Fastify from 'fastify';

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

(async () => {
  try {
    fastify.sequelize.sync();
    await fastify.listen({ port: fastify.config.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
