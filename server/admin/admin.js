/* UFREEPACK Admin — vanilla JS */
(function(){
  var API = '/api';
  var TOKEN_KEY = 'tf_admin_token';
  var token = localStorage.getItem(TOKEN_KEY);
  var page = 1, limit = 20, total = 0;
  var currentEditId = null;

  var $ = function(id){ return document.getElementById(id); };

  // ===== HTTP helper =====
  function api(path, opts){
    opts = opts || {};
    var headers = opts.headers || {};
    if (opts.body) headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = 'Bearer ' + token;
    return fetch(API + path, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    }).then(function(r){
      if (r.status === 401){ logout(); throw new Error('未授权，请重新登录'); }
      return r.json().then(function(j){ if (!r.ok) throw new Error(j.error || j.message || ('HTTP ' + r.status)); return j; });
    });
  }

  // ===== 视图切换 =====
  function showLogin(){ $('loginView').hidden = false; var st=$('loginStage'); if(st) st.hidden=false; $('listView').hidden = true; $('logoutBtn').hidden = true; $('dashStats').textContent = ''; }
  function showList(){ $('loginView').hidden = true; var st=$('loginStage'); if(st) st.hidden=true; $('listView').hidden = false; $('logoutBtn').hidden = false; loadList(); loadStats(); }

  function logout(){ localStorage.removeItem(TOKEN_KEY); token = null; showLogin(); }

  // ===== 登录 =====
  $('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    var u = $('loginUser').value.trim(), p = $('loginPass').value;
    if (!u || !p) return;
    var errEl = $('loginError'); errEl.hidden = true;
    fetch(API + '/auth/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username: u, password: p })
    }).then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error(j.error); return j; }); })
      .then(function(j){ token = j.token; localStorage.setItem(TOKEN_KEY, token); showList(); })
      .catch(function(e){ errEl.textContent = '登录失败：' + e.message; errEl.hidden = false; });
  });

  $('logoutBtn').addEventListener('click', logout);

  // ===== 登录视觉交互：悬停/聚焦输入框时切换左侧插画 =====
  var lv = $('loginVisual');
  function lvSet(state){ if(lv) lv.setAttribute('data-state', state); }
  (function(){
    if(!lv) return;
    var map = { loginUser:'user', loginPass:'pass' };
    Object.keys(map).forEach(function(id){
      var el = $(id); if(!el) return;
      var state = map[id];
      el.addEventListener('mouseenter', function(){ lvSet(state); });
      el.addEventListener('focus', function(){ lvSet(state); });
    });
    var stage = $('loginStage');
    if(stage){ stage.addEventListener('mouseleave', function(){ lvSet('default'); }); }
    var form = $('loginForm');
    if(form){
      form.addEventListener('focusout', function(){
        setTimeout(function(){
          var a = document.activeElement;
          if(a !== $('loginUser') && a !== $('loginPass')) lvSet('default');
        }, 0);
      });
    }
  })();

  // ===== 列表 =====
  function loadList(){
    var status = $('filterStatus').value;
    var q = $('filterQ').value.trim();
    var qs = '?page=' + page + '&limit=' + limit;
    if (status) qs += '&status=' + encodeURIComponent(status);
    if (q) qs += '&q=' + encodeURIComponent(q);
    api('/inquiries' + qs).then(function(j){
      total = j.total;
      var tbody = document.querySelector('#listTable tbody');
      tbody.innerHTML = '';
      $('emptyHint').hidden = j.data.length > 0;
      j.data.forEach(function(r){
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td>' + r.id + '</td>' +
          '<td>' + esc(r.name) + '</td>' +
          '<td>' + esc(r.email) + '</td>' +
          '<td>' + esc(r.company || '') + '</td>' +
          '<td>' + esc(r.qty || '') + '</td>' +
          '<td>' + esc(r.lang || '') + '</td>' +
          '<td><span class="badge ' + (r.status||'new') + '">' + esc(r.status) + '</span></td>' +
          '<td>' + fmt(r.created_at) + '</td>' +
          '<td><button class="btn-primary view-btn" data-id="' + r.id + '">查看</button></td>';
        tbody.appendChild(tr);
      });
      // 分页
      var pages = Math.ceil(total / limit) || 1;
      $('pageInfo').textContent = page + ' / ' + pages + '  (共 ' + total + ' 条)';
      $('prevBtn').disabled = page <= 1;
      $('nextBtn').disabled = page >= pages;
      // 绑定查看按钮
      tbody.querySelectorAll('.view-btn').forEach(function(btn){
        btn.addEventListener('click', function(){ viewInquiry(+btn.dataset.id); });
      });
    }).catch(function(e){ alert('加载失败：' + e.message); });
  }

  function loadStats(){
    api('/stats/summary').then(function(j){
      $('dashStats').textContent = '共 ' + j.total + ' 条 · 今日 ' + j.today + ' · new ' + (j.byStatus.new||0) + ' · replied ' + (j.byStatus.replied||0);
    }).catch(function(){ /* 静默 */ });
  }

  $('searchBtn').addEventListener('click', function(){ page = 1; loadList(); });
  $('resetBtn').addEventListener('click', function(){ $('filterStatus').value=''; $('filterQ').value=''; page = 1; loadList(); });
  $('filterStatus').addEventListener('change', function(){ page = 1; loadList(); });
  $('prevBtn').addEventListener('click', function(){ if (page > 1){ page--; loadList(); } });
  $('nextBtn').addEventListener('click', function(){ page++; loadList(); });

  // ===== 详情 modal =====
  function viewInquiry(id){
    currentEditId = id;
    api('/inquiries/' + id).then(function(r){
      $('modalId').textContent = r.id;
      $('vName').textContent = r.name || '';
      $('vEmail').textContent = r.email || '';
      $('vPhone').textContent = r.phone || '';
      $('vCompany').textContent = r.company || '';
      $('vQty').textContent = r.qty || '';
      $('vLang').textContent = r.lang || '';
      $('vSource').textContent = r.source_url || '';
      $('vCreated').textContent = fmt(r.created_at);
      $('vWa').textContent = r.wa_sent ? '已跳转 ✓' : '未标记';
      $('vMessage').textContent = r.message || '';
      $('vStatus').value = r.status || 'new';
      $('vNotes').value = r.admin_notes || '';
      $('modal').hidden = false;
    }).catch(function(e){ alert('加载失败：' + e.message); });
  }

  $('modalClose').addEventListener('click', function(){ $('modal').hidden = true; });
  $('modal').addEventListener('click', function(e){ if (e.target === $('modal')) $('modal').hidden = true; });

  $('saveBtn').addEventListener('click', function(){
    if (!currentEditId) return;
    api('/inquiries/' + currentEditId, {
      method: 'PATCH',
      body: { status: $('vStatus').value, admin_notes: $('vNotes').value }
    }).then(function(){ $('modal').hidden = true; loadList(); loadStats(); })
      .catch(function(e){ alert('保存失败：' + e.message); });
  });

  $('deleteBtn').addEventListener('click', function(){
    if (!currentEditId) return;
    if (!confirm('确认删除这条询盘？此操作不可撤销。')) return;
    api('/inquiries/' + currentEditId, { method: 'DELETE' })
      .then(function(){ $('modal').hidden = true; loadList(); loadStats(); })
      .catch(function(e){ alert('删除失败：' + e.message); });
  });

  // ===== utils =====
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function fmt(s){ if(!s) return ''; return s.replace('T',' ').replace(/\.\d+$/,''); }

  // ===== 启动 =====
  if (token) showList(); else showLogin();
})();
