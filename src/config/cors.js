import fastifyCors from '@fastify/cors';

export const corsOptions = {
  origin:
    process.env.NODE_ENV === 'development'
      ? [process.env.CORS_ORIGIN_DEV, 'http://127.0.0.1:3000/']
      : process.env.CORS_ORIGIN_PROD,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

/** Register cors config. */
export const registerCors = async fastify => await fastify.register(fastifyCors, corsOptions);
