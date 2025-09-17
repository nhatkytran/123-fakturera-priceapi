/** Get all products. */
export const getAllProducts = Product => async (request, reply) => {
  const products = await Product.findAll();
  return { status: 'success', results: products.length, data: products };
};
