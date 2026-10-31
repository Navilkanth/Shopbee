const storeRepository = require('../repositories/storeRepository');

async function getSettings(_req, res) {
  const data = await storeRepository.getSettings();
  res.json({ data });
}

async function getLayout(_req, res) {
  const data = await storeRepository.getLayout();
  res.json({ data });
}

module.exports = { getSettings, getLayout };
