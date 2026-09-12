-- ufreepack-website schema
-- Phase 1 实用: users + inquiries
-- Phase 2/3 预声明: categories / products / articles / i18n_*（IF NOT EXISTS，后续直接用）

-- ===== Phase 1: 用户与询盘 =====
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,            -- bcrypt
  role          TEXT NOT NULL DEFAULT 'admin',
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS inquiries (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  company     TEXT,
  qty         TEXT,
  message     TEXT,
  lang        TEXT,                       -- 提交时 curLang (en/zh/ja/...)
  source_url  TEXT,                       -- location.pathname + search
  wa_sent     INTEGER NOT NULL DEFAULT 0, -- 1=客户端已开 WhatsApp（乐观标记）
  status      TEXT NOT NULL DEFAULT 'new',-- new|read|replied|archived
  admin_notes TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_inquiries_status  ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at DESC);

-- ===== Phase 2: 产品分类与产品（预声明） =====
CREATE TABLE IF NOT EXISTS categories (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  tab        TEXT NOT NULL,               -- industry|shape|structure|holiday
  sort_order INTEGER NOT NULL DEFAULT 0,
  count      INTEGER NOT NULL DEFAULT 0,  -- prodCats row[3]
  image      TEXT,                        -- catImgMap[tab][idx]
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(tab, sort_order)
);
CREATE TABLE IF NOT EXISTS category_names (
  category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  lang        TEXT NOT NULL,              -- en|zh|ja|es|ar|ko|pt
  name        TEXT NOT NULL,
  PRIMARY KEY (category_id, lang)
);
CREATE TABLE IF NOT EXISTS products (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  model       TEXT NOT NULL,             -- 'TD-R-0001'
  dimensions  TEXT,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  image       TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id, sort_order);

-- ===== Phase 3: 文章与 i18n 内容（预声明） =====
CREATE TABLE IF NOT EXISTS articles (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT NOT NULL UNIQUE,
  status       TEXT NOT NULL DEFAULT 'draft',  -- draft|published
  published_at TEXT,
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS article_i18n (
  article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  lang       TEXT NOT NULL,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL,
  PRIMARY KEY (article_id, lang)
);
CREATE TABLE IF NOT EXISTS i18n_keys (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  key       TEXT NOT NULL UNIQUE,        -- 'nav.products'
  namespace TEXT                         -- 'nav'|'hero'|'products'...
);
CREATE TABLE IF NOT EXISTS i18n_values (
  key_id INTEGER NOT NULL REFERENCES i18n_keys(id) ON DELETE CASCADE,
  lang   TEXT NOT NULL,
  value  TEXT NOT NULL,
  PRIMARY KEY (key_id, lang)
);
