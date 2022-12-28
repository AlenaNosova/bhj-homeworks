const links = document.querySelectorAll('.menu__link');
const sub = document.querySelectorAll('.menu_sub');

links.forEach(el => {
    el.addEventListener('click', (e) => {
        const menuSubNode = el.closest('.menu__item').querySelector('.menu_sub'); //находим выпадающее меню

        sub.forEach(sub => {
            if (sub !== menuSubNode) {
                sub.classList.remove('menu_active');
            } 
        })

        menuSubNode?.classList.toggle('menu_active');

        if (menuSubNode !== null) {
            e.preventDefault();
        }
    }) 
})


