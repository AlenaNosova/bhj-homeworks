let mainBtn = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let listBtn = document.querySelectorAll('a');


mainBtn.addEventListener('click', function(event){
    if(event){
        list.classList.add('dropdown__list_active');
    } else {
        list.classList.remove('dropdown__list_active');
    }
});

for(let i = 0; i < listBtn.length; i++){
    listBtn[i].addEventListener('click', function(e){
        e.preventDefault();
        let content = this.textContent;
        mainBtn.textContent = content;
        list.classList.remove('dropdown__list_active');
    })
};