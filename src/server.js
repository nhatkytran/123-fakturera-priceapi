import Fastify from 'fastify';
import { loggerConfig } from './config/logger.js';
import { registerEnv } from './config/env.js';

const fastify = Fastify({ logger: loggerConfig() });

await registerEnv(fastify);

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

(async () => {
  try {
    await fastify.listen({ port: fastify.config.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
