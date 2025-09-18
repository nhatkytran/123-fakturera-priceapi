import { ProductModel } from '../models/productModel.js';
import { getAllProducts, updateProductById } from '../controllers/productController.js';
import { getAllProductsSchema, updateProductByIdSchema } from '../schemas/productSchema.js';

/** Product routes. */
export const productRoutes = async fastify => {
  const Product = ProductModel(fastify.sequelize);

  /** Get all products */
  fastify.get('/', getAllProductsSchema, getAllProducts(Product));

  /** Update product by ID. */
  fastify.patch('/:id', updateProductByIdSchema, updateProductById(Product));
};
