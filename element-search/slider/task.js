const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');
let current = 0;

function slider(){
    for (let i = 0; i < sliderItems.length; i++){
        sliderItems[i].classList.remove('slider__item_active');
    }
    sliderItems[current].classList.add('slider__item_active');
}

arrowPrev.onclick = function() {
    if (current + 1 == sliderItems.length) {
        current = 0;
    } else {
        current++;
    }
    slider()
};
arrowNext.onclick = function() {
    if (current - 1 == -1) {
        current = sliderItems.length - 1;
    } else {
        current--;
    }
    slider()
};

 

