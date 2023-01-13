const cart = document.querySelector('.cart__products');
const btnDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const btnInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));

btnDec.forEach(event => {
    event.addEventListener('click', () => {
        const productValue = event.nextElementSibling;
        if (+productValue.textContent > 1) {
            productValue.textContent--;
        } else {
            productValue.textContent = 1;
        }
    })
});


btnInc.forEach(event => {
    event.addEventListener('click', function () {
        +event.previousElementSibling.textContent++;
    })
});

productAdd.forEach(event => {
    event.addEventListener('click', function () {
        const product = event.closest('.product');
        const img = product.querySelector('img');
        const value = product.querySelector('.product__quantity-value');
        const cartProducts = Array.from(cart.getElementsByClassName('cart__product'));
        const id = cartProducts.find(el => el.dataset.id === product.dataset.id);
        
        if (id) {
            const count = id.querySelector('.cart__product-count');
            count.textContent = Number(count.textContent) +
            Number(value.textContent);
        } else {
            cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${img.src}">
                <div class="cart__product-count">${+value.textContent}</div>
            </div>`);
        }
    })

})


    
