// SQLite 单例（node:sqlite，Node 24+ 内置）+ 启动建表 + seed admin
const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const config = require('./config');
const { hashPassword } = require('./lib/password');

let _db = null;

function db() {
  if (!_db) {
    _db = new DatabaseSync(config.dbPath);
    // node:sqlite 没有 .pragma() 便捷方法，用 exec
    _db.exec('PRAGMA journal_mode = WAL');
    _db.exec('PRAGMA foreign_keys = ON');
  }
  return _db;
}

// 首次启动：执行 schema.sql 建表；users 为空时 seed admin
function initDb() {
  const schema = fs.readFileSync(config.schemaPath, 'utf8');
  db().exec(schema);

  const row = db().prepare('SELECT COUNT(*) AS c FROM users').get();
  if (row.c === 0) {
    const hash = hashPassword(config.adminPassword);
    db().prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)')
       .run(config.adminUsername, hash);
    console.log('[db] seeded admin user:', config.adminUsername);
  }
}

module.exports = db;
module.exports.initDb = initDb;
