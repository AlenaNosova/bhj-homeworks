function ads () {
    const rotator = this.closest('.rotator');
    const rotatorCase = rotator.querySelector('span');

    while(rotatorCase){
        setInterval(() => {
            const x = rotatorCase.classList.toggle('rotator__case_active');
            rotatorCase.textContent = x;
        }, 1000)
    }
} 