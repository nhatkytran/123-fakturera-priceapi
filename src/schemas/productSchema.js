/** Product schema. */
export const productSchema = {
  id: { type: 'integer', example: 1 },
  articleNo: { type: 'integer', example: 1234567890 },
  name: { type: 'string', example: 'Test Product' },
  inPrice: { type: 'integer', example: 900500 },
  price: { type: 'integer', example: 1500800 },
  unit: { type: 'string', example: 'pcs' },
  inStock: { type: 'integer', example: 100 },
  description: { type: 'string', example: 'This is a test product' },
  createdAt: { type: 'string', format: 'date-time', example: '2025-09-18T10:00:00Z' },
  updatedAt: { type: 'string', format: 'date-time', example: '2025-09-18T10:00:00Z' },
};

/** Get all products schema. */
export const getAllProductsSchema = {
  schema: {
    description: 'Get all products.',
    tags: ['Products'],
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'success' },
          results: { type: 'integer', example: 25 },
          data: { type: 'array', items: { type: 'object', properties: productSchema } },
        },
      },
    },
  },
};
