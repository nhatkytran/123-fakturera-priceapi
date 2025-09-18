/** ID params schema. */
export const idParamsSchema = { type: 'object', properties: { id: { type: 'integer' } }, required: ['id'] };

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

/** Product body schema. */
export const productBodySchema = {
  type: 'object',
  properties: {
    articleNo: { type: 'integer' },
    name: { type: 'string' },
    inPrice: { type: 'integer' },
    price: { type: 'integer' },
    unit: { type: 'string' },
    inStock: { type: 'integer' },
    description: { type: 'string' },
  },
  required: ['articleNo', 'name', 'inPrice', 'price', 'unit', 'inStock', 'description'],
  additionalProperties: false,
};

/** Update product by ID schema. */
export const updateProductByIdSchema = {
  schema: {
    description: 'Update product by ID.',
    tags: ['Products'],
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'success' },
          data: { type: 'object', properties: productSchema },
        },
      },
    },
    body: productBodySchema,
    params: idParamsSchema,
  },
};
