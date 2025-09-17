import { ProductModel } from '../models/productModel.js';
import { getAllProducts } from '../controllers/productController.js';

/** Product routes. */
export const productRoutes = async fastify => {
  const Product = ProductModel(fastify.sequelize);

  /** Get all products */
  fastify.get('/', getAllProducts(Product));
};
