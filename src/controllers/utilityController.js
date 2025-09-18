import { catchAsync } from '../utils/catchAsync.js';

/** Health check. */
export const healthCheck = catchAsync(async (request, reply) => {
  reply.send({ message: 'Hello World' });
});
