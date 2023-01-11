const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach (function (event) {
    event.addEventListener('change', function () {
        if(event.closest('.interests_active') == null) {
            event.parentElement.nextElementSibling.querySelectorAll('input').forEach (el => {
                if (event.checked) {
                    el.checked = true;
                } else {
                    el.checked = false;
                }
            })
        }
    })
})
