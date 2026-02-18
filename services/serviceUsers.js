const pool = require('../libs/postgres');
const { models } = require('../libs/sequelize');

const getAllUsers = async (req, res) => {
  /*  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no hay ningun parametro');
  } */

  /* const query = 'SELECT * FROM tasks';
  const response = await pool.query(query);
  return response.rows; */

  const response = await models.User.findAll();
  return response;
};

module.exports = {
  getAllUsers,
};
