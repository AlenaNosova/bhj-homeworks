const rotator = document.querySelectorAll('.rotator__case');
let current = 0;

function ads (){
    for (let i = 0; i < rotator.length; i++) {
                rotator[i].classList.remove('rotator__case_active');
        }
        rotator[current].classList.add('rotator__case_active');
    };

setInterval(() => {
    if (current + 1 == rotator.length) {
        current = 0;
    } else {
        current ++;
    }

    ads();
}, 1000)

    
 