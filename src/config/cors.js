import fastifyCors from '@fastify/cors';

export const corsOptions = {
  origin: process.env.NODE_ENV === 'development' ? process.env.CORS_ORIGIN_DEV : process.env.CORS_ORIGIN_PROD,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

/** Register cors config. */
export const registerCors = async fastify => await fastify.register(fastifyCors, corsOptions);
