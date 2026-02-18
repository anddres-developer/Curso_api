const express = require('express');
const router = express.Router();
const productServices = require('../services/servicesProducts');
const { validatorHandler } = require('../middleware/validator.handler');
const {
  schemaProductCreate,
  updateSchemaProduct,
  getProductSchema,
} = require('../schema/schemaProdicts');

router.get('/', async (req, res, next) => {
  try {
    const products = await productServices.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    const getOneProduct = await productServices.getOneProduct(req, res);
    return getOneProduct;
  },
);

router.post(
  '/',
  validatorHandler(schemaProductCreate, 'body'),
  async (req, res) => {
    const createNewProduct = await productServices.createNewProduct(req, res);
    return createNewProduct;
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateSchemaProduct, 'body'),
  async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res);
    res.json(updateProduct);
  },
);

router.delete('/:id', async (req, res) => {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
});

module.exports = router;
