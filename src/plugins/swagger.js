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
        // TODO: Add production server.
        // { url: 'https://your-prod-domain.com', description: 'Prod server' },
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
