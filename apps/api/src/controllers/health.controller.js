function getHealth(_req, res) {
  res.json({
    status: 'ok',
    service: 'shopbee-api',
    time: new Date().toISOString(),
  });
}

module.exports = { getHealth };
