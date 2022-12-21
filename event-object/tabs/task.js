let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {
        
        let currentTab = event.target.closest('.tab__navigation');
        for(let t = 0; t < currentTab.length; t++){
            currentTab[t].classlist.remove('tab_active');
        }
        event.target.classList.add('tab_active');


        let currentContent = event.target.closest('.tab__contents');
        for(let c = 0; c < currentContent.length; t++){
            currentContent[c].classlist.remove('tab__content_active');
        }
        tabContent[i].classList.add('tab__content_active');

    })
}
