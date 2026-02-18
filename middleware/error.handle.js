const { stack } = require('../routes/users');

function errorLogs(err, req, res, next) {
  console.log('errorlogs');
  console.error(err);
  next(err);
}

function handleError(err, req, res, next) {
  console.log('handleError');
  res.status(501).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  errorLogs,
  handleError,
};
