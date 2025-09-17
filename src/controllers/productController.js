import { catchAsync } from '../utils/catchAsync.js';

/** Get all products. */
export const getAllProducts = Product =>
  catchAsync(async (request, reply) => {
    const products = await Product.findAll();
    reply.send({ status: 'success', results: products.length, data: products });
  });
