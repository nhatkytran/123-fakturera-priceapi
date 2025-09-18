import Fastify from 'fastify';

/** Handle uncaught exceptions. */
process.on('uncaughtException', uncaughtExceptionHandler);

import { loggerConfig } from './config/logger.js';
import { registerEnv } from './config/env.js';
import { registerCors } from './config/cors.js';
import { registerDb } from './config/db.js';
import { registerSwagger } from './plugins/swagger.js';
import { utilityRoutes } from './routes/utilityRoutes.js';
import { productRoutes } from './routes/productRoutes.js';
import {
  globalErrorHandler,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
  sigtermHandler,
} from './controllers/exceptionController.js';

/** Initialize Fastify. */
const fastify = Fastify({ logger: loggerConfig() });

/** Register plugins. */
await registerEnv(fastify);
await registerCors(fastify);
await registerDb(fastify);
await registerSwagger(fastify);

/** Register routes. */
fastify.register(utilityRoutes);
fastify.register(productRoutes, { prefix: '/api/v1/products' });

/** Error handler. */
fastify.setErrorHandler(globalErrorHandler(fastify));

/** Start server. */
(async () => {
  try {
    fastify.sequelize.sync();
    await fastify.listen({ port: fastify.config.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();

/** Handle unhandled rejections. */
process.on('unhandledRejection', unhandledRejectionHandler(fastify));

/** Handle SIGTERM. */
process.on('SIGTERM', sigtermHandler(fastify));
