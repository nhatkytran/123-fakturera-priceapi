import fastifyEnv from '@fastify/env';

const schema = {
  type: 'object',
  required: [
    'PORT',
    'CORS_ORIGIN_DEV',
    'CORS_ORIGIN_PROD',
    'SUPABASE_HOST',
    'SUPABASE_DB',
    'SUPABASE_USER',
    'SUPABASE_PASSWORD',
    'SUPABASE_PORT',
  ],
  properties: {
    PORT: { type: 'number', default: 3000 },
    CORS_ORIGIN_DEV: { type: 'string' },
    CORS_ORIGIN_PROD: { type: 'string' },
    SUPABASE_HOST: { type: 'string' },
    SUPABASE_DB: { type: 'string' },
    SUPABASE_USER: { type: 'string' },
    SUPABASE_PASSWORD: { type: 'string' },
    SUPABASE_PORT: { type: 'number' },
  },
};

const envOptions = { confKey: 'config', schema, dotenv: true };

/** Register env config. */
export const registerEnv = async fastify => await fastify.register(fastifyEnv, envOptions);
