let dead = getElementById('dead');
let lost = getElementById('lost');
let deadMole = 0;
let lostMole = 0;

getHole = index => document.getElementById(`hole${index}`)

for(index = 0; index < 10; index++) {
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

getHole()