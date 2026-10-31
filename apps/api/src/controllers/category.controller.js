const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const { serializeCategory } = require('../utils/serialize');

exports.listCategories = asyncHandler(async (_req, res) => {
  const roots = await prisma.category.findMany({
    where: { parentId: null },
    orderBy: { sortOrder: 'asc' },
    include: {
      children: { orderBy: { name: 'asc' } },
    },
  });
  res.json({ data: roots.map(serializeCategory) });
});
