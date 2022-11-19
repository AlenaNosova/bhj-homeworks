let cookie = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');
let number = 0;

function cookieClick() {
    if (number % 2) {
    number ++;
    count.innerHTML = number;
    cookie.width = 300;
    } else {
        number ++;
        count.innerHTML = number;
        cookie.width = 200;
        }
};

cookie.onclick = cookieClick;