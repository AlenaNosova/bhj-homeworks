let modalMain = document.getElementById('modal_main');
let modalClose = document.getElementsByClassName('modal__close');
let modalShowSuccess = document.getElementsByClassName('show_success');
let modalSuccess = document.getElementById('modal_success');


modalMain. addEventListener('load', function() {
    modalMain.classList.add('modal_active');
})

modalClose.onclick = function(){
    modalMain.hide();
}

modalShowSuccess.onclick = function() {
    modalSuccess.show();
}