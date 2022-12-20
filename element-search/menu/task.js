let links = document.querySelectorAll('.menu__link');

links.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget; //текущий элемент
        let dropdown = currentBtn.closest('.menu_sub').querySelector('.menu__link'); //находим выпадающее меню

        dropdown.classList.toggle('menu_active'); //показать выпадющее меню


        //запретить переход по ссылке в выпадающем меню
        dropdown.addEventListener('click', (event) => {
            event.preventDefault()
        })
        

        //одновременно не должно быть открыто более одного меню
        currentBtn.forEach(el => {
            if (el !== currentBtn) {
                el.classList.remove('menu_active');
            }
        });
    }) 
})