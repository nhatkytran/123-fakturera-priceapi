import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../utils/appError.js';

/** Get all products. */
export const getAllProducts = Product =>
  catchAsync(async (request, reply) => {
    const products = await Product.findAll();
    reply.send({ status: 'success', results: products.length, data: products });
  });

/** Update product by ID. */
export const updateProductById = Product =>
  catchAsync(async (request, reply) => {
    const product = await Product.findByPk(request.params.id);
    if (!product) throw new AppError('Product not found!', 404);
    await product.update(request.body);
    reply.send({ status: 'success', data: product });
  });
