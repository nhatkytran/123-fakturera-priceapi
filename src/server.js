import Fastify from 'fastify';
import { loggerConfig } from './config/logger.js';

const fastify = Fastify({ logger: loggerConfig() });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

(async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
