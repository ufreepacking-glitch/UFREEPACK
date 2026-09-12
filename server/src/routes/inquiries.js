// 询盘路由：公开 POST + admin GET/GET:id/PATCH/DELETE
const router = require('express').Router();
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const STATUS_LIST = ['new', 'read', 'replied', 'archived'];
function validStatus(s) { return STATUS_LIST.indexOf(s) >= 0; }

// 公开：客户端 submitInquiry 双通道 POST
router.post('/', (req, res, next) => {
  const b = req.body || {};
  const { name, email, phone, company, qty, message, lang, source_url, wa_sent } = b;
  if (!name || !email) {
    return res.status(400).json({ error: 'name_email_required' });
  }
  try {
    const info = db().prepare(
      `INSERT INTO inquiries (name,email,phone,company,qty,message,lang,source_url,wa_sent)
       VALUES (?,?,?,?,?,?,?,?,?)`
    ).run(
      String(name).slice(0, 200),
      String(email).slice(0, 200),
      phone   ? String(phone).slice(0, 100) : null,
      company ? String(company).slice(0, 200) : null,
      qty     ? String(qty).slice(0, 100) : null,
      message ? String(message).slice(0, 4000) : null,
      lang    ? String(lang).slice(0, 10) : null,
      source_url ? String(source_url).slice(0, 500) : null,
      wa_sent ? 1 : 0
    );
    res.status(201).json({ id: info.lastInsertRowid, ok: true });
  } catch (e) { next(e); }
});

// admin 列表（分页 + status 过滤 + 模糊搜索）
router.get('/', requireAuth, (req, res, next) => {
  const page  = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
  const status = req.query.status;
  const q = req.query.q;
  const where = []; const params = [];
  if (status && validStatus(status)) { where.push('status = ?'); params.push(status); }
  if (q) {
    where.push('(name LIKE ? OR email LIKE ? OR company LIKE ?)');
    const k = '%' + String(q).slice(0, 100) + '%';
    params.push(k, k, k);
  }
  const whereSql = where.length ? 'WHERE ' + where.join(' AND ') : '';
  try {
    const total = db().prepare(`SELECT COUNT(*) AS c FROM inquiries ${whereSql}`).get(...params).c;
    const rows = db().prepare(
      `SELECT * FROM inquiries ${whereSql} ORDER BY created_at DESC LIMIT ? OFFSET ?`
    ).all(...params, limit, (page - 1) * limit);
    res.json({ data: rows, total, page, limit });
  } catch (e) { next(e); }
});

// admin 单条详情
router.get('/:id', requireAuth, (req, res, next) => {
  try {
    const row = db().prepare('SELECT * FROM inquiries WHERE id = ?').get(req.params.id);
    if (!row) return res.status(404).json({ error: 'not_found' });
    res.json(row);
  } catch (e) { next(e); }
});

// admin 改 status / admin_notes
router.patch('/:id', requireAuth, (req, res, next) => {
  const id = req.params.id;
  const { status, admin_notes } = req.body || {};
  if (status !== undefined && !validStatus(status)) {
    return res.status(400).json({ error: 'invalid_status', allowed: STATUS_LIST });
  }
  try {
    const sets = []; const params = [];
    if (status !== undefined) { sets.push('status = ?'); params.push(status); }
    if (admin_notes !== undefined) { sets.push('admin_notes = ?'); params.push(String(admin_notes).slice(0, 4000)); }
    if (!sets.length) return res.status(400).json({ error: 'nothing_to_update' });
    sets.push("updated_at = datetime('now')");
    params.push(id);
    const info = db().prepare(`UPDATE inquiries SET ${sets.join(', ')} WHERE id = ?`).run(...params);
    if (info.changes === 0) return res.status(404).json({ error: 'not_found' });
    const row = db().prepare('SELECT * FROM inquiries WHERE id = ?').get(id);
    res.json(row);
  } catch (e) { next(e); }
});

// admin 删除
router.delete('/:id', requireAuth, (req, res, next) => {
  try {
    const info = db().prepare('DELETE FROM inquiries WHERE id = ?').run(req.params.id);
    if (info.changes === 0) return res.status(404).json({ error: 'not_found' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
