const fonts = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

for(let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click',(event) => {
        event.preventDefault();
        let fontCurrent = event.target.parentElement.children;
        for(let t = 0; t < fontCurrent.length; t++) {
            fontCurrent[t].classList.remove('font-size_active');
        }

        if(fonts[i].classList.contains('font-size_small')) {
            event.target.classList.add('font-size_active');
            book.classList.add('book_fs-small');
        } else if(fonts[i].classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            event.target.classList.add('font-size_active');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
            event.target.classList.add('font-size_active');
        }      
    })
}
