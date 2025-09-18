import fastifyCors from '@fastify/cors';

/** Register cors config. */
export const registerCors = async fastify => {
  const corsOptions = {
    origin:
      process.env.NODE_ENV === 'development'
        ? [fastify.config.CORS_ORIGIN_DEV, 'http://127.0.0.1:3000']
        : fastify.config.CORS_ORIGIN_PROD,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  };
  await fastify.register(fastifyCors, corsOptions);
};
