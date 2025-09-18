import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

/** Register swagger plugin. */
export const registerSwagger = async function (fastify) {
  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Fakturera API',
        description: 'API documentation for Fakturera.',
        version: '1.0.0',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'Dev server' },
        { url: 'https://123-fakturera-priceapi-ky-tran.up.railway.app/', description: 'Prod server' },
      ],
    },
  });

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
    },
  });
};
