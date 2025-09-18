import { healthCheck } from '../controllers/utilityController.js';
import { healthCheckSchema } from '../schemas/utilitySchema.js';

/** Utility routes. */
export const utilityRoutes = async fastify => {
  /** Health check. */
  fastify.get('/', healthCheckSchema, healthCheck);
};
