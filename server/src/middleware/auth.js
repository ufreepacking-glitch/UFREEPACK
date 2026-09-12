// JWT 鉴权中间件
const { verifyToken } = require('../lib/jwt');

function requireAuth(req, res, next) {
  const h = req.headers.authorization || '';
  const m = h.match(/^Bearer\s+(.+)$/);
  if (!m) return res.status(401).json({ error: 'no_token' });
  try {
    req.admin = verifyToken(m[1]);
    next();
  } catch (e) {
    return res.status(401).json({ error: 'bad_token' });
  }
}

module.exports = { requireAuth };
