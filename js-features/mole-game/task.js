let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadMole = 0;
let lostMole = 0;
let index = document.getElementsByClassName('hole');

const getHole = index => document.getElementById(`hole${index}`)

for(let i = 0; i < 10; i++) {
    let holeMole = getHole(index);
    holeMole.addEventListener('click', function() {
        if (hole.className.includes( 'hole_has-mole' )){
            deadMole++; 
            dead.textContent = deadMole;
        } else {
            lostMole++;
            lost.textContent = lostMole;
        }
    })
    if (lostMole == 5) {
        alert ('Поражение! Попробуйте ещё раз!')
    } else if (deadMole == 10) {
        alert ('Победа!')
    }
} 