import Fastify from 'fastify';

import { loggerConfig } from './config/logger.js';
import { registerEnv } from './config/env.js';
import { registerCors } from './config/cors.js';
import { registerDb } from './config/db.js';

import { ProductModel } from './models/productModel.js';

const fastify = Fastify({ logger: loggerConfig() });

await registerEnv(fastify);
await registerCors(fastify);
await registerDb(fastify);

fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Hello World' });
});

fastify.get('/products', async (request, reply) => {
  try {
    const products = await ProductModel(fastify.sequelize).findAll();
    reply.send({ status: 'success', results: products.length, data: products });
  } catch (error) {
    reply.code(500).send({ status: 'error', message: error.message });
  }
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
