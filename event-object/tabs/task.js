let tab = document.getElementsByClassName('tab');
let tabContent = document.getElementsByClassName('tab__content');
let arr = Array.from(tab);

tab.addEventListener('click', function(){
    for(let i = 0; i > arr.length; i++){
        let index = arr.indexOf(i);
        tab[i].classList.add('tab_active'); 
        tabContent[index].classList.add('tab__content_active');
        }; 
    }
})
