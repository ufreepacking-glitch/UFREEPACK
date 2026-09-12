// 统计路由：GET /api/stats/summary
const router = require('express').Router();
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

router.get('/summary', requireAuth, (req, res, next) => {
  try {
    const total = db().prepare('SELECT COUNT(*) AS c FROM inquiries').get().c;
    const byStatus = db().prepare(
      `SELECT status, COUNT(*) AS c FROM inquiries GROUP BY status`
    ).all();
    const today = db().prepare(
      `SELECT COUNT(*) AS c FROM inquiries WHERE date(created_at) = date('now')`
    ).get().c;
    const breakdown = {};
    byStatus.forEach(r => { breakdown[r.status] = r.c; });
    res.json({ total, today, byStatus: breakdown });
  } catch (e) { next(e); }
});

module.exports = router;
