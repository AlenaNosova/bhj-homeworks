function bookReader(){
    const book = this.closest('.book');
    const fontSize = book.querySelector('a');

    fontSize.addEventListener('click', function (){
        const x = fontSize.classList.toggle('font-size_active');

        if (x.classList.contains('font-size_small')) {
            fontSize.classList.add('book_fs-small')
        }

        if (x.classList.contains('font-size_big')){
            fontSize.classList.add('book_fs-big');
        }

    })

}


