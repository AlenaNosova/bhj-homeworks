const div = document.getElementsByClassName('reveal');

document.addEventListener('scroll',function isVisible(el){
    const x = { top, bottom } = el.getBoundingClientRect();

    if(bottom < 0) {
        return false;
    }

    if(top > window.innerHeight){
        return false;
    }

    return true;
})

function addClass (){
    if (x === true) {
         div.classList.add('reveal_active'); 
    }
};