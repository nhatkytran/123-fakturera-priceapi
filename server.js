import Fastify from 'fastify';

const fastify = Fastify({ logger: process.env.NODE_ENV === "development" });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

(async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})();