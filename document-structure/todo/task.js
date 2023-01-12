const input = document.querySelector('.tasks__input');
const btn = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');
console.log(list);

btn.addEventListener('click', function (el) {
    el.preventDefault();

    if (input.value !== ' ') {
        list.insertAdjacentHTML('afterend', `
        <div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`)
    }

    input.value = ' ';

    const remover = document.querySelector('.task__remove')

    remover.addEventListener('click', function(e) {
        e.preventDefault();
        remover.parentElement.remove();
    })
})



