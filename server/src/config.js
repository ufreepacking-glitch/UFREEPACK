// 配置读取 + 路径常量
require('dotenv').config();
const path = require('path');

const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtSecret: process.env.JWT_SECRET || 'dev_insecure_secret_change_me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '12h',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'change_me_now',
  // 项目根 = server/ 的父目录（即 ufreepack-website/）
  siteRoot: path.join(__dirname, '..', '..'),
  adminRoot: path.join(__dirname, '..', 'admin'),
  schemaPath: path.join(__dirname, 'schema.sql'),
  dbPath: path.join(__dirname, '..', 'db.sqlite'),
};

module.exports = config;
