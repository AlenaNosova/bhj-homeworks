let menuItem = document.getElementsByClassName('menu__item');
let links = document.getElementsByClassName('menu__link');
let menu = document.getElementsByClassName('menu');
let arr = Array.from(links);


for (let i =0; i > arr.length; i++) {
    arr[i].onclick = function () {
        if (menuItem.querySelectorAll('.menu')) {
            menu.addClasslist('menu_active');
            return false;
        }
    }
}