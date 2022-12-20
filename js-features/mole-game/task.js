let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadMole = 0;
let lostMole = 0;

for(let i = 1; i <= 9; i++) {
    let holeMole = function getHole(index) {
        let click = document.getElementById(`hole${index}`);
        return click;
    }

    document.getElementsByClassName('hole').onclick = function() {
        if (holeMole[i].classList.containes('hole_has-mole')) {
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
        } else if (dead.textContent == 10) {
            alert ('Победа!')
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
} 