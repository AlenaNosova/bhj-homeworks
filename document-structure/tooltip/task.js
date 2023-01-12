const tooltip = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < tooltip.length; i++) {
    tooltip[i].insertAdjacentHTML('afterEnd', `<div class="tooltip">${tooltip[i].title}</div>`);
    tooltip[i].addEventListener('click', function (el) {
        el.preventDefault();

        const tooltips = document.querySelectorAll('.tooltip');
        if(tooltips[i].classList.contains('tooltip_active')) {
            tooltips[i].classList.remove('tooltip_active')
        } else {
            tooltips[i].classList.add('tooltip_active');
            
            let position = tooltip[i].getBoundingClientRect();
            tooltips[i].style.left = position.left + 'px';
            tooltips[i].style.top = position.top + 20 + 'px';
        }
    })
}