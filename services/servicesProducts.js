const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres');
const sequelize = require('../libs/sequelize');

const getAllProducts = async (req, res) => {
  //const price = ollprace();
  /* try {
    const products = [];
    const { size } = req.query;
    const limit = size ? parseInt(size, 10) : 6;
    for (let i = 0; i < limit; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
    return products;
  } catch (error) {
    console.log(error);
  } */

  try {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = (req, res) => {
  try {
    const id = req.params.id;
    res.json({
      id: id,
      name: 'Teclado',
      preace: 200,
      category: 'Tecnologia',
    });
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = (req, res) => {
  try {
    const body = req.body;

    res.json({
      ok: true,
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    /*if (id != 1) {
      throw boom.notFound('Produc no found');
    }*/
    const body = req.body;
    res.json({
      message: 'success',
      product: body,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
