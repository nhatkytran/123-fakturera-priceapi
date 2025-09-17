import { ProductModel } from '../models/productModel.js';

/** Product routes. */
export const productRoutes = async fastify => {
  const Product = ProductModel(fastify.sequelize);

  //
  fastify.get('/', async (request, reply) => {
    try {
      const products = await Product.findAll();
      return { status: 'success', results: products.length, data: products };
    } catch (error) {
      reply.code(error.status || 500).send({ status: 'error', message: error.message });
    }
  });
};
