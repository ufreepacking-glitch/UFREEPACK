// Hostinger / 生产入口：直接复用 server/src/index.js
// （静态站 + /api + /admin 单进程托管，siteRoot = 本文件所在目录）
require('./server/src/index.js');
