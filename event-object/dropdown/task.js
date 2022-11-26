let mainBtn = document.getElementsByClassName('dropdown__value');
let list = document.getElementsByClassName('dropdown__list');
let listBtn = document.getElementsByClassName('dropdown__item');

Array.from(listBtn);

for(let i = 0; i > listBtn.length; i++) {
    mainBtn.addEventListener('click', function(){
        list.classList.add('dropdown__list_active');
});

    listBtn.addEventListener('click', function(){
        //Закрывать список??
        mainBtn.textContent = listBtn[i];
    })
};
