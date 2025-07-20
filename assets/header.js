// assets/header.js
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('header');
  if (!container) return;

  container.innerHTML = `
    <header class="header">
      <button class="menu-button" id="menuBtn">☰</button>
      <div>ドンキAI商品ナビ</div>
    </header>
    <nav class="nav-menu" id="navPanel">
      <ul>
        <li><a href="main.html">サービス概要</a></li>
        <li><a href="manual.html">マニュアル・データ</a></li>
        <li><a href="map.html">ｱｸｾｽ数,ﾌﾛｱMAP画像</a></li>
        <li><a href="login.html" id="logoutBtn">ログアウト</a></li>
      </ul>
    </nav>
  `;

  const btn   = container.querySelector('#menuBtn');
  const panel = container.querySelector('#navPanel');
  btn.addEventListener('click', () => panel.classList.toggle('open'));

  const logout = container.querySelector('#logoutBtn');
  logout.addEventListener('click', e => {
    e.preventDefault();
    localStorage.clear();
    location.href = 'login.html';
  });
});
