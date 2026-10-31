const fs = require('fs/promises');
const path = require('path');
const { prisma, isDbAvailable } = require('../config/prisma');

const DATA_PATH = path.resolve(__dirname, '../../data/store.json');

async function readFileStore() {
  const raw = await fs.readFile(DATA_PATH, 'utf8');
  return JSON.parse(raw);
}

async function writeFileStore(data) {
  await fs.writeFile(DATA_PATH, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function getSettings() {
  try {
    const rows = await prisma.storeSetting.findMany();
    if (rows.length) {
      return Object.fromEntries(rows.map((r) => [r.key, r.value]));
    }
  } catch {
    /* MySQL unavailable */
  }
  const file = await readFileStore();
  return file.settings;
}

async function getLayout() {
  try {
    const floors = await prisma.storeFloor.findMany({
      include: { departments: true },
      orderBy: { level: 'asc' },
    });
    if (floors.length) {
      return {
        disclaimer:
          'This is a stylised digital model of ShopBee Fashion House for wayfinding. It is not a measured architectural survey of a specific building.',
        floors: floors.map((f) => ({ id: f.id, name: f.name, level: f.level })),
        departments: floors.flatMap((f) =>
          f.departments.map((d) => ({
            id: d.id,
            name: d.name,
            slug: d.slug,
            floorId: f.id,
            x: d.x,
            z: d.z,
            width: d.width,
            depth: d.depth,
            height: d.height,
            color: d.color,
            categorySlug: d.categorySlug,
            description: d.description,
          })),
        ),
      };
    }
  } catch {
    /* MySQL unavailable */
  }
  const file = await readFileStore();
  return file.layout;
}

async function upsertSettings(patch) {
  const file = await readFileStore();
  file.settings = { ...file.settings, ...patch };
  await writeFileStore(file);
  try {
    await Promise.all(
      Object.entries(file.settings).map(([key, value]) =>
        prisma.storeSetting.upsert({
          where: { key },
          update: { value: String(value) },
          create: { key, value: String(value) },
        }),
      ),
    );
  } catch {
    /* persist file even if MySQL is down */
  }
  return file.settings;
}

module.exports = { getSettings, getLayout, upsertSettings, readFileStore };
