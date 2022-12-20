let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close');
let modalShowSuccess = document.getElementsByClassName('show_success');


window.addEventListener('load', function() {
    modalMain.classList.add('modal_active');
})

modalClose.addEventListener('click', function(){
    modalMain.classList.remove('modal_active');
})

modalShowSuccess.addEventListener('click', function() {
    modalSuccess.classList.add('modal_active');
})