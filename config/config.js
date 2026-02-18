const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '3000',
  dbUser: process.env.USER_DB,
  dbPassword: process.env.PASS_DB,
  dbHost: process.env.HOST_DB,
  dbName: process.env.NAME_DB,
  dbPort: process.env.PORT_DB,
};

module.exports = config;
