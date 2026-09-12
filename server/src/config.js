// 配置读取 + 路径常量
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// 显式读取 server/.env，确保从仓库根目录启动时（Hostinger/生产）也能加载到
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// 静态站点根目录：兼容两种部署方式
//  1) Hostinger 根目录 = 仓库根（server/src 向上两级即为站点根）
//  2) Hostinger 根目录 = server（整个仓库仍会被 clone，向上两级同样是站点根）
// 逐个候选验证 index.html 是否存在，避免部署结构变化导致整站 404
const siteCandidates = [
  path.join(__dirname, '..', '..'),
  path.join(process.cwd(), '..'),
  process.cwd(),
  path.join(__dirname, '..', 'public'),
];
const siteRoot = siteCandidates.find((p) => fs.existsSync(path.join(p, 'index.html')))
  || siteCandidates[0];

// 数据库文件：优先 server/db.sqlite；若目录只读（部分托管环境）则退回临时目录，避免启动崩溃
function pickDbPath() {
  const primary = path.join(__dirname, '..', 'db.sqlite');
  try {
    fs.accessSync(path.dirname(primary), fs.constants.W_OK);
    return primary;
  } catch (err) {
    const fallback = path.join(require('os').tmpdir(), 'ufreepack-db.sqlite');
    console.warn('[config] server 目录不可写，改用临时数据库:', fallback);
    return fallback;
  }
}

const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtSecret: process.env.JWT_SECRET || 'dev_insecure_secret_change_me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '12h',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'change_me_now',
  siteRoot,
  adminRoot: path.join(__dirname, '..', 'admin'),
  schemaPath: path.join(__dirname, 'schema.sql'),
  dbPath: pickDbPath(),
};

module.exports = config;
