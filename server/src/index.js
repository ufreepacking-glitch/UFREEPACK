// Express 入口：单进程同源托管 静态站 + API + admin
// 路由挂载顺序（关键）：/admin → /api → / (static) → error
const express = require('express');
const path = require('path');
const config = require('./config');
const { initDb } = require('./db');
const { notFound, errorHandler } = require('./middleware/error');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true }));

// 1) Admin 前端（必须在 static 之前，否则 /admin 会被根 static 拦截）
app.use('/admin', express.static(config.adminRoot, { extensions: ['html'] }));

// 2) API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/stats', require('./routes/stats'));

// 3) 静态站点（项目根 = server 的父父目录）
app.use(express.static(config.siteRoot, { extensions: ['html'], redirect: false }));

// 4) 404 + 错误处理
app.use(notFound);
app.use(errorHandler);

// 启动：建表 + seed admin
initDb();
app.listen(config.port, () => {
  console.log(`[ufreepack] running on http://localhost:${config.port}`);
  console.log(`           site:  http://localhost:${config.port}/`);
  console.log(`           admin: http://localhost:${config.port}/admin/`);
  console.log(`           api:   http://localhost:${config.port}/api/`);
});
