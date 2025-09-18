const healthCheckSchema = {
  schema: {
    description: 'Health check endpoint to test if server is running.',
    tags: ['Health check'],
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Hello World' },
        },
      },
    },
  },
};

/** Utility routes. */
export const utilityRoutes = async fastify => {
  /** Health check. */
  fastify.get('/', healthCheckSchema, async (request, reply) => {
    reply.send({ message: 'Hello World' });
  });
};
