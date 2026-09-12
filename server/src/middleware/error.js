// 统一错误处理 + 404
const path = require('path');
const config = require('../config');

function notFound(req, res) {
  // API 请求返回 JSON；页面请求返回 404.html（保持品牌体验）
  const wantsHtml = !req.path.startsWith('/api') &&
    !req.path.startsWith('/admin') &&
    String(req.headers.accept || '').includes('text/html');
  if (wantsHtml) {
    return res.status(404).sendFile(path.join(config.siteRoot, '404.html'));
  }
  res.status(404).json({ error: 'not_found', path: req.path });
}

function errorHandler(err, req, res, next) {
  // joi/style 错误可携带 status，否则 500
  const status = err.status || 500;
  if (status >= 500) console.error('[error]', err);
  res.status(status).json({ error: err.code || 'server_error', message: status < 500 ? err.message : undefined });
}

module.exports = { notFound, errorHandler };
