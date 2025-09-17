/** Get all products. */
export const getAllProducts = Product => async (request, reply) => {
  try {
    const products = await Product.findAll();
    return { status: 'success', results: products.length, data: products };
  } catch (error) {
    reply.code(error.status || 500).send({ status: 'error', message: error.message });
  }
};
