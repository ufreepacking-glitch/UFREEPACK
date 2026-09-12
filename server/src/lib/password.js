// 密码 hash/verify —— 用 Node 内置 crypto.pbkdf2（零原生依赖，替代 bcrypt）
const crypto = require('crypto');

const ITERATIONS = 100000;
const KEYLEN = 64;
const DIGEST = 'sha512';

function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST);
  return salt.toString('hex') + ':' + hash.toString('hex');
}

function verifyPassword(password, stored) {
  if (!stored || typeof stored !== 'string') return false;
  const parts = stored.split(':');
  if (parts.length !== 2) return false;
  let salt, hash;
  try {
    salt = Buffer.from(parts[0], 'hex');
    hash = Buffer.from(parts[1], 'hex');
  } catch (e) { return false; }
  const testHash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST);
  if (hash.length !== testHash.length) return false;
  return crypto.timingSafeEqual(hash, testHash);
}

module.exports = { hashPassword, verifyPassword };
