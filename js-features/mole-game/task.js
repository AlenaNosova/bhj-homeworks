let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let hole = document.querySelectorAll('.hole')
let deadMole = 0;
let lostMole = 0;

hole.forEach(function(el) {
    el.addEventListener('click', function(){
        if (el.className.includes('hole_has-mole')) {
            deadMole++; 
            dead.textContent = deadMole; 
        } else {
            lostMole++;
            lost.textContent = lostMole;
        }

    if (lost.textContent == 5) {
        alert ('Поражение! Попробуйте ещё раз!');
        dead.textContent = 0;
        lost.textContent = 0;
        deadMole = 0;
        lostMole = 0;
    } else if (dead.textContent == 10) {
        alert ('Победа!')
        dead.textContent = 0;
        lost.textContent = 0;
        deadMole = 0;
        lostMole = 0;
    }
    })
}) 
