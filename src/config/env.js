import fastifyEnv from '@fastify/env';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: { type: 'number', default: 3000 },
  },
};

const envOptions = { confKey: 'config', schema, dotenv: true };

/** Register env config. */
export const registerEnv = async fastify => await fastify.register(fastifyEnv, envOptions);
