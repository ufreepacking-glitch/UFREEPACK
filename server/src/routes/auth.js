// 认证路由：POST /api/auth/login
const router = require('express').Router();
const db = require('../db');
const { verifyPassword } = require('../lib/password');
const { signToken } = require('../lib/jwt');

router.post('/login', (req, res, next) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'username_password_required' });
  }
  try {
    const user = db().prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: 'bad_credentials' });
    }
    const token = signToken({ id: user.id, username: user.username, role: user.role });
    res.json({ token, username: user.username, role: user.role, expiresIn: '12h' });
  } catch (e) { next(e); }
});

module.exports = router;
