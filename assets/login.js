// assets/login.js
document.addEventListener('DOMContentLoaded', function() {
  var page = location.pathname.split('/').pop();
  if (page !== 'login.html') {
    var flag = localStorage.getItem('ai_navi_session');
    var exp  = parseInt(localStorage.getItem('ai_navi_expire'), 10);
    if (flag !== 'true' || !exp || Date.now() > exp) {
      localStorage.removeItem('ai_navi_session');
      localStorage.removeItem('ai_navi_user');
      localStorage.removeItem('ai_navi_expire');
      location.replace('login.html');
      return;
    }
  }

  var form = document.getElementById('loginForm');
  if (!form) return;

  var userList = [
    { username: "92",  password: "Donki92"  },
    { username: "278", password: "Donki278" },
    { username: "373", password: "Donki373" },
    { username: "442", password: "Donki442" },
    { username: "555", password: "Donki555" }
  ];

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var u = document.getElementById('username').value.trim();
    var p = document.getElementById('password').value.trim();

    var valid = userList.some(function(x) {
      return x.username === u && x.password === p;
    });
    if (!valid) {
      alert('ユーザー名またはパスワードが間違っています。');
      return;
    }

    var nextExp = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('ai_navi_session', 'true');
    localStorage.setItem('ai_navi_user',    u);
    localStorage.setItem('ai_navi_expire',  nextExp.toString());

    location.replace('main.html');
  });
});
