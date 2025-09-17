import fastifyEnv from '@fastify/env';

const schema = {
  type: 'object',
  required: ['PORT', 'CORS_ORIGIN_DEV', 'CORS_ORIGIN_PROD'],
  properties: {
    PORT: { type: 'number', default: 3000 },
    CORS_ORIGIN_DEV: { type: 'string' },
    CORS_ORIGIN_PROD: { type: 'string' },
  },
};

const envOptions = { confKey: 'config', schema, dotenv: true };

/** Register env config. */
export const registerEnv = async fastify => await fastify.register(fastifyEnv, envOptions);
