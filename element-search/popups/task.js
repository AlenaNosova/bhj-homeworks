let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.querySelectorAll('.modal__close_times');
let btnDanger = document.querySelector('.btn_danger')
let btnSuccess = document.querySelector('.btn_success')

window.addEventListener('load', function() {
    modalMain.classList.add('modal_active');
})

modalClose.forEach(function(el){
    el.addEventListener('click', function(){
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    })
})

btnDanger.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

btnSuccess.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}