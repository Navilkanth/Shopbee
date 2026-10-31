const { PrismaClient } = require('@prisma/client');
const net = require('net');

let prisma = null;
let dbAvailable = null;

// Fast TCP probe to check if MySQL port is open before letting Prisma block/timeout
function isDbAvailable() {
  if (dbAvailable !== null) return Promise.resolve(dbAvailable);

  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(250); // fast 250ms check
    socket.on('connect', () => {
      socket.destroy();
      dbAvailable = true;
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      dbAvailable = false;
      resolve(false);
    });
    socket.on('error', () => {
      socket.destroy();
      dbAvailable = false;
      resolve(false);
    });
    socket.connect(3306, '127.0.0.1');
  });
}

function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

module.exports = {
  prisma: new Proxy({}, {
    get(target, prop) {
      return getPrisma()[prop];
    },
  }),
  isDbAvailable,
};
