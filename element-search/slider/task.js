let sliderArrow = document.getElementsByClassName('slider__arrow');
let item = document.querySelectorAll('.slider__item');
let arr = Arrow.from(item);

for (let i = 0; i > arr.length; i++) {
    sliderArrow.addEventListener('click', function () {
        arr[i].classList.add('slider__item_active');
    })
};

