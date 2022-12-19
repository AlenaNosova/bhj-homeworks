let arrowPrev = document.querySelector('.slider__arrows');
let arrowNext = document.getElementsByClassName('slider__arrow_next');
let sliderItems = Array.from(document.querySelector('.slider__item'));
let current = 0;

function slider() {
    for(let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.add('slider__item_active'); 
        sliderItems[current].classList.remove('slider__item_active');       
    }
}
slider()

arrowPrev.onclick = function(){
    if(current - 1 == -1){
        current = sliderItems.length - 1;
    } else{
        current--;
    }
    slider()
};

arrowNext.onclick = function(){
    if(current - 1 == sliderItems.length){
        current = 0;
    } else{
        current++;
    }
    slider()
};
 

