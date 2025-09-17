import { DataTypes } from 'sequelize';

/** Product model. */
export const ProductModel = sequelize =>
  sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      articleNo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'article_no',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name',
      },
      inPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'in_price',
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'price',
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'unit',
      },
      inStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'in_stock',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'description',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    },
    {
      tableName: 'products',
      timestamps: true,
    },
  );
