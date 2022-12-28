const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click',(event) => {
        
        let tabsCurrent = event.target.parentElement.children;
        for(let t = 0; t < tabsCurrent.length; t++) {
            tabsCurrent[t].classList.remove('tab_active');
        }
        
        event.target.classList.add('tab_active');


        let contentsCurrent = event.target.parentElement.nextElementSibling.children;
        for(let c = 0; c < contentsCurrent.length; c++) {
            contentsCurrent[c].classList.remove('tab__content_active');
        }
        
        contents[i].classList.add('tab__content_active');

    })
}

