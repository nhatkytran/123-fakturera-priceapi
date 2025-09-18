/** Global error handler. */
export const globalErrorHandler = fastify => (error, request, reply) => {
  fastify.log.error(error);
  reply.status(error.statusCode || 500).send({ status: 'error', message: error.message });
};
