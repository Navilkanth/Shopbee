const { logger } = require('../config/logger');
const { env } = require('../config/env');

function notFound(_req, res) {
  res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Route not found' } });
}

function errorHandler(err, _req, res, _next) {
  logger.error({ err }, 'request_failed');
  const status = err.status || 500;
  const payload = {
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message: status === 500 ? 'Something went wrong' : err.message,
    },
  };
  if (env.nodeEnv !== 'production' && err.details) {
    payload.error.details = err.details;
  }
  res.status(status).json(payload);
}

module.exports = { notFound, errorHandler };
