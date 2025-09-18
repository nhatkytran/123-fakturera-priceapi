/** Handle uncaught exceptions. */
export const uncaughtExceptionHandler = error => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(error.name, error.message);
  process.exit(1);
};

/** Handle unhandled rejections. */
export const unhandledRejectionHandler = fastify => error => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(error.name, error.message);
  if (fastify.server) {
    fastify.server.close(() => {
      if (fastify.sequelize) {
        fastify.sequelize.close();
      }
      process.exit(1);
    });
  }
};

/** Handle SIGTERM. */
export const sigtermHandler = fastify => () => {
  console.error('SIGTERM RECEIVED. Shutting down gracefully.');
  if (fastify.server) {
    fastify.server.close(() => {
      console.error('Process terminated!');
      if (fastify.sequelize) {
        fastify.sequelize.close();
      }
    });
  }
};

/** Global error handler. */
export const globalErrorHandler = fastify => (error, request, reply) => {
  fastify.log.error(error);
  reply.status(error.statusCode || 500).send({ status: 'error', message: error.message });
};
