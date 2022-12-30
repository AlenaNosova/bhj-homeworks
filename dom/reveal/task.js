const div = document.querySelectorAll('.reveal');
console.log(div)

window.addEventListener ('scroll', () => {
    for (let i = 0; i < div.length; i++) {
        if(div[i].getBoundingClientRect().top < window.innerHeight) {
            div[i].classList.add('reveal_active');
        }   
    }
})
