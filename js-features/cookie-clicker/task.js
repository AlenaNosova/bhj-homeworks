const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

function cookieClick() {
    cookie.width = ++count.textContent % 2 ? 250 : 200;
};

cookie.onclick = cookieClick;