const links = document.querySelectorAll('.menu__link');
const sub = document.querySelectorAll('.menu_sub');

links.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget; //текущий элемент
        let drop = currentBtn.closest('.menu__item').querySelector('.menu_sub'); //находим выпадающее меню

        links.forEach(el => {
            if(el !== currentBtn){
                el.classList.remove('menu_active');
            }
        });

        sub.forEach(el => {
            e.preventDefault();
            if(el !== drop) {
                el.classList.remove('menu_active');
            }
        })

        drop.classList.toggle('menu_active');
        currentBtn.classList.toggle('menu_active');
    }) 
})

