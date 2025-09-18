/** Health check schema. */
export const healthCheckSchema = {
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
